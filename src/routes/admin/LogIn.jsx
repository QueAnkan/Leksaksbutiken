import { NavLink } from 'react-router-dom'
import './Admin.css'

const LogIn = () => {

	return(

		<div className="login-container">
			<h2>Logga in</h2>
			<form action="">
				<label htmlFor="username">Användarnamn</label>
				<input type="text" 
				id='username'
				// onChange={}
				required />
				
				<label htmlFor="password">Lösenord</label>
				<input type="password" 
				id='password'
				// onChange={}
				required/>
				<button type='submit' 
				// onClick={ () =>  }
				> Logga in</button>
			</form>
		</div>
	)
}

export default LogIn