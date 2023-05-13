import { useState } from "react"
import NameInput from "../../componenets/NameInput"
import PassInput from "../../componenets/PassInput"
import { useIsMatching } from "../../componenets/validation"
import { Navigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { uNameAtom, uPassAtom } from "../../data/usersAtom"
import './Admin.css'



const LogIn = () => {
const [uName, setUname] = useRecoilState(uNameAtom)
const  [uPass, setUPass] = useRecoilState(uPassAtom)
const [shouldNavigate, setShouldNavigate] =useState(false)
const [formIsDirty, setFormIsDirty] = useState(false)

const isMatching = useIsMatching()

const matchErrorMessage = formIsDirty? 'Vänligen kontrollera användarnamn och lösenord' : ''

const handleSubmit = (event) => {
    event.preventDefault();
    if (isMatching) {
      setShouldNavigate(true);
	  setUname('')
	  setUPass('')

    } else {
		setFormIsDirty(true)
	}
  };

  if (shouldNavigate) {
    return <Navigate to="/admin" />;
  }

	return(

		<div className="login-container">
			
			<form action="#">
				<h2>Logga in</h2>
				<NameInput/>
				<PassInput/>
				<div className="error-message">{formIsDirty ? matchErrorMessage : ''}</div>
				<button type="submit" onClick={handleSubmit}> logga in </button>
			</form>

			
		</div>
	)
}

export default LogIn



