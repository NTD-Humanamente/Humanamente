import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageMenu from "../assets/Image/h2s.png";
import imageMenu2 from  "../assets/Image/descoque.png";
import imageTeam from "../assets/Image/equip.png";
import SkillsRadarChart from "../components/SkillsRadarChart";

export default function Menu({ scrolled, onLogin, profileName }) {
  return (
    
    <>
        <header className='header__menu'>
                <div className='header__logo'>
                  <img className='header__img' src={image1} alt="Logo" />
                  <p className='header__name'>Humanamente</p>
                </div>
        <div className='header__profile'>
          <img className='header__profile-img' src={imageProfile} alt="icone do historico" />       
         <button className='header__profile-button'>
          Histórico
         </button>
         <div className='header__profile-container'>
          <p className='header__profile-name'>{profileName}</p>
          <img className='header__profile-team' src={imageTeam} alt="icone de time" />
         </div>
        </div>
        </header>

        <main>
        <section className='menu'>
           <div className='menu__collumn'> 
          <div className='menu__skills'>
           <h2 className='menu__title'>Perfil de Habilidades da Equipe</h2>
           <p className='menu__subtitle'>Evolução de suas competências</p>
           <SkillsRadarChart />
          </div>
          <div className='menu__instructions'>
                  <h2 className='menu__instructions-title'>Como Funciona</h2>
                  <p className='menu__instructions-text'>1. Leia ao briefing do cenário.</p>
                  <p className='menu__instructions-text'>2. Tome decisões sob pressão.</p>
                  <p className='menu__instructions-text'>3. Veja os desdobramentos.</p>
                  <p className='menu__instructions-text'>4. Receba feedback sobre suas escolhas.</p>
                </div>
                </div>
          <div className= 'cenarios'>
             <h2 className='cenario__title'>Cenários Disponíveis</h2>
             <p className='cenario__description'>Treine suas decisões com base em cenários reais da operação</p>
          <div className='cenario__opitions'>
          <div className='menu__fase'>
            <div className='menu__fase-card'>
            <img className='menu__fase-img' src={imageMenu} alt="Iniciante" />
            </div>
            <div className='menu__fase-info'>
                <p className='menu__fase-nivel'>Simples</p>
                <h2 className='menu__fase-title'>Vazamento e Alarme de  H₂S</h2>
                <p className='menu__fase-description'>Um alarme de gás tóxico é detectado nas proximidades da B‑98508A. A equipe aguarda sua orientação. Gerencie riscos, comunique com clareza e mantenha o controle sob pressão.</p>
                <div className='menu__fase-skill-container'>
                <p className='menu__fase-skill'>Comunicação</p>
                <p className='menu__fase-skill'>Consciência Situacional</p>
                <p className='menu__fase-skill'>Liderança</p>
                </div>
                <button className='menu__fase-button' onClick={onLogin}>Iniciar Treinamento</button>
            </div>

            
          </div>
           <div className='menu__fase'>
            <div className='menu__fase-card'>
            <img className='menu__fase-img' src={imageMenu2} alt="Iniciante" />
            </div>
            <div className='menu__fase-info'>
                <p className='menu__fase-nivel'>Complexo</p>
                <h2 className='menu__fase-title'>Interrupção Inesperada do Descoque</h2>
                <p className='menu__fase-description'>Durante o ciclo de descoque do reator R‑98501B, ocorre uma interrupção imprevista. Parte do coque permanece no interior do equipamento, sob condições potencialmente perigosas. Pressões e temperaturas começam a se comportar de forma instável. Há risco de coque quente, emissões de vapores e impacto na integridade do equipamento e da unidade.</p>
                <div className='menu__fase-skill-container'>
                <p className='menu__fase-skill'>Comunicação</p>
                <p className='menu__fase-skill'>Consciência Situacional</p>
                <p className='menu__fase-skill'>Liderança</p>
                </div>
                <button className='menu__fase-button' onClick={onLogin}>Iniciar Treinamento</button>
            </div>
          </div>
          </div>
          </div>
          
        </section>
        </main>
      
    </>
  );
}