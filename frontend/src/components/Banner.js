import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    return(
        <div className="banner">
            <img src={logo} alt="Groupomania" className="logo"/>
            <ul className='log'>
                <a href='./Signup.js'><li className='el-log'>Inscription</li></a>
                <a href='./Login.js'><li className='el-log'>Connexion</li></a>
            </ul>
        </div>
    )
}

export default Banner