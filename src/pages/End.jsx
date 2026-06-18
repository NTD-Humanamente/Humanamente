import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import endData from "../endData";
import imageTeam from "../assets/Image/equip.png";
import SkillsRadarChart from "../components/SkillsRadarChart";

export default function End({onLogin, profileName}) {

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
            <main>
            <section className='history'>
            <div className='game__container-history'> 
                <div className="game__timer">
                  <p className='game__text'>{endData[0].subtitle}</p>
                  <h2 className='game__title'>{endData[0].title}</h2>
                </div>
            </div>
            <div className='history__container'>
              <div className='history__description'>
                <p className='history__text'>{endData[0].text}</p>
              </div>
              <div className='history__media'>
                <img className='history__img' src={endData[0].image} alt="Imagem do Game" />
                <video className='history__video' controls>
                  <source src={endData[0].video} type="video/mp4" />
                </video>
              </div>
            </div>
            <button className='history__button' onClick={onLogin}>Finalizar</button>
            </section>
            </main>
    </div>
  );
}