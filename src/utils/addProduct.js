import {url, shopId} from './constants.js'

async function addProduct(picture,name,description,price) {
	console.log('adding product');

const data = {

	action: 'add-product',
	picture:picture ,
	name:name ,
	description:description ,
	price:price ,
	shopid: shopId
}


	const options = {
		method: 'POST',
		headers: {'Content-type': 'application/json '},
		body: JSON.stringify(data)
	}

	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('response fromAPI:', statusObject);
	if( statusObject.stats === 'success' ) {
		return true
	}
	return false
}


export default addProduct