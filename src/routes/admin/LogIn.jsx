import { useState } from "react"
import NameInput from "../../componenets/NameInput"
import PassInput from "../../componenets/PassInput"
import { useIsMatching } from "../../componenets/validation"
import { Navigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { uNameAtom, uPassAtom } from "../../data/usersAtom"
import './Admin.css'



const LogIn = () => {
const [uName] = useRecoilState(uNameAtom)
const  [uPass] = useRecoilState(uPassAtom)
const [shouldNavigate, setShouldNavigate] =useState(false)

const isMatching = useIsMatching()


const handleSubmit = (event) => {
    event.preventDefault();
    if (isMatching) {
      setShouldNavigate(true);
    }
  };

  if (shouldNavigate) {
    return <Navigate to="/admin" />;
  }

	return(

		<div className="login-container">
			<h2>Logga in</h2>
			<form action="#">
				<NameInput/>
				<PassInput/>
				<button type="submit" onClick={handleSubmit}>{" "} logga in{" "} </button>
			</form>

			
		</div>
	)
}

export default LogIn



