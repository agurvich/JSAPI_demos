import styled from 'styled-components';
import { useGameState } from '../contexts/game-state';

const ScoreCounterContainer = styled('div')`
    position:absolute;
    top:0;
    right:0;
    font-size:3vmin;
    color:white;
`;

function ScoreCounter({}){
    const {elapsedTime,numVisited,totalCO2} = useGameState();

    return (
        <ScoreCounterContainer>
            <p> Time Elapsed: {elapsedTime} seconds </p>
            <p> Visited: {numVisited} landmarks  </p>
            <p> Carbon Emissions: {totalCO2} tons </p>
        </ScoreCounterContainer>
    );
};

export default ScoreCounter;