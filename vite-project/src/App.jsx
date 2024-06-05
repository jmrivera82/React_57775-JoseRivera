import Header from '/Header.jsx'


function App (){
 // return "Hola Mundo!"

  //return <h1>hOLA mUNDO DESDE UN P</h1>

  // return <h1 id="titulo" className="titulo">Hola mundo desde un P</h1>

  return (
    <>
      <Header/>
      <main>
        <h2>Home</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quae vitae deserunt, repudiandae commodi nam blanditiis alias voluptate officia labore neque quaerat dolor ab voluptates molestiae consequatur repellat fugiat odit.</p>
      </main>
      <footer>
        <p>Copyright &copy; - Jose</p>
      </footer>
    </>
    )

}

export default App













/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/