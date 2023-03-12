import {Link} from 'react-router-dom'
import Styles from '../styles/textlink.module.scss'

const TextButton = ({children, path}) => {
    return(
        <Link className={Styles.link} to={path}>{children}</Link>
    )
}

export default TextButton