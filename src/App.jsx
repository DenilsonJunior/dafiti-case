import { useState } from 'react'
import './App.css'
import Capa from './components/capa/Capa'
import Slider from './components/slider/Slider'
import Guide from './components/guide/Guide'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Capa/>
            <Slider/>
            <Guide/>
        </>
    )
}

export default App
