import Styles from '../styles/indexheader.module.scss'

export default function IndexHeader({ title, img, subtitle, children }) {
  return(
    <header className={Styles.header} style={{backgroundImage: `url(${img})` }}>
      <h1 className="title">{title}</h1>
      <p className={Styles.subtitle}>{subtitle}</p>
      {children}
    </header>
  )
}
