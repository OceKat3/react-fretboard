import { useState } from 'react'
import './App.css'
import { getNoteName, HARMONIC_MINOR, MAJOR, MINOR, range, Scale, STANDARD_TUNING } from './core/note-logic'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {MAJOR.map((flag, index) => flag && <span style={{fontSize:'4rem', margin:'1rem'}} key={index}>{getNoteName(index)}</span>)}
      <br />
      {MINOR.map((flag, index) => flag && <span style={{fontSize:'4rem', margin:'1rem'}} key={index}>{getNoteName(index)}</span>)}
      <br />
      {HARMONIC_MINOR.map((flag, index) => flag && <span style={{fontSize:'4rem', margin:'1rem'}} key={index}>{getNoteName(index)}</span>)}
      <br />
      {STANDARD_TUNING.map(
        (pitchClass, index) => <span style={{fontSize:'4rem', margin:'1rem'}} key={index}>{getNoteName(pitchClass)}</span>
        )}
    </>
  )
}

export default App
