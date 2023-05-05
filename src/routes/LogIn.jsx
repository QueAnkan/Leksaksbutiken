

const LogIn = () => {

	return(

		<div>
			<h1>Logga in</h1>
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
				// onClick={}
				> Logga in</button>
			</form>
		</div>
	)
}

export default LogIn