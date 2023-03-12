import Styles from '../styles/linkbtn.module.scss'

const Button = ({children,btnType, props}) => {
        if(btnType === 'primary'){
            return(
                <button {...props} className={Styles.primary}>
                    <span>
                    {children}
                    </span>
                </button>
            )
        }else if (btnType === 'secondary'){
            return(
                    <button {...props} className={Styles.secondary}>
                        <span>
                        {children}
                        </span>
                    </button>
                )
        }else{
            return(
                    <button {...props} className={Styles.third}>
                        <span>
                        {children}
                        </span>
                    </button>
                )
        }
        
}

export default Button
