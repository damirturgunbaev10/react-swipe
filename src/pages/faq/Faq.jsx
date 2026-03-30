import React from 'react';
import './Faq.scss';
import { RiArrowDownCircleLine } from "@remixicon/react";
import Blobs from '../../assets/swipe_faq_blobs.svg'

const Faq = () => {
  return (
    <section className="faq">
      <div className="faq__container container">
        
        <div className="faq__header">
          <h2 className="faq__title">Frequently asked questions</h2>
          <div className="faq__img-wrapper">
             <img src={Blobs} className="faq__background-img" alt='faq__blobs' />
          </div>
        </div>

        <div className="faq__list">
          <div className="faq__item">
            <RiArrowDownCircleLine className="faq__icon" />
            <p className="faq__text subtopic">Make the FAQs easy to find</p>
          </div>
          <hr className='faq__hr' />

          <div className="faq__item">
            <RiArrowDownCircleLine className="faq__icon" />
            <p className="faq__text subtopic">Keep answers short</p>
          </div>
          <hr className='faq__hr' />

          <div className="faq__item">
            <RiArrowDownCircleLine className="faq__icon" />
            <p className="faq__text subtopic">Write the FAQ sheet in an actual question-and-answer format</p>
          </div>
          <hr className='faq__hr' />

          <div className="faq__item">
            <RiArrowDownCircleLine className="faq__icon" />
            <p className="faq__text subtopic">Write questions from the point of view of your customer</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faq;