import logo from "../images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle  } from '@fortawesome/free-regular-svg-icons'

const Header = () => {

    return (
        <header className="app-header">
        <img src={logo} width="200" height="75" alt="bold-logo" title="bold-logo" />

        <nav className="navbar">
          <span>Mi negocio</span>
          <span>
            Ayuda &nbsp;
            <FontAwesomeIcon icon={faQuestionCircle} className="icon"  />
          </span>
        </nav>
      </header>
    )
}

export default Header;