import { useState, useEffect } from 'react'
import './styles/App.css';
import Home from './pages/Home';
import Menu from './pages/menu';
import Game from './pages/Game';
import History from './pages/History';



function App() {
  const [screen, setScreen] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


return (
  <div className="container">
      {screen === "home" && (
        <Home
          scrolled={scrolled}
          onStartGame={() => setScreen("menu")}
          onLogin={() => console.log("login")}
        />
      )}

      {screen === "menu" && <Menu onLogin={() => setScreen("history")}/>}
      {screen === "history" && <History onLogin={() => setScreen("game")}/>}
      {screen === "game" && <Game />}
    </div>
  );
}

export default App;