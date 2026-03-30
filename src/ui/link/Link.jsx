import './Link.scss';
import LinkImg from "../../assets/swipe_link_img.svg";

const Link = ({text, className}) => {
  return (
    <div className={`link ${className}`}>
      <img src={LinkImg} alt="link__img" />
      <a className="link__text">{text}</a>
    </div>
  );
};

export default Link;
