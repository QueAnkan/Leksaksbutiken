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
	
	const products = useLoaderData()
console.log(products);
	
const handleSubmit = ( )=> {
	event.preventDefault();
	addProduct(picture, name, description, price)
}

	return(
		<div >
			<form
			className="add-product-form">
				<label htmlFor="picture">Bild-url</label>
				<input type="text"
				id = 'picture'
					value={picture} 
				onChange={e => setPicture(e.target.value)}
				required
				/>
				<label htmlFor="name">Namn</label>
				<input type="text"
				id = 'name'
				value = {name} 
				onChange={e => setName(e.target.value)}
				required
				/>
				<label htmlFor="description">Beskrivning</label>
				<input type="text" 
				id='description'
				value = {description}
				onChange={e => setDescription(e.target.value)}
				required
				/>
				<label htmlFor="price">Pris</label>
				<input type="text"
				id = 'price'
				value = {price} 
				onChange={e => setPrice(e.target.value)}
				required
				/>
				<button onClick={handleSubmit}> Lägg till ny vara </button>
			</form>
			<ul>
				{products.map(product => (
					<ViewProducts key={product.id}  product = {product} view='admin-products'/>
				))}
			</ul>
		</div>
	)
}


export default AdminProducts


{ /* funktion att lägga in på knappen disabled = {!formIsValid} */}