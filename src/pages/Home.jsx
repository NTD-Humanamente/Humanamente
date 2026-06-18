import image1 from "../assets/Image/2.png";
import image2 from "../assets/Image/ref.png";
import image3 from "../assets/Image/1.png";
import image4 from "../assets/Image/3.png";
import image5 from "../assets/Image/4.png";
import image6 from "../assets/Image/5.png";
import image7 from "../assets/Image/6.png";

export default function Home({ onStartGame, onLogin, scrolled }) {
  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className='header__logo'>
          <img className='header__img' src={image1} alt="Logo" />
          <p className='header__name'>Humanamente</p>
        </div>

        <button className='header__button' onClick={onStartGame}>
          Iniciar Treinamento
        </button>
      </header>

      <main>
        <section className='description'>
          <img className='description__img' src={image2} alt="imagem da refinaria" />
          <div className='description__content'>
            <p className='description__text'><span>⚡</span>Desenvolva Consciência Operacional</p>

            <h1 className='description__title'>
              Treine suas Habilidades <span>Não Técnicas</span>
            </h1>

            <p className='description__content-text'>
              Assuma papéis operacionais em simuladores reais. Tome decisões sob pressão e veja o impacto imediato na cultura de segurança e gestão de riscos.
            </p>

            <button className='description__button' onClick={onStartGame}>
              Iniciar Treinamento →
            </button>
          </div>
        </section>

        <section className='cards'>
          
          <div className='cards__header'>
            <h2 className='cards__title'>Pilares do Treinamento Humanamente - Fase 2</h2>
            <p className='cards__text'>
              Nossa metodologia foca no desenvolvimento das habilidades fundamentais para a excelência operacional e segurança industrial.
            </p>
          </div>

          <div className='cards__container'>
            <ul className='cards__list'>
              <li className='cards__item'>
                <img className='cards__img' src={image3} alt="icone de um escudo" />
                <h3 className='cards__subtitle'>Consciênia Situacional</h3>
                <p className='cards__description'>Avalie perigos em tempo real e tome decisões que preservam a integridade física e operacional.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image4} alt="icone de um alvo" />
                <h3 className='cards__subtitle'>Tomada de Decisão</h3>
                <p className='cards__description'>Processos mentais estruturados para agir rapidamente em situações críticas e inesperadas.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image5} alt="icone de dois usuários" />
                <h3 className='cards__subtitle'>Cooperação / Trabalho em Equipe</h3>
                <p className='cards__description'>Fortaleça a cooperação e a comunicação entre turnos para evitar falhas sistêmicas.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image6} alt="icone de liderança" />
                <h3 className='cards__subtitle'>Liderança / Habilidades Gerenciais</h3>
                <p className='cards__description'>Exerça influência positiva e coordene ações eficazes durante emergências operacionais.</p>
              </li>
            </ul>
          </div>
            
          <div className="cards__background">
           <div className='cards__container'>
            <h2 className='cards__title'>Consciênia Situacional</h2>
            <ul className='cards__list'>
              <li className='cards__item'>
                <img className='cards__img' src={image3} alt="icone de um escudo" />
                <h3 className='cards__subtitle'>Monitoramento</h3>
                <p className='cards__description'>Avalie perigos em tempo real e tome decisões que preservam a integridade física e operacional.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image4} alt="icone de um alvo" />
                <h3 className='cards__subtitle'>Consciência do Ambiente Externo</h3>
                <p className='cards__description'>Processos mentais estruturados para agir rapidamente em situações críticas e inesperadas.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image5} alt="icone de dois usuários" />
                <h3 className='cards__subtitle'>Percepção / Compreensão / Projeção</h3>
                <p className='cards__description'>Fortaleça a cooperação e a comunicação entre turnos para evitar falhas sistêmicas.</p>
              </li>
              </ul>
              </div>


            <div className='cards__container'>
            <h2 className='cards__title'>Tomada de Decisão</h2>
            <ul className='cards__list'>
              <li className='cards__item'>
                <img className='cards__img' src={image3} alt="icone de um escudo" />
                <h3 className='cards__subtitle'>Definição e Diagnóstico do Problema</h3>
                <p className='cards__description'>Avalie perigos em tempo real e tome decisões que preservam a integridade física e operacional.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image4} alt="icone de um alvo" />
                <h3 className='cards__subtitle'>Produção de Opções</h3>
                <p className='cards__description'>Processos mentais estruturados para agir rapidamente em situações críticas e inesperadas.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image5} alt="icone de dois usuários" />
                <h3 className='cards__subtitle'>Avaliação do Risco</h3>
                <p className='cards__description'>Fortaleça a cooperação e a comunicação entre turnos para evitar falhas sistêmicas.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image6} alt="icone de liderança" />
                <h3 className='cards__subtitle'>Revisão dos Resultados</h3>
                <p className='cards__description'>Exerça influência positiva e coordene ações eficazes durante emergências operacionais.</p>
              </li> 
              </ul>
              </div>
              
            <div className='cards__container'>
              <h2 className='cards__title'>Cooperação / Trabalho em Equipe</h2>
            <ul className='cards__list'>
              <li className='cards__item'>
                <img className='cards__img' src={image3} alt="icone de um escudo" />
                <h3 className='cards__subtitle'>Comunicação</h3>
                <p className='cards__description'>Avalie perigos em tempo real e tome decisões que preservam a integridade física e operacional.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image4} alt="icone de um alvo" />
                <h3 className='cards__subtitle'>Interação</h3>
                <p className='cards__description'>Processos mentais estruturados para agir rapidamente em situações críticas e inesperadas.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image5} alt="icone de dois usuários" />
                <h3 className='cards__subtitle'>Apoio à Equipe</h3>
                <p className='cards__description'>Fortaleça a cooperação e a comunicação entre turnos para evitar falhas sistêmicas.</p>
              </li>

               <li className='cards__item'>
                <img className='cards__img' src={image6} alt="icone de liderança" />
                <h3 className='cards__subtitle'>Resolução de Conflitos</h3>
                <p className='cards__description'>Exerça influência positiva e coordene ações eficazes durante emergências operacionais.</p>
              </li> 
              </ul>
              </div>

            <div className='cards__container'>
              <h2 className='cards__title'>Liderança / Habilidades Gerenciais</h2>
            <ul className='cards__list'>
              <li className='cards__item'>
                <img className='cards__img' src={image3} alt="icone de um escudo" />
                <h3 className='cards__subtitle'>Uso de Autoridade e Assertividade</h3>
                <p className='cards__description'>Avalie perigos em tempo real e tome decisões que preservam a integridade física e operacional.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image4} alt="icone de um alvo" />
                <h3 className='cards__subtitle'>Oferecer e Manter Padrões</h3>
                <p className='cards__description'>Processos mentais estruturados para agir rapidamente em situações críticas e inesperadas.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image5} alt="icone de dois usuários" />
                <h3 className='cards__subtitle'>Planejamento e Coordenação</h3>
                <p className='cards__description'>Fortaleça a cooperação e a comunicação entre turnos para evitar falhas sistêmicas.</p>
              </li>

              <li className='cards__item'>
                <img className='cards__img' src={image6} alt="icone de liderança" />
                <h3 className='cards__subtitle'>Gerenciamento da Carga de Trabalho</h3>
                <p className='cards__description'>Exerça influência positiva e coordene ações eficazes durante emergências operacionais.</p>
              </li> 
              </ul>
              </div>
              </div>
        </section>

        <footer className='footer'>
          <p className='footer__text'>&copy; 2026 Humanamente - Industrial Simulator. Todos os direitos reservados.</p>
        </footer>
      </main>
    </>
  );
}