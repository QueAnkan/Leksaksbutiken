import { NavLink } from "react-router-dom"



const AdminStart = () => {

	return (
		<div>
			<h2>Vad vill du göra?</h2>
			<NavLink to= 'admin-products'> Lägg till / ändra produkt</NavLink>
			<NavLink to= 'admin-handle-users' > Lägg till ny användare </NavLink>
		</div>
	)
}

export default AdminStart