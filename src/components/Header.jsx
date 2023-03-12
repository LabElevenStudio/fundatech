import Styles from '../styles/header.module.scss'

export default function Header({ title, img}) {
  return(
    <header className={Styles.header} style={{backgroundImage: `url(${img})` }}>
      <h1 className="title">{title}</h1>
    </header>
  )
}