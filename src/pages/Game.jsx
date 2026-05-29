import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageGame from "../assets/Image/reuniao.png";

export default function Game({onLogin}) {  

  return (
    <div>
    <header className='header__menu'>
                    <div className='header__logo'>
                      <img className='header__img' src={image1} alt="Logo" />
                      <p className='header__name'>Humanamente</p>
                    </div>
            <div className='header__profile'>
                <img className='header__profile-img' src={imageProfile} alt="imagem historico" />       
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
                  <img className='game__description-img' src={imageGame} alt="Imagem do Game" />
                  <p className='game__description-text'>A brigada de emergência chegou, mas a válvula de isolamento está emperrada. O Painelista (Ana) sugere fechar a linha B remotamente, enquanto você precisa decidir o suporte em field.</p>
                </div>
                <div className='game__options'>
                  <button className='game__option' onClick={onLogin}>
                    Coordenar com a Ana o fechamento remoto e isolar a área manualmente.
                  </button>
                  <button className='game__option' onClick={onLogin}>
                    Solicitar que o Técnico de Segurança verifique a integridade dos dutos vizinhos.
                  </button>
                  <button className='game__option' onClick={onLogin}>
                    Assumir a válvula sozinho sem aguardar o reporte da sala de controle.
                  </button>
                </div>
              </section>
            </main>
    </div>
  );
}