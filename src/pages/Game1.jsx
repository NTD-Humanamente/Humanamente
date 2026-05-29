import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageGame2 from "../assets/Image/reuniao2.png";

export default function Game1() {

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
              <section className='game'>
                <div className='game__container'>
                  <p className='game__text'>Operação em Equipe - Iniciante</p>
                  <h2 className='game__title'>Vazamento de Duto de Gás</h2>
                </div>
                <div className='game__description'>
                  <img className='game__description-img' src={imageGame2} alt="Game" />
                  <p className='game__description-text1'>Você e sua equipe estão no início do turno. A rotina estava tranquila quando os alarmes de temperatura e pressão começaram a tocar ao mesmo tempo. Ninguém ainda sabe exatamente o que está acontecendo — as leituras no painel estão mudando, o rádio começou a chamar e o Supervisor não está na sala.</p>
                </div>
                <div className='game__options'>
                  <button className='game__option' >
                    A gente precisa entender o que está acontecendo antes de mexer em qualquer coisa. Se agir errado, piora.
                  </button>
                  <button className='game__option'>
                    A gente divide: alguém fica no painel ajustando o que der, outro vai a campo ver o que está acontecendo e alguém tenta falar com o Supervisor.
                  </button>
                  <button className='game__option' >
                    O Supervisor precisa saber disso agora. A gente não toma decisão grande sem ele — é responsabilidade dele.
                  </button>
                </div>
              </section>
            </main>
    </div>
  );
}