import {useLoaderData} from 'react-router-dom'
import { data } from '../../data/toys'
import ViewProducts from '../../componenets/ViewProducts'
import './Products.css'

export const loader = () => data


function Products() {
	const products = useLoaderData()

	return (

		<div className='products-container'>
			<h2>Vårt sortiment</h2>
			<ul>
				{products.map(product => (
					<ViewProducts key={product.name}  product = {product}/>


				))}
			</ul>
		</div>
	)
}

export default Products