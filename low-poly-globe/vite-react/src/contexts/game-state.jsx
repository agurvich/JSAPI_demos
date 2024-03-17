import { useContext, createContext, useState, useEffect } from 'react';
import { vehicles } from '../utils/vehicle';

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
    const [vehicleLocation, setVehicleLocation] = useState({
        x: 0,
        y: 0,
        z: 250000 + 100000,
        headingDegrees:0 });

    // TODO: can use setAllVehicles to unlock new vehicles as players
    //  visit more monuments/specific monuments
    const [allVehicles, setAllVehicles] = useState( vehicles );
    const [currentVehicle, setCurrentVehicle] = useState(allVehicles.air[0]);

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

    // update the vehicle's position
    useEffect(()=>{
        const interval = setInterval(() => {
            // stop the movement of the vehicle
            if (gameOver) clearInterval(interval);

            var moveSize = 100; // Degree to move the red dot by

            // update the vehicle's location
            setVehicleLocation( prevVehicleLocation => {
                const newVehicleLocation = {...prevVehicleLocation}
                newVehicleLocation.x += (
                    moveSize * currentVehicle.speed * Math.cos(prevVehicleLocation.headingDegrees*Math.PI/180)
                );
                newVehicleLocation.y += (
                    moveSize * currentVehicle.speed * Math.sin(prevVehicleLocation.headingDegrees*Math.PI/180)
                );

                return newVehicleLocation;
            });

            // update the total CO2 emitted
            setTotalCO2(prevCO2 => prevCO2 + currentVehicle.carbonEmissionRate);

        },100);

        return () => clearInterval(interval);
    },[gameOver,currentVehicle]);

    useEffect(()=>{}, [vehicleLocation]);

    const value = {
        vehicleLocation, setVehicleLocation,
        numVisited, setNumVisited,
        totalCO2, setTotalCO2,
        currentVehicle,setCurrentVehicle,
        gameOver, setGameOver,
        elapsedTime,
    };

    return (
        <GameStateContext.Provider value={value}>
            {children}
        </GameStateContext.Provider>
    );
};

// Custom hook for accessing context
export const useGameState = () => useContext(GameStateContext);
