import "./Logos.scss";
import SwipeLogo from "../../assets/swipe_logo.svg";
import WebFlow from "../../assets/swipe_webflow.svg";

const Logos = () => {
  return (
    <section className="logos">
      <div className="logos__container container">
        <img src={SwipeLogo} alt="swipe_logo" />
        <img src={WebFlow} alt="swipe_webflow" />
        <img src={SwipeLogo} alt="swipe_logo" />
        <img src={WebFlow} alt="swipe_webflow" />
      </div>
    </section>
  );
};

export default Logos;
