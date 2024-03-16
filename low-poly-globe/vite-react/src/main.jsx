import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GameStateProvider } from './contexts/game-state.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GameStateProvider>
        <App />
    </GameStateProvider>
)
