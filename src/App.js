import "./App.css";
import W3schools from "./images/w3schools.png";
import Medium from "./images/medium.png";
import Dev from "./images/dev.jpg";
import CssTricks from "./images/css-tricks.jpg";
import MDN from "./images/mdn.png";

function App() {
  return (
    <div className="wrapper">
      <h1>
        Find&nbsp; & &nbsp;Learn from the best <span>blogs</span>
      </h1>
      <p className="sub-heading">
        Click on any of the topic below <span>to get the best blogs.</span>
      </p>
      <div className="buttons-wrap">
        <button>HTML</button>
        <button>CSS</button>
        <button>Javascript</button>
        <button>React</button>
        <button>Redux</button>
      </div>
      <div className="card-wrap">
        <div className="card">
          <div className="img-holder">
            <img src={MDN} alt="MDN" />
          </div>
          <p>HTML: HyperText Markup Language</p>
          <p className="low-opacity">
            {" "}
            Author :<span> MDN</span>
          </p>
          <a
            className="link"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer noopener"
          >
            Read Now
          </a>
        </div>

        <div className="card">
          <div className="img-holder">
            <img src={W3schools} alt="w3-schools" />
          </div>
          <p>W3Schools is a perfect place to learn HTML.</p>
          <p className="low-opacity">
            {" "}
            Author :<span> W3Schools</span>
          </p>
          <a
            className="link"
            href="https://www.w3schools.com/html/default.asp"
            target="_blank"
            rel="norelation noreferrer"
          >
            Read Now
          </a>
        </div>

        <div className="card">
          <div className="img-holder">
            <img src={CssTricks} alt="CSS-Tricks" />
          </div>
          <p>Snippets for HTML</p>
          <p className="low-opacity">
            {" "}
            Author :<span> Chris Coyier</span>
          </p>
          <a
            className="link"
            href="https://css-tricks.com/snippets/html/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Read Now
          </a>
        </div>

        <div className="card">
          <div className="img-holder">
            <img src={Medium} alt="Medium" />
          </div>
          <p>Beginner’s HTML Cheat Sheet.</p>
          <p className="low-opacity">
            {" "}
            Author :<span> Bradley Nice</span>
          </p>
          <a
            className="link"
            href="https://medium.com/level-up-web/beginners-html-cheat-sheet-f9b1e3ce88a6"
            target="_blank"
            rel="norelation noreferrer"
          >
            Read Now
          </a>
        </div>

        <div className="card">
          <div className="img-holder">
            <img src={Dev} alt="Dev.to" />
          </div>
          <p>Stop using so many divs! An intro to semantic HTML</p>
          <p className="low-opacity">
            {" "}
            Author :<span> Ken Bellows</span>
          </p>
          <a
            className="link"
            href="https://dev.to/kenbellows/stop-using-so-many-divs-an-intro-to-semantic-html-3i9i"
            target="_blank"
            rel="noreferrer noopener"
          >
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
