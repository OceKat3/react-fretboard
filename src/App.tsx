import { useState } from 'react'
import './App.css'
import { getNoteName, HARMONIC_MINOR, MAJOR, MINOR, range, Scale, shiftScale, STANDARD_TUNING } from './core/noteLogic'
import Fretboard from './Components/Fretboard/Fretboard'
import { ScaleContext } from './core/scaleContext'

function App() {

  const [scale, setScale] = useState(MAJOR)
  const [root, setRoot] = useState(0);
  const [tuning, setTuning] = useState(STANDARD_TUNING)

  // const handleNotePressed = (pitchClass: number) => setScale(prev => prev.map((flag, index) => index == pitchClass ? !flag : flag))
  const handleNotePressed = () => {};

  const selectScale = (pitchClass:number) => {
    console.log(pitchClass)
    setScale(shiftScale(MAJOR, pitchClass))
  }

  return (
    <section>
      <ScaleContext.Provider value={{ scale, root, tuning }}>
        <Fretboard handleNotePressed={handleNotePressed} />

      </ScaleContext.Provider>
      <select
        name="scale-select"
        onChange={evt => Number(evt.target.value) != undefined && selectScale(Number(evt.target.value))}
      >
        {range(12).map(pitchClass =>
          <option
            value={pitchClass}
            key={pitchClass}
          >
            {getNoteName(pitchClass, 'both')}
          </option>
        )}
      </select>
    </section>
  )
}

export default App
