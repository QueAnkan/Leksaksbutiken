import { useState } from "react"
import { useIsValidPassword } from "./validation"
import { useRecoilState } from "recoil"
import { uPassAtom } from "../data/usersAtom"


const PassInput = () => {
	const [uPass, setUPass] = useRecoilState(uPassAtom)
	const [passIsDirty, setPassIsDirty] =useState(false)

	const [passIsValid, passErrorMessage] = useIsValidPassword(uPass)
	const passFieldValidation = passIsDirty ? (passIsValid? 'valid' : 'invalid') : ''
	const visiblePassError = passIsDirty ? (!passIsValid ? 'visible' : '') : ''


function handleOnChangePass(event) {
	setUPass(event.target.value)
}

	return(

		<div>
			<div className="login-pass-container">
				<label htmlFor="password"> Password </label>
					<input 
					value={uPass}
					className={passFieldValidation}
					id="password" 
					type="password"
					onChange={handleOnChangePass}
					onBlur={() => setPassIsDirty(true)}
					required />
				</div>
			<div className= 'error-message'>{passIsDirty ? passErrorMessage || visiblePassError : ''}</div>


		</div>


	)
}

export default PassInput