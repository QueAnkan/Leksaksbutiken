import { useState } from "react"
import { isValidProductPicture } from "./validation"

const AddProductPicture = ({onPictureChange}) => {
	const [picture, setPicture] = useState('')
	const [pictureIsDirty, setPictureIsDirty] =useState(false)

	const [pictureIsValid, pictureErrorMessage] = isValidProductPicture(picture)
	const visiblepictureError =pictureIsDirty ? (!pictureIsValid? 'visible' : '') : ''

	const handlePictureChange = (event) => {
		const newPicture = event.target.value
		setPicture(newPicture)
		onPictureChange(newPicture)
	}
	return(

		<div>
			<div className="input-container">
				<label htmlFor="picture"> Bild-url </label>
				<input 
					value = {picture}
					className={visiblepictureError}
					id="picture" 
					type="text" 
					onChange={handlePictureChange} 
					onBlur={() => setPictureIsDirty(true)}
					required/>
				
			</div>
			<div className= 'error-message'> {pictureIsDirty ? pictureErrorMessage || visiblepictureError : ''} </div>
			
		</div>
	)
}

export default AddProductPicture