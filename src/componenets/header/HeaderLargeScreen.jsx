import { NavLink } from "react-router-dom"
import {FiSearch} from "react-icons/fi"


const HeaderLargeScreen = () => {

	return(

		<header className="header-large">
			 
			<NavLink to=''> <h1>Lek och bad </h1> </NavLink> 
			<nav>
					<NavLink to='products'>Vårt sortiment</NavLink>
					<NavLink to='search' > <FiSearch className="ikon"/>  Sök produkt</NavLink>
					<NavLink to='cart'>Kundkorg</NavLink>
			</nav>
		</header>
	)
}

export default HeaderLargeScreen



{/* <HiMagnifyingGlass/> */}