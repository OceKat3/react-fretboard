import { useState } from 'react'
import './App.css'
import { getNoteName, HARMONIC_MINOR, MAJOR, MINOR, range, Scale, STANDARD_TUNING } from './core/noteLogic'
import Fretboard from './Components/Fretboard/Fretboard'
import { ScaleContext } from './core/scaleContext'

function App() {

  const [scale, setScale] = useState(MAJOR)
  const [root, setRoot] = useState(0);
  const [tuning, setTuning] = useState(STANDARD_TUNING)

  const handleNotePressed = (pitchClass:number) => setScale(prev => prev.map((flag, index) => index == pitchClass ? !flag : flag))

  return (
    <ScaleContext.Provider value={{scale, root, tuning}}>
      <Fretboard handleNotePressed={handleNotePressed} />
    </ScaleContext.Provider>
  )
}

export default App
