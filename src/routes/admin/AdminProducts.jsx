import {useLoaderData} from 'react-router-dom'
import addProduct from "../../utils/addProduct"
import { useState } from "react"
import ViewProducts from '../../componenets/ViewProducts'
import { getProducts } from '../../utils/getProducts.js'


export const loader = () => getProducts()


const AdminProducts = () => {

	const [picture, setPicture] = useState('')
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')
 	const [formIsDirty, setFormIsDirty] = useState(false)

	 const visibleFormError = formIsDirty ?  'Vänligen fyll i samtliga fält för att skicka in formuläret.' : ''
	 const VisibleFormErrorCss = formIsDirty ? 'visible' : 'error-message-container'

	const products = useLoaderData()
// console.log(products);
	

	const handleOnBlur = () => {
		
		if (picture.trim().length > 0 &&
			name.trim().length > 0 &&
			description.trim().length > 0 &&
			price.trim().length > 0 
			){
			console.log('input is not emty');
			setFormIsDirty(false)
			return false
		} else {console.log(' is emty'); setFormIsDirty(true)
			return true
		}

		} 



	const handleSubmit = async (event)=> {
		event.preventDefault();
		if(!setFormIsDirty()){
			try {console.log('Produkten tillagd');
			await addProduct(picture, name, description, price)
			} catch (error) {
				console.log('Något gick fel');
			}
		
		}
	}

	return(
		<div className='admin-products' >
			
			<form 
				className="add-product-form">
				<h3>Lägg till en ny vara i vårt sortiment</h3>
				<label htmlFor="picture">Bild-url</label>
				<input 	type="text"
						id = 'picture'
						value={picture} 
						onChange={e => setPicture(e.target.value)}
						onBlur ={handleOnBlur}
						required
				/>
				<label htmlFor="name">Namn</label>
				<input 	type="text"
						id = 'name'
						value = {name} 
						onChange={e => setName(e.target.value)}
						onBlur ={handleOnBlur}
						required
				/>
				<div></div>
				<label htmlFor="description">Beskrivning</label>
				<textarea  	rows={10}
							id='description'
							value = {description}
							onChange={e => setDescription(e.target.value)}
							onBlur ={handleOnBlur}
							required
				/>
				<label htmlFor="price">Pris</label>
				<input 	type="number"
						min='1'
						max='1000'
						maxLength='4'
						id = 'price'
						value = {price} 
						onChange={e => setPrice(e.target.value)}
						onBlur ={handleOnBlur}
						required
				/>
				<div className={VisibleFormErrorCss} >
				{formIsDirty ? visibleFormError : ''}
				</div>	
				<button type='submit' onClick={handleSubmit} > Lägg till ny vara </button>
			</form>
			
			
			<h3>Klicka för att ta bort vara ur vårt sortiment:</h3>
			<ul>
				{products.map(product => (
					<ViewProducts key={product.id}  product = {product} view='admin-products'/>
				))}
			</ul>
		</div>
	)
}


export default AdminProducts
