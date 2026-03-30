import "./Features.scss";
import BlueBtn from "../../ui/bluebtn/BlueBtn";
import {
  RiSettings5Line,
  RiLayoutGridLine,
  RiUserFollowLine,
  RiResetRightLine,
  RiHourglass2Fill,
  RiFlashlightLine,
  RiStarLine,
  RiRoadsterLine,
} from "@remixicon/react";

import CubeBcg from "../../assets/swipe_features_cube_bcg.svg";
import CircleBcg from "../../assets/swipe_features_circle_bcg.svg";
import CylinderBcg from "../../assets/swipe_featurse_cylinder_bcg.svg";

const Features = () => {
  return (
    <section className="features" id='Features'>
      <div className="features__container container">
        <div className="features__top">
          <h2 className="features__title">Get to know our main features</h2>
          <BlueBtn className={"features__btn"} title={"Buy now"} />
        </div>
        <img
          className="features__square__bcg features__bcg"
          src={CubeBcg}
          alt="swipe__features__cube__bcg"
        />

        <img
          src={CircleBcg}
          alt="swipe__features__circle__bcg"
          className="features__circle__bcg features__bcg"
        />

        <img
            src={CylinderBcg}
            alt="swipe__features__cylinder__bcg"
            className="features__cylinder__bcg features__bcg"
          />
          
        <div className="features__bottom">
          <div className="features__card">
            <h3 className="features__card__title">Simple</h3>

            <p className="features__card__text">
              Here you will not find complex technological solutions that will
              baffle you.
            </p>

            <ul className="features__card__list">
              <li className="features__card__item">
                <RiSettings5Line />
                Save your resources on development
              </li>
              <li className="features__card__item">
                <RiLayoutGridLine />
                Easy to understand
              </li>
              <li className="features__card__item">
                <RiUserFollowLine />
                User friendly
              </li>
            </ul>
          </div>
          <hr className="features__hr" />

          <div className="features__card">
            <h3 className="features__card__title">Customizable</h3>

            <p className="features__card__text">
              You can reuse blocks and individual elements to create something
              unique on your website.
            </p>

            <ul className="features__card__list">
              <li className="features__card__item">
                <RiResetRightLine />
                Reuse the sections and create your own style
              </li>
              <li className="features__card__item">
                <RiHourglass2Fill />
                Save your time
              </li>
              <li className="features__card__item">
                <RiSettings5Line />
                Save your resources on development
              </li>
              <li className="features__card__item">
                <RiFlashlightLine />
                Unique design
              </li>
            </ul>
          </div>
          <hr className="features__hr" />

          <div className="features__card">
            <h3 className="features__card__title">Stylish</h3>

            <p className="features__card__text">
              Right and without unnecessary tinsel, just scroll through this
              template and you will see.
            </p>

            <ul className="features__card__list">
              <li className="features__card__item">
                <RiFlashlightLine />
                Unique design
              </li>
              <li className="features__card__item">
                <RiStarLine />
                Unforgettable 3D elements and trendy glass-effect
              </li>
              <li className="features__card__item">
                <RiRoadsterLine />
                Design that drives an industry
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
