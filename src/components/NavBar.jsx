import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping,faBars,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navbar__menu">
            <FontAwesomeIcon icon={faBars}/>
        </div>
        <div className="navbar__serch">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
        <div className="navbar__logo">PRIMAL</div>
        <div className="navbar__cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
    </div>
  )
}

export default NavBar