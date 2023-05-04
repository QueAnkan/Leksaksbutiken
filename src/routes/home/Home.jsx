import { NavLink } from 'react-router-dom'
import './Home.css'


const Home = () => {

	return (

		<div className="home">
			<img src="https://img.freepik.com/free-photo/happy-kids-relaxing-air-mattresses-river-coast-summertime_23-2148205847.jpg?size=626&ext=jpg&ga=GA1.1.1027157510.1664794963&semt=ais" alt="Två leende barn som ligger på varsin luftmadrass på en strand" />
			<article>
				<h2>
				Sol, bad och lata dagar. 
				</h2>
				<p>
				Hos oss finner du massor av produkter för att göra barnens strandupplevelse komplett. 
				Välkommen att utforska vårt
				färgglada <NavLink to= 'products'> sortiment! </NavLink>
				</p>
			</article>
		</div>
	)
}

export default Home