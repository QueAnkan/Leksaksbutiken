import { useState } from "react"
import { isValidProductName } from "./validation"

const AddProductNameInput = ({onNameChange}) => {
	const [name, setName] = useState('')
	const [nameIsDirty, setNameIsDirty] =useState(false)

	const [nameIsValid, nameErrorMessage] = isValidProductName(name)
	
	const visibleNameError = nameIsDirty ? (!nameIsValid? 'visible' : '') : ''

const handleNameChange = (event) => {
	const newName = event.target.value
	setName(newName)
	onNameChange(newName)
}


	return(

		<div>
			<div className="input-container">
				<label htmlFor="username"> Namn </label>
				<input 
					value = {name}
					className={visibleNameError}
					id="name" 
					type="text" 
					onChange={handleNameChange} 
					onBlur={() => setNameIsDirty(true)}
					required/>
				
			</div>
			<div className= 'error-message'> {nameIsDirty ? nameErrorMessage || visibleNameError : ''} </div>
			
		</div>
	)
}

export default AddProductNameInput