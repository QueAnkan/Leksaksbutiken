import { useState } from "react"
import { useIsValidName } from "./validation"
import { useRecoilState } from "recoil"
import { uNameAtom } from "../data/usersAtom"


const NameInput = () => {
const [uName, setUName] = useRecoilState(uNameAtom)

// kod för validering, fyll på med css
	const [nameIsDirty, setNameIsDirty] =useState(false)

	const [nameIsValid, nameErrorMessage] = useIsValidName(uName)
	const nameFieldValidation = nameIsDirty ? (nameIsValid? 'valid' : 'invalid') : ''
	const visibleNameError = nameIsDirty ? (!nameIsValid? 'visible' : '') : ''

	function handdleOnchangeName(event) {
		setUName(event.target.value)
	}

	return(

		<div>
			<div className="login-name-container">
				<label htmlFor="username"> Namn </label>
				<input 
					value = {uName}
					className={nameFieldValidation}
					id="username" 
					type="text" 
					onChange={handdleOnchangeName} 
					onBlur={() => setNameIsDirty(true)}
					required/>
				
			</div>
			<div className= 'error-message'> {nameIsDirty ? nameErrorMessage || visibleNameError : ''} </div>
			
		</div>
	)
}

export default NameInput