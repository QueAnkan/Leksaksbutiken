import { NavLink } from 'react-router-dom'
import './Footer.css'
import {FiLogIn} from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {

	return (
		<footer>
			<h3>Lek och bad</h3>
			<section>
				<h4>Om företaget</h4>
				<p> Lageradress: Bromsgatan 16 <br/>
					Postadress: box 4152 <br/>
					652 23 Karlstad <br/>
					orgnr. 123123-4545
				</p>	
			</section>
			<section>
				<h4>Kontakta oss</h4>
				<p> Kundtjänst vardagar 10-16<br/>
					tel. 073-9239230<br/>
					info@lekochbad.se<br/>
				</p>
				
			<div> <FaFacebook/> <FaInstagram/></div>
			</section>
			{/* ev andra ikoner in här */}
  			
			<NavLink to='login' >  Admin <FiLogIn/> </NavLink>
		</footer>
	)
}

export default Footer