import LowPolyGlobe from './components/low-poly-globe'

import './style.css'
import { useGameState } from './contexts/game-state'
import ScoreCounter from './components/score-counter'
import Leaderboard from './components/leaderboard'

function App() {
    const { gameOver } = useGameState()

    return (
        <>
            <LowPolyGlobe/>
            <ScoreCounter/>
            { gameOver && <Leaderboard/> }
        </>
    );
}

export default App
