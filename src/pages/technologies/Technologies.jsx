import "./Technologies.scss";
import Technologies__part1__bcg from "../../assets/swipe_technologies_part1_bcg.svg";
import Technologies__part2__bcg from "../../assets/swipe_technologies_part2_bcg.svg";
import Link from "../../ui/link/Link";

const Technologies = () => {
  return (
    <section className="technologies">
      <div className="technologies__container container">
        <div className="technologies__part">
          <div className="technologies__part__top">
            <h3 className="subtopic">No need to know any technologies</h3>

            <hr className="technonlogies__hr title__hr  " />
          </div>
          <div className="technologies__part__bottom">
            <div className="technologies__part__bottom__left">
              <img
                src={Technologies__part1__bcg}
                alt="swipe__technologies__part__bottom__left__bcg"
              />
            </div>
            <div className="technologies__part__bottom__right">
              <h3 className="technologies__part__bottom__title subtopic">
                Easy to understand
              </h3>

              <p className="technonlogies__part__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet. Nulla viverra quam sit amet lacus
                accumsan, ac interdum nibh eleifend. Aliquam at elit at diam
                congue aliquam at eu felis. Vestibulum sed massa bibendum, porta
                ex consectetur, commodo tellus.
              </p>

              <br />

              <p className="technonlogies__part__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet. Nulla viverra quam sit amet lacus
                accumsan, ac interdum nibh eleifend. Aliquam at elit at diam
                congue aliquam at eu felis.
              </p>

              <Link className={"technologies__link"} text={"learn more"} />
            </div>
          </div>
        </div>
        <div className=" technologies__part">
          <div className="technologies__part__top">
            <hr className="technonlogies__hr title__hr  " />

            <h3 className="technologies__part__bottom__title subtopic">Reuse the sections</h3>
          </div>
          <div className="technologies__part__bottom">
            <div className="technologies__part__bottom__left">
              <h3 className="technologies__part__bottom__title">
                Easy to change
              </h3>
              <p className="technonlogies__part__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet. Nulla viverra quam sit amet lacus
                accumsan, ac interdum nibh eleifend. Aliquam at elit at diam
                congue aliquam at eu felis. Vestibulum sed massa bibendum, porta
                ex consectetur, commodo tellus.
              </p>

              <br />

              <p className="technonlogies__part__bottom__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet. Nulla viverra quam sit amet lacus
                accumsan, ac interdum nibh eleifend. Aliquam at elit at diam
                congue aliquam at eu felis.
              </p>

              <Link className={"technologies__link"} text={"learn more"} />
            </div>
            <div className="technologies__part__bottom__right">
              <img
                src={Technologies__part2__bcg}
                alt="swipe__technologies__part__bottom__right__bcg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
