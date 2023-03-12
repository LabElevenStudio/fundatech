
import {Helmet} from 'react-helmet'
import Header from './components/Header'
import ReturnNav from './components/ReturnNav'
import Styles from './styles/projects.module.scss'

const Projects = () => {
    return(
        <main>
            <Helmet>
                <title>Fundamental Technology | Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
        
            <Header title="projects" img="/images/headers/projects-hero.png" />
            <section className={Styles.projectsWrapper}>
                <div className=""></div>
                <div className=""></div>
            </section>
            <ReturnNav />
            
        </main>
    )
}


export default Projects