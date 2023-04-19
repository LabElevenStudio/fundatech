import Styles from './styles/notfound.module.scss'
import Splash from './components/Splash'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <main id={Styles.wrapper}>
            <Splash top={10} left={300} fill="green"/>
            <h2>Ooops! some paint got splashed on the floor but not to worry we can <span id={Styles.navigate} onClick={() => navigate(-1)}>get things going again.</span></h2>
            <Splash top={20} left={450} fill="orange" />
            <Splash top={30} left={600} fill="black" />
        </main>
    )
}

export default NotFound

