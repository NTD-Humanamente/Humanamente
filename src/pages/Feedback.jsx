import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageTeam from "../assets/Image/equip.png";
import SkillsRadarChart from "../components/SkillsRadarChart";

export default function Feedback({onMenu, restart, profileName}) {

  return (
    <div>
    <header className='header__menu'>
                    <div className='header__logo'>
                      <img className='header__img' src={image1} alt="Logo" />
                      <p className='header__name'>Humanamente</p>
                    </div>
            <div className='header__profile'>
                <img className='header__profile-img' src={imageProfile} alt="Profile" />       
             <button className='header__profile-button'>
              Histórico
             </button>
             <div className='header__profile-container'>
              <p className='header__profile-name'>{profileName}</p>
             <img className='header__profile-team' src={imageTeam} alt="icone de time" />
             </div>
            </div>
            </header>
            <main className="feedback">
               <div className="feedback__header">
                <div>
                <h2 className="feedback__title">Feedback do Treinamento</h2>
                <p className="feedback__text">Avaliação das suas competências não técnicas.</p>
                </div>
                <div className="feedback__results"> 
                <button className="feedback__button">⭳ PDF</button>
                <button className="feedback__button" onClick={onMenu}>☰ Menu</button>
                </div>
               </div>
               <div className="feedback__report">
                <div className="feedback__report-block">
                  <h3 className="feedback__report-title">Relatório Operacional</h3>
                  <p className="feedback__report-description">Análise lógica baseada no seu desempenho</p>
                  <p className="feedback__report-text">Analise das decisoes notech</p>      
                </div>
                <div className="feedback__block">
                <div className="feedback__skills">
                  <h3 className="feedback__skills-title">Indicadores Não Técnicos</h3>
                  <p className="feedback__skills-text">Resultados consolidados</p>
                  <SkillsRadarChart />
                </div>
                <button className="feedback__restart" onClick={restart}>Reiniciar Simulação</button>
               </div>
               </div>
            </main>
    </div>
  );
}