import addProduct from "../../utils/addProducts"




const AdminProducts = () => {

const handleSubmit = ( )=> {
	addProduct()
}

	return(
		<div>
			<form action="">
<label htmlFor="picture-url"></label>
<input type="text"
id = 'picture-url'
value={product.picture} />

<label htmlFor="name"></label>
<input type="text"
id = 'name'
value = {product.name} />

<label htmlFor="description"></label>
<input type="text" 
id='description'
value = {product.description}/>

<label htmlFor="price"></label>
<input type="text"
id = 'price'
value = {product.price} />

<label htmlFor="shop-id"></label>
<input type="text"
id = 'shop-id'
value = {product.shopid} />

<button onClick={handleSubmit}> Lägg till ny vara </button>
			</form>


		</div>
	)
}


export default AdminProducts


{ /* funktion att lägga in på knappen disabled = {!formIsValid} */}