import { useState } from "react";
import "./App.css";
import { dummyData } from "./constants.js";

let data = Object.keys(dummyData);

function App() {
  const [topic, setTopic] = useState("HTML");

  const clickHandler = (item) => {
    setTopic(item);
  };

  return (
    <div className="wrapper">
      <h1>
        Find&nbsp; & &nbsp;Learn from the best <span>blogs</span>
      </h1>
      <p className="sub-heading">
        Click on any of the topic below <span>to get the best blogs.</span>
      </p>
      <div className="buttons-wrap">
        {data.map((el) => (
          <button key={el} onClick={() => clickHandler(el)}>
            {el}
          </button>
        ))}
      </div>
      <div className="card-wrap">
        {dummyData[topic].map((el) => (
          <div className="card" key={el.name}>
            <div className="img-holder">
              <img src={el.image} alt={el.name} />
            </div>
            <p>{el.name}</p>
            <p className="low-opacity">
              {" "}
              Author :<span> {el.author}</span>
            </p>
            <p className="low-opacity">
              Rating : <span>{el.rating}</span>
            </p>
            <a
              className="link"
              href={el.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              Read Now
            </a>
          </div>
        ))}
      </div>
      <p className="low-opacity">
        Disclaimer:{" "}
        <span>
          Above blogs are listed based on my opinion it is not based on any
          survey or organization.
        </span>
      </p>
      <p className="low-opacity">
        <span>Made with </span>💚 <span>by</span> Aravind
      </p>
    </div>
  );
}

export default App;
