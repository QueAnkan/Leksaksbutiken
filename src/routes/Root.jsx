import Header from "../componenets/header/Header"
import Footer from "../componenets/foooter/Footer"
import { Outlet } from "react-router-dom"

const Root = () => {

	return (

		<div className = 'container'>
			<Header/>
			<main>
				<Outlet/>
			</main>
			<Footer/>
		</div>
	)
}

export default Root