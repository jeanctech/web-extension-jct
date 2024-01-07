import { createSignal } from 'solid-js'
import Solid from './Assets/Solid.svg'
import Vite from '../Public/Vite.svg'
import './Styles/App.css'

function App() {
  const [count, setCount] = createSignal(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Vite} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={Solid} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test Hmr
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
