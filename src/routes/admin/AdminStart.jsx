import { Link, Outlet } from "react-router-dom"



const AdminStart = () => {

	return (
		<section className="admin-start">
			<h2>Vad vill du göra?</h2>
			<div  className='admin-links'>
			<Link to= 'products'> Lägg till / ändra produkt</Link>
			
			<Link to= 'users' > Lägg till ny användare </Link>
			</div>
		<Outlet/>

		</section>

	)
}

export default AdminStart