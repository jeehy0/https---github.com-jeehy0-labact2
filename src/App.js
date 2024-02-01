import fblogo from "./fb.svg";
import twtlogo from "./ig.svg";
import iglogo from "./twt.svg";
import tiktoklogo from "./tiktok.svg";
import Comp1 from "./comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav class="navbar">
            <div class="logo">
              <a href="/">lamona</a>
            </div>
            <div class="nav-menu">
              <a>HOME</a>
              <a>ABOUT</a>
              <a>DIRECTORY</a>
              <a>FAVORITES</a>
              <a>CAN'T DECIDE?</a>
            </div>
          </nav>
        </header>
      </div>

      <div className="bigger-div">
        <div className="big-div">
          <div className="about">
            <h1>About Lamona</h1>
            <p>
              <b>Lamona</b> is a food and drink directory for Thomasians.
              <br></br> This project is specifically catered for those who can't
              seem to decide what to eat (or drink).
            </p>
          </div>
          <div className="big-div-two">
            <div className="components">
              <Comp1 />
              <Comp2 />
              <Comp3 />
            </div>
          </div>
          <div className="developers">
            <p>
              Developed and designed with the cravings by Anella Pascua, Andrea
              Dayo, Austine Marin, Brin Isaac, Carlo Minano, Danial Santos, Faye
              Felices, Joshua Entrata, Julia Pascua, Juliana Rolluqui, Kercwin
              Ocampo, Lance Gulinao, Richard Caringal, and Sharmaine Arganosa.
            </p>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="logo">
          <img src="./directories/tomwebLogo.webp" />
        </div>
        <div class="footer-menu">
          <div className="fb"> </div>
          <div className="twt"> </div>
          <div className="ig"> </div>
          <div className="tiktok"> </div>
        </div>
      </footer>
    </>
  );
}

export default App;
