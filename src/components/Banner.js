import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    return(
        <div className="banner">
            <img src={logo} alt="Groupomania" className="logo"/>
        </div>
    )
}

export default Banner