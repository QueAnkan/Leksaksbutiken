import { useState } from "react"
import { isValidProductPrice } from "./validation"

const AddProductPrice = ({onPriceChange}) => {
	const [price, setPrice] = useState('')
	const [priceIsDirty, setPriceIsDirty] =useState(false)

	const [priceIsValid, priceErrorMessage] = isValidProductPrice(price)
	const visiblePriceError =priceIsDirty ? (!priceIsValid? 'visible' : '') : ''

const handlePriceChange = (event) => {
	const newPrice = event.target.value
	setPrice(newPrice)
	onPriceChange(newPrice)
}

	return(

		<div>
			<div className="input-container">
				<label htmlFor="price"> Pris </label>
				<input 
					value = {price}
					className={visiblePriceError}
					id="price" 
					type="text" 
					onChange={handlePriceChange} 
					onBlur={() => setPriceIsDirty(true)}
					required/>
				
			</div>
			<div className= 'error-message'> {priceIsDirty ? priceErrorMessage || visiblePriceError : ''} </div>
			
		</div>
	)
}

export default AddProductPrice