import { useContext, createContext, useState, useEffect } from 'react';

// Create context
const GameStateContext = createContext();

// Provider component
export const GameStateProvider = ({ children, maxTime=30 }) => {


    // game control
    const [startTime, setStartTime] = useState(new Date());
    const [elapsedTime, setElapsedTime] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // scoring
    const [numVisited, setNumVisited] = useState(0);
    const [totalCO2, setTotalCO2] = useState(0);

    // vehicles
    const [vehicleLocation, setVehicleLocation] = useState({ lat: 0, long: 0 });

    // update elapsed time every second
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const elapsed = Math.floor((now - startTime)/1000);
            setElapsedTime(elapsed); // Convert to seconds
            if ( elapsed >= maxTime ) {
                setGameOver(true);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [startTime]);

    const value = {
        vehicleLocation, setVehicleLocation,
        numVisited, setNumVisited,
        totalCO2, setTotalCO2,
        elapsedTime, gameOver
    };

    return (
        <GameStateContext.Provider value={value}>
            {children}
        </GameStateContext.Provider>
    );
};

// Custom hook for accessing context
export const useGameState = () => useContext(GameStateContext);
