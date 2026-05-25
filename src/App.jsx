import { useState, useEffect } from 'react'
import './App.css'
import login from './login';
//import gameData from "./gameData";
import image1 from "./assets/Image/2.png";
import image2 from "./assets/Image/montanha.png";
import image3 from "./assets/Image/1.png";
import image4 from "./assets/Image/3.png";
import image5 from "./assets/Image/4.png";
import image6 from "./assets/Image/5.png";

function App() {
  const [tela, setTela] = useState("menu");
  const [faseAtual, setFaseAtual] = useState("inicio");
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const fase = gameData[faseAtual];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const iniciarJogo = () => {
    setTela("jogo");
    setFaseAtual("inicio");
    setMostrarOpcoes(false);
  };
const escolherOpcao = (proximo) => {
    setFaseAtual(proximo);
    setMostrarOpcoes(false);
  };
return (
  <div className="container">
   <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
    <div className='header__logo'>
      <img className='header__img' src={image1} alt="Imagem da logo humanamente" />
      <p className='header__name'>Humanamente</p>
    </div>
    <button className='header__button' onClick={login}>
      Começar Simulação
    </button>
   </header>
   <main>
    <section className='description'>
    <img className='description__img' src={image2} alt="Imagem de montanha" />
    <div className='description__content'>
    <p className='description__text'><span>⚡</span>Desenvolva Consciência Operacional</p>
    <h1 className='description__title'>Treine suas Habilidades <span>Não Técnicas</span></h1>
    <p className='description__content-text'>Assuma papéis operacionais em simuladores reais.Tome decisões sob pressão e veja o impacto imediato na cultura de segurança e gestão de riscos.</p>
    <button className='description__button' onClick={iniciarJogo}>
      Iniciar Simulação →
    </button>
    </div>
    </section>
    <section className='cards'>
      <div className='cards__header'>
      <h2 className='cards__title'>Pilares do Treinamento NOTECH</h2>
      <p className='cards__text'>Nossa metodologia foca no desenvolvimento das habilidades fundamentais para a excelência operacional e segurança industrial.</p>
      </div>
      <div className='cards__container'>
        <ul className='cards__list'>
          <li className='cards__item'>
            <img className='cards__img' src={image3} alt="icone de um escudo" />
            <h3 className='cards__subtitle'>Gestão de Riscos</h3>
            <p className='cards__description'>Avalie perigos em tempo real e tome decisões que preservam a integridade física e operacional.</p>
          </li>
          <li className='cards__item'>
            <img className='cards__img' src={image4} alt="icone de um alvo" />
            <h3 className='cards__subtitle'>Tomada de Decisão</h3>
            <p className='cards__description'>Processos mentais estruturados para agir rapidamente em situações críticas e inesperadas.</p>
          </li>
          <li className='cards__item'>
            <img className='cards__img' src={image5} alt="icone de uma pessoa" />
            <h3 className='cards__subtitle'>Trabalho em Equipe</h3>
            <p className='cards__description'>Fortaleça a cooperação e a comunicação entre turnos para evitar falhas sistêmicas.</p>
          </li>
          <li className='cards__item'>
            <img className='cards__img' src={image6} alt="icone de liderança" />
            <h3 className='cards__subtitle'>Liderança</h3>
            <p className='cards__description'>Exerça influência positiva e coordene ações eficazes durante emergências operacionais.</p>
          </li>
        </ul>
      </div>
    </section>
    <footer className='footer'>
      <p className='footer__text'>&copy; 2026 Humanamente - NOTECH Industrial Simulador. Todos os direitos reservados.</p>
    </footer>
   </main>
  </div>
  );
}

export default App;