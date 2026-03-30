  import "./Intro.scss";
  import BlueBtn from "../../ui/bluebtn/BlueBtn";
  import Link from "../../ui/link/Link";
  import IntroBcg from "../../assets/swipe_intro_bcg.svg";
  import {
    RiTwitterLine,
    RiInstagramLine,
    RiFacebookLine,
  } from "@remixicon/react";

  const Intro = () => {
    return (
      <section className="intro">
        <div className="intro__container container" id="About">
          <div className="intro__left">
            <h1 className="intro__title">
              Accessible way to start your business
            </h1>

            <h2 className="intro__sbt">Simple. Customizable. Stylish.</h2>

            <BlueBtn className={"intro__btn"} title={"Get demo for free"} />

            <Link text={"watch full video"} />
          </div>

          <div className="intro__right">
            <img className="intro__bcg" src={IntroBcg} alt="intro_bcg" />
            <RiTwitterLine className="intro__icon" />
            <RiInstagramLine className="intro__icon" />
            <RiFacebookLine className="intro__icon" />
          </div>
        </div>
      </section>
    );
  };

  export default Intro;
