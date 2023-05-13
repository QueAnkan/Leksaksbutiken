import {useParams, useLoaderData } from "react-router-dom"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { cartAtom } from "../../data/cartAtom"

const ProductDetails = () => {
	const [cart, setCart] = useRecoilState(cartAtom)
	

	const addToCart = () =>{

		let cartItem = {
			id: product.id,
			amount: 1,
			picture: product.picture,
			name: product.name,
			price: product.price,
			itemtotal: product.price, 
		}

		let itemExist = cart.find(item => item.id === cartItem.id)
		if(itemExist) {

			 let newCart = cart.map((item) => {
				if(item.id === cartItem.id) {
					return{
						...item, 
						amount: item.amount + 1,
						itemtotal: (2*item.price ) * item.amount 
					}
					} else{
						return item
					}
				})
				setCart(newCart)
			}
			else{
				const newCart = [...cart, cartItem]
		setCart(newCart)
			}
		}
	
	
const {id} = useParams()
const allProducts = useLoaderData()
const product = allProducts.find (product => String(product.id) === id)



if(!product) {
	 return (
		<div>
			<p>Produkten verkar inte finnas</p>
			{<p> <Link to='/products' >Återvänd till produktsidan </Link></p>}
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
				
				<button onClick={() => addToCart(product)}>Lägg till</button> 
				
			</div>
		</div>
	)
}

export default ProductDetails