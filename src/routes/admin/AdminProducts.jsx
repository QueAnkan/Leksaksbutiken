import {useLoaderData} from 'react-router-dom'
import addProduct from "../../utils/addProduct"
import { useState } from "react"
import ViewProducts from '../../componenets/ViewProducts'
import { getProducts } from '../../utils/getProducts.js'
import AddProductNameInput from '../../componenets/AddProductNameInput'
import AddProductPicture from '../../componenets/AddProductPicture'
import AddProductDescription from '../../componenets/AddProductDescription'
import AddProductPrice from '../../componenets/AddProductPrice'


export const loader = () => getProducts()


const AdminProducts = () => {
	const allProducts = useLoaderData()

	const [products, setProducts] = useState(allProducts)
	const [picture, setPicture] = useState('')
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')
 	const [formIsDirty, setFormIsDirty] = useState(false)

	const visibleFormError = formIsDirty ?  'Vänligen fyll i samtliga fält för att skicka in formuläret.' : 'emty-field-error'
	const VisibleFormErrorCss = formIsDirty ? 'emty-field-error' : 'fields-valid'
	
	 const handleAddName = (newName => {
		setName(newName)
		setFormIsDirty(false)
	})

	const handleAddDescription = (newDescription => {
		setDescription(newDescription)
		setFormIsDirty(false)
	})

	const handleAddPrice = (newPrice => {
		setPrice(newPrice)
		setFormIsDirty(false)
	})

	const handleAddPicture = (newPicture => {
		setPicture(newPicture)
		setFormIsDirty(false)
	})


	const handleSubmit = async (event)=> {
		event.preventDefault();
		if((picture.trim().length === 0 ||
		name.trim().length === 0 ||
		description.trim().length === 0 ||
		price.trim().length === 0 
		
		)){
			setFormIsDirty(true)
			console.log(' is emty')
			return
		}
			try {
				console.log('Produkten tillagd');
				await addProduct(picture, name, description, price)
				const updatedProducts = await getProducts()
				setProducts(await updatedProducts)
				
		} catch (error) {
			console.log('Något gick fel');
		}	
	}

	return(
		<div className='admin-products' >
			
			<form className="add-product-form">
				<h3>Lägg till en ny vara i vårt sortiment</h3>
				
				<AddProductNameInput onNameChange={ handleAddName }/>
				<AddProductPicture onPictureChange={handleAddPicture}/>
				<AddProductDescription onDescriptionChange ={handleAddDescription}/>
				<AddProductPrice onPriceChange = {handleAddPrice}/>

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
