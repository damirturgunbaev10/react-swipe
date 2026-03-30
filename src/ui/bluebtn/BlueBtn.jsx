import './BlueBtn.scss'

const BlueBtn = ({title, className}) => {
  return (
    <button className={`blue__btn ${className}`}>{title}</button>
  )
}

export default BlueBtn