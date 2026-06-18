import { useState, useEffect } from 'react'
import './styles/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/menu';
import Game from './pages/Game';
import History from './pages/History';
import Feedback from './pages/Feedback';
import End from './pages/End'



function App() {
  const [screen, setScreen] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [profileName, setProfileName] = useState(() => {
    return localStorage.getItem('header__profile-name') || '';
  });
  const [gameScores, setGameScores] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSubmit = (teamName) => {
    setProfileName(teamName);
    localStorage.setItem('header__profile-name', teamName);
    setScreen("menu");
  };

  const handleGameEnd = (scores) => {
    setGameScores(scores);
    setScreen("end");
  };

return (
  <div className="container">
      {screen === "home" && (
        <Home
          scrolled={scrolled}
          onStartGame={() => setScreen("login")}
          onLogin={() => console.log("login")}
        />
      )}

      {screen === "login" && (
        <Login
          scrolled={scrolled}
          onSubmit={handleLoginSubmit}
        />
      )}

      {screen === "menu" && <Menu profileName={profileName} onLogin={() => setScreen("history")} scores={gameScores}/>}
      {screen === "history" && <History profileName={profileName} onLogin={() => setScreen("game")} back={() => setScreen("menu")}/>}
      {screen === "game" && <Game profileName={profileName} onGameEnd={handleGameEnd} />}
        {screen === "end" && <End profileName={profileName}  onLogin={() => setScreen("feedback")}/>}
      {screen === "feedback" && <Feedback onMenu={() => setScreen("menu")} restart={() => setScreen("game")} profileName={profileName} scores={gameScores}/>}
    </div>
  );
}

export default App;