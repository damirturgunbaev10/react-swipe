import './TransparentBtn.scss'

const TransparentBtn = ({title, className}) => {
  return (
    <button className={`transparent__btn ${className}`}>{title}</button>
  )
}

export default TransparentBtn