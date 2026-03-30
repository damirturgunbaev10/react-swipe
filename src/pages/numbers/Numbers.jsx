import "./Numbers.scss";
import NumbersBcg from "../../assets/swipe_numbers_bcg.svg";

const Numbers = () => {
  return (
    <section className="numbers">
      <div className="numbers__container container">
        <div className="numbers_left">
          <h4 className="numbers__sbt">since 2019 </h4>
          <h2 className="numbers__title">In numbers</h2>

          <img
            className="numbers__bcg"
            src={NumbersBcg}
            alt="swipe__numbers__bcg"
          />
        </div>
        <div className="numbers__right">
          <hr className="numbers__card__hr title__hr" />
          <div className="numbers__card">
            <div className="numbers__card__left">
              <h3 className="numbers__card__title">Happy clients</h3>
              <p className="numbers__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet.
              </p>
            </div>
            <div className="numbers__card__right">
              <h2 className="numbers__card__numbers">1000+</h2>
            </div>
          </div>
          <hr className="numbers__card__hr title__hr" />
          <div className="numbers__card">
            <div className="numbers__card__left">
              <h3 className="numbers__card__title">Products created</h3>
              <p className="numbers__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet.
              </p>
            </div>
            <div className="numbers__card__right">
              <h2 className="numbers__card__numbers">20+</h2>
            </div>
          </div>
          <hr className="numbers__card__hr title__hr" />
          <div className="numbers__card">
            <div className="numbers__card__left">
              <h3 className="numbers__card__title">Investments received</h3>
              <p className="numbers__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet.
              </p>
            </div>
            <div className="numbers__card__right">
              <h2 className="numbers__card__numbers">$5M+</h2>
            </div>

            <hr className="numbers__hr" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
