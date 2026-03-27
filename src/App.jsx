import { useState } from 'react'
<<<<<<< HEAD
import './App.css'
import gameData from "./gameData";

function App() {
  const [tela, setTela] = useState("menu");
  const [faseAtual, setFaseAtual] = useState("inicio");
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const fase = gameData[faseAtual];
const iniciarJogo = () => {
    setTela("jogo");
    setFaseAtual("inicio");
    setMostrarOpcoes(false);
  };
const escolherOpcao = (proximo) => {
    setFaseAtual(proximo);
    setMostrarOpcoes(false); // volta pra tela de imagem
  };
return (
    <div className="container">
      {tela === "menu" && (
        <div className='menu'>
          <h1 className='title'>Game Humanamente</h1>
          <button className='button__menu' onClick={iniciarJogo}>
            Iniciar Jogo
          </button>
        </div>
      )}
      {tela === "jogo" && (
        <div>
          {!mostrarOpcoes ? (
            <div className='img__cena'>
              <img src={fase.image} alt="Imagem da fase" className='image' />
              <h2 className='text'>{fase.descricao}</h2>
              <button className='button__img' onClick={() => setMostrarOpcoes(true)}>
                Continuar
              </button>
            </div>
          ) : (
            <div className='end'>
              <h2 className='who'>{fase.texto}</h2>
              {fase.opcoes.length > 0 ? (
                fase.opcoes.map((opcao, index) => (
                  <button className='button' key={index} onClick={() => escolherOpcao(opcao.proximo)} >
                    {opcao.texto}
                  </button>
                ))
              ) : (
                <button className='button__back' onClick={() => setTela("menu")}>
                  Voltar ao menu
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
=======
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
>>>>>>> 0a7ba472f9a106187038699a2550a16d9d456b10
