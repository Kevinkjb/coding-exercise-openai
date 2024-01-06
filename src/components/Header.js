import { Link } from "react-router-dom"
import '../App.css'

const Header = () => {

    return(
        <nav className="nav-item">
            <Link className="nav-link" to="/home">
                Homes
            </Link>
            <Link className="nav-link" to="/community">
                Community
            </Link>
        </nav>
    )
}

export default Header