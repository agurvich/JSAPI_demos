import { useContext, createContext, useState, useEffect } from 'react';
import { vehicles } from '../utils/vehicle';

// Create context
const GameStateContext = createContext();

// Provider component
export const GameStateProvider = ({ children, maxTime=60 }) => {

    // game control
    const [startTime, setStartTime] = useState();
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

    // bind controls to cycle vehicle & change heading
    useEffect(()=>{

        function handleCycleVehicle(event){
            if (event.key === '1') {
                setCurrentVehicle(vehicles.air[0]);
            } else if (event.key === '2') {
                setCurrentVehicle(vehicles.land[0]);
            }
            else if (event.key === '3') {
                setCurrentVehicle(vehicles.sea[0]);
            }
        }

        document.addEventListener('keydown', handleCycleVehicle);

        function handleHeadingChange(event){
            if (event.key === 'w') {
                setVehicleLocation( prevVehicleLocation => {
                    return {
                        ...prevVehicleLocation,
                        headingDegrees:(prevVehicleLocation.headingDegrees+5)%360}
                });
            } else if (event.key === 's') {
                setVehicleLocation( prevVehicleLocation => {
                    return {
                        ...prevVehicleLocation,
                        headingDegrees:(prevVehicleLocation.headingDegrees-5)%360}
                });
            }
        }

        document.addEventListener('keydown', handleHeadingChange);

        return () => {
            document.removeEventListener('keydown',handleCycleVehicle);
            document.removeEventListener('keydown',handleHeadingChange);
        }
    },[]);

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
            // don't do anything until the game has started
            if (!startTime) return;

            // stop the movement of the vehicle
            if (gameOver) clearInterval(interval);

            var moveSize = 150; // Degree to move the red dot by

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
    },[startTime,gameOver,currentVehicle]);

    useEffect(()=>{}, [vehicleLocation]);

    const value = {
        vehicleLocation, setVehicleLocation,
        numVisited, setNumVisited,
        totalCO2, setTotalCO2,
        currentVehicle,setCurrentVehicle,
        gameOver, setGameOver,
        elapsedTime,setStartTime
    };

    return (
        <GameStateContext.Provider value={value}>
            {children}
        </GameStateContext.Provider>
    );
};

// Custom hook for accessing context
export const useGameState = () => useContext(GameStateContext);
