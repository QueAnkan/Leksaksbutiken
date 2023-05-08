import {useLoaderData} from 'react-router-dom'
import { data } from '../../data/toys'
import ViewProducts from '../../componenets/ViewProducts'
// import { getProducts } from '../../utils/getProducts'
import './Products.css'

export const loader = () => data

// const handleGetProducts = async(name) =>{
// const success = await getProducts(name)
// }

function Products() {
	const products = useLoaderData()
	// handleGetProducts()
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