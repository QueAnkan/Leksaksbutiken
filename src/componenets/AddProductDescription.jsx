import { useState } from "react"
import { isValidProductDescription } from "./validation"

const AddProductDescription = ({onDescriptionChange}) => {
	const [description, setDescription] = useState('')
	const [descriptionIsDirty, setDescriptionIsDirty] =useState(false)

	const [descriptionIsValid, descriptionErrorMessage] = isValidProductDescription(description)
	const visibleDescriptionError =descriptionIsDirty ? (!descriptionIsValid? 'visible' : '') : ''

	const handleDescriptionChange = (event) => {
		const newDescription = event.target.value
		setDescription(newDescription)
		onDescriptionChange(newDescription)
	}

	return(

		<div>
			<div className="description-container">
				<label htmlFor="description"> Beskrivning </label>
				<textarea 
					rows={4}
					value = {description}
					className={visibleDescriptionError }
					id="description" 
					type="text" 
					onChange={handleDescriptionChange} 
					onBlur={() => setDescriptionIsDirty(true)}
					required/>
				
			</div>
			<div className= 'error-message '> {descriptionIsDirty ? descriptionErrorMessage || visibleDescriptionError : ''} </div>
			
		</div>
	)
}

export default AddProductDescription