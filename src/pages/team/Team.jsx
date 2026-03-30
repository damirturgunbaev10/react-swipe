import React, { useState } from 'react';
import "./Team.scss";
import BlueBtn from "../../ui/bluebtn/BlueBtn";
import TransparentBtn from "../../ui/transparentbtn/TransparentBtn";
import { RiArrowLeftSLine, RiArrowRightSLine, RiUser3Line } from "@remixicon/react";

const Team = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextSlide = () => {
    if (currentStep < 1) setCurrentStep(currentStep + 1);
  };

  const prevSlide = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <section className="team">
      <div className="team__container container">
        
        <div className="team__header">
          <div className="team__title-group">
            <h2 className="team__title">Meet the team</h2>
            <h2 className="team__title">Want to join?</h2>
          </div>
          <div className="team__actions">
            <BlueBtn className={'team__blue__btn'} title="Join us" />
            <TransparentBtn className={'team__transparent__btn'} title='See all openings'/>
          </div>
        </div>

        <div className="team__slider">
          <button 
            className={`team__arrow team__arrow--left ${currentStep === 0 ? 'is-disabled' : ''}`} 
            onClick={prevSlide}
          >
            <RiArrowLeftSLine />
          </button>

          <div className="team__viewport">
            <div 
              className="team__track" 
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              <div className="team__grid">
                {/* Карточка 1 */}
                <div className="team__item">
                  <div className="team__img-box">
                    <RiUser3Line className="team__icon" />
                  </div>
                  <h3 className="team__name">Martin Fury</h3>
                  <p className="team__role">CEO & Co-Founder</p>
                </div>
                {/* Карточка 2 */}
                <div className="team__item">
                  <div className="team__img-box">
                    <RiUser3Line className="team__icon" />
                  </div>
                  <h3 className="team__name">Timoty Crash</h3>
                  <p className="team__role">CTO & Co-Founder</p>
                </div>
                <div className="team__item">
                  <div className="team__img-box"><RiUser3Line className="team__icon" /></div>
                  <h3 className="team__name">Miranda Loudy</h3>
                  <p className="team__role">Global HRD</p>
                </div>
                <div className="team__item">
                  <div className="team__img-box"><RiUser3Line className="team__icon" /></div>
                  <h3 className="team__name">Jim Partners</h3>
                  <p className="team__role">Chief Product Officer</p>
                </div>
                <div className="team__item">
                  <div className="team__img-box"><RiUser3Line className="team__icon" /></div>
                  <h3 className="team__name">Joe Lee</h3>
                  <p className="team__role">Lead Product Designer</p>
                </div>
                <div className="team__item">
                  <div className="team__img-box"><RiUser3Line className="team__icon" /></div>
                  <h3 className="team__name">Alex Sosnovskyi</h3>
                  <p className="team__role">Technical Lead</p>
                </div>
                <div className="team__item">
                  <div className="team__img-box"><RiUser3Line className="team__icon" /></div>
                  <h3 className="team__name">Andy Gupta</h3>
                  <p className="team__role">CMO</p>
                </div>
                <div className="team__item">
                  <div className="team__img-box"><RiUser3Line className="team__icon" /></div>
                  <h3 className="team__name">Dan Wize-Nicon</h3>
                  <p className="team__role">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            className={`team__arrow team__arrow--right ${currentStep === 1 ? 'is-disabled' : ''}`} 
            onClick={nextSlide}
          >
            <RiArrowRightSLine />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Team;