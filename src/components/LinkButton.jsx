import {Link} from 'react-router-dom'
import Styles from '../styles/linkbtn.module.scss'

const LinkButton = ({children, path, btnType}) => {
        if(btnType === 'primary'){
            return(
            <Link to={path} className={Styles.primary}>
                <button>
                    {children}
                </button>
             </Link>
            )
        }else if (btnType === 'secondary'){
            return(
                <Link to={path} className={Styles.secondary}>
                    <button>
                        {children}
                    </button>
                 </Link>
                )
        }else{
            return(
                <Link to={path} className={Styles.three}>
                    <button>
                        <span>
                        {children}
                        </span>
                    </button>
                 </Link>
                )
        }
        
}

export default LinkButton
