import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    return(
        <div className="banner">
            <img src={logo} alt="Groupomania" className="logo"/>
            <ul className='log'>
                <li className='el-log'>Inscription</li>
                <li className='el-log'>Connexion</li>
            </ul>
        </div>
    )
}

export default Banner