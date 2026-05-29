import { useState, useEffect } from 'react'
import './styles/App.css';
import Login from './pages/login';
import Home from './pages/Home';
import Menu from './pages/menu';
import Game from './pages/Game';
import Game1 from './pages/Game1';



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

      {screen === "menu" && <Menu onLogin={() => setScreen("game")}/>}
      {screen === "game" && <Game onLogin={() => setScreen("game1")}/>}
      {screen === "game1" && <Game1 />}
    </div>
  );
}

export default App;