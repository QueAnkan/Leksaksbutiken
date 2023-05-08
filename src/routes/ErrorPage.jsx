import { Link } from "react-router-dom"

const ErrorPage = () => (
	<div>
	<p>Den här sidan verkar inte finnas</p>
	<p><Link to='/'>Hem</Link></p>
	</div>
)

export default ErrorPage