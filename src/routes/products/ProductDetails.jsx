import {useParams, useLoaderData } from "react-router-dom"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { cartAtom } from "../../data/cartAtom"

const ProductDetails = () => {
	const [cart, setCart] = useRecoilState(cartAtom)
	const [isAdded, setIsAdded] = useState(false)

	const addToCart = () =>{
		let newCart = [...cart, product]
		setCart(newCart)
		setIsAdded(true)
	}
	
	
const {id} = useParams()
const allProducts = useLoaderData()
const product = allProducts.find (product => String(product.id) === id)



if(!product) {
	 return (
		<div>
			<p>Produkten verkar inte finnas</p>
			{/* <p> <Link to='/products' >Återvänd till produktsidan </Link></p> */}
		</div>
	 )
}


	return(
		<div className='products-container'>
			<h2>Detaljerad beskrivning</h2>
			<div className='product-card'>
				<div className='picture-container'>
					<img src={product.picture} alt={product.name}/>
				</div>
				<h3> {product.name} </h3> 
				<article> {product.description}</article>

				<p>{product.price}:-</p>
				{/* <span>{isAdded ? 'Tillagd i kundkorg!' : ''}</span> */}
				
				<button onClick={() => addToCart(product)}>Lägg till</button> 
				
			</div>
		</div>
	)
}

export default ProductDetails