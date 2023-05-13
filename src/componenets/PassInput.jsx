import { useState } from "react"
import { useIsValidPassword } from "./validation"
import { useRecoilState } from "recoil"
import { uPassAtom } from "../data/usersAtom"


const PassInput = () => {
	const [uPass, setUPass] = useRecoilState(uPassAtom)
	

function handleOnChangePass(event) {
	setUPass(event.target.value)
}

	return(

		<div>
			<div className="login-pass-container">
				<label htmlFor="password"> Password </label>
					<input 
						value={uPass}
						id="password" 
						type="password"
						onChange={handleOnChangePass}
						required />
				</div>
		</div>


	)
}

export default PassInput