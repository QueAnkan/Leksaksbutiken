import { NavLink } from "react-router-dom"
import {FiSearch} from "react-icons/fi"
import {FiShoppingCart} from "react-icons/fi"
import {FaBars} from "react-icons/fa"


const HeaderSmallScreen = () => {

	return (
		
	<header className="header-small">

		<NavLink to=''> <h1>Lek och bad </h1> </NavLink>
		<nav>
				<NavLink to= 'products'> Vårt sortiment</NavLink>
				<NavLink to='search' > <FiSearch className="icon"/> Sök</NavLink>
			<NavLink to='cart'><FiShoppingCart className="icon"/>Varukorg</NavLink>
		</nav>
	</header>
	)
}

export default HeaderSmallScreen