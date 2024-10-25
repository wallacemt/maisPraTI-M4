import { useState } from 'react'
import jsLogo from '../../../site-sem-react/assets/img/logo.png'
import './App.css'

const conteudo = [
  [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem",
  ],
  [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering",
  ],
  [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)",
  ],
];

function App() {
  const [contagem, setContagem] = useState(0);
  return (
    <>
      <header>
        <img src={jsLogo} className="logo" alt="Vite logo" />
        <div>
            <h1>Vanilla Javascript</h1>
            <p>i.e., JavaScript without any (UI) framework or library</p>
        </div>
      </header>
      <main>
      <section>
            <div class="container">
                <menu>
                    <button id="btn-react" class="active" onClick={() => setContagem(0)}>Why React?</button>
                    <button id="btn-features" class="" onClick={() => setContagem(1)}>Core Features</button>
                    <button id="btn-resources" class="" onClick={() => setContagem(2)}>Related Resources</button>
                </menu>
                
                <div id="tab-content">
                    <ul>
                        <li>{conteudo[contagem][0]}</li>
                        <li>{conteudo[contagem][1]}</li>
                        <li>{conteudo[contagem][2]}</li>
                        <li>{conteudo[contagem][3]}</li>
                    </ul>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default App
