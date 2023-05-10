import { Link } from "react-router-dom"
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	let error = useRouteError();
	console.error(error);
	return(
	<div>
	<p>Den här sidan verkar inte finnas</p>
	<p><Link to='/'>Hem</Link></p>
	</div>
	
	)
}

export default ErrorPage