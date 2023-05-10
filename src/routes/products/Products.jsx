import {useLoaderData} from 'react-router-dom'
// import { data } from '../../data/toys'
import ViewProducts from '../../componenets/ViewProducts'
import './Products.css'
import { getProducts } from '../../utils/getProducts.js'

export const loader = () => getProducts()


function Products() {
	const products = useLoaderData()
	
	return (

		<div className='products-container'>
			<h2>Vårt sortiment</h2>
			<ul>
				{products.map(product => (
					<ViewProducts key={product.id}  product = {product} view='products'/>


				))}
			</ul>
		</div>
	)
}

export default Products