import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGameState } from '../contexts/game-state';

const LeaderboardContainer = styled('div')`
    white-space: nowrap;
    font-size:10vmin;
    background-color:black;
    color:white;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`;

function Leaderboard({}){
    const {elapsedTime,numVisited,totalCO2} = useGameState();
    /*
            <p> Time Elapsed: {elapsedTime} seconds </p>
            <p> Visited: {numVisited} landmarks  </p>
            <p> Carbon Emissions: {totalCO2} tons </p>
    */

    return (
        <LeaderboardContainer>
            Game Over!
        </LeaderboardContainer>
    );
};

export default Leaderboard;