import { useState } from 'react'
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