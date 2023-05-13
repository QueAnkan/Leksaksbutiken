import { useState } from "react"
import { useIsValidName } from "./validation"
import { useRecoilState } from "recoil"
import { uNameAtom } from "../data/usersAtom"


const NameInput = () => {
const [uName, setUName] = useRecoilState(uNameAtom)

	function handleOnchangeName(event) {
		setUName(event.target.value)
	}

	return(

		<div>
			<div className="login-name-container">
				<label htmlFor="username"> Namn </label>
				<input 
					value = {uName}
					id="username" 
					type="text" 
					onChange={handleOnchangeName} 
					required/>			
			</div>	
		</div>
	)
}

export default NameInput