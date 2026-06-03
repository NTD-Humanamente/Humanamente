import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageGame2 from "../assets/Image/reuniao2.png";

export default function History({onLogin}) {

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
              <p className='header__profile-name'>Christian</p>
              <p className='header__profile-function'>Técnico de Segurança</p>
             </div>
            </div>
            </header>
            <main>
            <section className='history'>
            <div className='game__container-history'> 
                <div className="game__timer">
                  <p className='game__text'>Operação em Equipe - Simples</p>
                  <h2 className='game__title'>Vazamento e Alarme de  H₂S</h2>
                </div>
            </div>
            <div className='history__container'>
              <div className='history__description'>
                <p className='history__text'>Este é o histórico dahhhhhhhhhhhhhh hjhj hjh  hjh jhjhj  hjfjfj f fjf kjkjkhs operações realizadas.</p>
              </div>
              <div className='history__media'>
                <img className='history__img' src={imageGame2} alt="Imagem do Game" />
                <video className='history__video' controls>
                  <source src="../assets/Video/video.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            <button className='history__button' onClick={onLogin}>Avançar</button>
            </section>
            </main>
    </div>
  );
}
           