import { Link } from "react-router-dom";
import clg_title from "./images/clg-title.png";
import ChristTech2K23 from "./images/ChristTech2K23.png";
import pp from "./images/paperpresentation.jpg";
import quiz from "./images/quiz.jpg";
import testyourmemory from "./images/testyourmemory.jpg";
import clickonspot from "./images/clickonspot.jpg";
import codedebugging from "./images/codedebugging.jpg";
import memeathon from "./images/memeathon.png";
import "./event.css";

const Event = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            <img className="clg-title" src={clg_title} alt="Nil" />
          </div>
          <div>
            <img className="clg-title" src={ChristTech2K23} alt="Nil" />
          </div>
        </div>
        <div className="img-wrapper">
          <div className="img-panel">
            <Link to={"/paperpresentation"} className="img-link">
              <img className="event-img shadow" src={pp} alt="Nil" />
            </Link>
            <div className="text">
              <h5>Paper Presentation</h5>
            </div>
          </div>
          <div className="img-panel">
            <Link to={"/codedebugging"} className="img-link">
              <img className="event-img shadow" src={codedebugging} alt="Nil" />
            </Link>
            <div className="text">
              <h5>code Debugging</h5>
            </div>
          </div>

          <div className="img-panel">
            <Link to={"/testyourmemory"} className="img-link">
              <img
                className="event-img shadow"
                src={testyourmemory}
                alt="Nil"
              />
            </Link>
            <div className="text">
              <h5>Test Your Brain</h5>
            </div>
          </div>
          <div className="img-panel">
            <Link to={"/clickonspot"} className="img-link">
              <img className="event-img shadow" src={clickonspot} alt="Nil" />
            </Link>
            <div className="text">
              <h5>Click On Spot</h5>
            </div>
          </div>
          <div className="img-panel">
            <Link to={"/quiz"} className="img-link">
              <img className="event-img shadow" src={quiz} alt="Nil" />
            </Link>
            <div className="text">
              <h5>Quiz Master</h5>
            </div>
          </div>
          <div className="img-panel">
            <Link to={"/meme"} className="img-link">
              <img className="event-img shadow" src={memeathon} alt="Nil" />
            </Link>
            <div className="text">
              <h5>Meme-A-Thon</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
