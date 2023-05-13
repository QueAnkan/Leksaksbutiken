import { shopId} from './constants.js'



async function deleteAPIProduct (productId) {

 const url = 'https://forverkliga.se/JavaScript/api/fe/?action=delete-product/'

	
		const data = { 
			shopid: shopId, 
			productid: productId, 
			action: 'delete-product' }

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}
		console.log(data);

		const response = await fetch(url, options)
		const statusObject = await response.json()
		if (statusObject.status === 'success') {
			console.log('success');
			return true
		}
		console.log('Delete status failed: ', statusObject)
		return false
}




 export default deleteAPIProduct 