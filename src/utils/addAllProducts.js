import { data } from "../data/toys.js";
import {url, shopId} from './constants.js'

async function addProduct(oneProduct) {
	console.log('adding product');

	const options = {
		method: 'POST',
		headers: {'Content-type': 'application/json '},
		body: JSON.stringify(oneProduct)
	}

	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('response fromAPI:', statusObject);
	if( statusObject.stats === 'success' ) {
		return true
	}
	return false
}

async function addAllProducts() {
	
	
	let products = data.map(product => ({
		action: 'add-product',
		picture: product.picture,
		name: product.name,
		description: product.description,
		price: product.price,
		shopid: shopId,
	}))




	products.forEach(product => {
		addProduct(product)
	})
}

 addAllProducts()

/* export default addProduct */


