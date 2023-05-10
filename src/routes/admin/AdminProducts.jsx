// import addProduct from "../../utils/addProducts"
import { useState } from "react"

const AdminProducts = () => {

	const [picture, setPicture] = useState('')
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')
	const [shopid, setShopid] = useState('')

	
const handleSubmit = ( )=> {
	/* addProduct(picture, name, description, price, shopid ) */
}

	return(
		<div >
			<form action="#"
			className="add-product-form">
				<label htmlFor="picture">Bild-url</label>
				<input type="text"
				id = 'picture'
				value={picture} 
				onChange={e => setPicture(e.target.value)}
				/>

				<label htmlFor="name">Namn</label>
				<input type="text"
				id = 'name'
				value = {name} 
				onChange={e => setName(e.target.value)}
				/>

				<label htmlFor="description">Beskrivning</label>
				<input type="text" 
				id='description'
				value = {description}
				onChange={e => setDescription(e.target.value)}
				/>

				<label htmlFor="price">Pris</label>
				<input type="text"
				id = 'price'
				value = {price} 
				onChange={e => setPrice(e.target.value)}
				/>

				<label htmlFor="shopid">Butiks-id</label>
				<input type="text"
				id = 'shopid'
				value = {shopid} 
				onChange={e => setShopid(e.target.value)}
				/>

				<button onClick={handleSubmit}> Lägg till ny vara </button>
			</form>


		</div>
	)
}


export default AdminProducts


{ /* funktion att lägga in på knappen disabled = {!formIsValid} */}