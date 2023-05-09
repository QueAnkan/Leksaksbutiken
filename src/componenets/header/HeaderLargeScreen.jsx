import { NavLink } from "react-router-dom"
import {FiSearch} from "react-icons/fi"
import {FiShoppingCart} from "react-icons/fi"


const HeaderLargeScreen = () => {

	return(

		<header className="header-large">
			 
			<NavLink to=''> <h1>Lek och bad </h1> </NavLink> 
			<nav>
				
					<NavLink to='products'> Vårt sortiment</NavLink>
					<NavLink to='search' className='icon' > <FiSearch className="ikon"/> </NavLink>
					<NavLink to='search'  >  Sök produkt</NavLink>
					<NavLink to='cart' className='icon'> <FiShoppingCart className="ikon"/></NavLink>
					<NavLink to='cart'>Varukorg</NavLink>
			</nav>
		</header>
	)
}

export default HeaderLargeScreen



