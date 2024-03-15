import { useState } from 'react'
import LowPolyGlobe from './components/low-poly-globe'

import './style.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <LowPolyGlobe/>
    );
}

export default App
