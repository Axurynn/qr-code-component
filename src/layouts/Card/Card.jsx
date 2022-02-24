import s from './Card.module.scss'
import img from '../../assets/images/image-qr-code.png'

const Card = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.content}>
          <img className={s.img} src={img} alt="" />
          <h1 className={s.title}>Improve your front-end skills by building projects</h1>
          <p className={s.text}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </>
  )
}

export default Card;