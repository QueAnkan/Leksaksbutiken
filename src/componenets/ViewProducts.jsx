import { useRecoilState } from 'recoil'
import {useLoaderData} from 'react-router-dom'
import { getProducts } from '../utils/getProducts'
import { useState } from 'react'
import {Link } from 'react-router-dom'
import { cartAtom } from '../data/cartAtom'
import {HiOutlineTrash} from "react-icons/hi"
import deleteAPIProduct from '../utils/deleteAPIProduct'

export const loader = () => getProducts()

const ViewProducts = ({product, view}) => {
	let [cart, setCart] = useRecoilState(cartAtom)
	const [isAdded, setIsAdded] = useState(false)
const allProducts = useLoaderData()
const  [products, setProducts] = useState(product)

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
			
	const removeFromCart = () => {
		let newCart = cart.map((item) => {
			if (item.id === product.id) {
				return { 
					...item, 
					amount: item.amount - 1,
					itemtotal: item.itemtotal-item.price,
				};
				} else {
					return item;
				}
		});
	newCart = newCart.filter((item) => item.amount > 0)
		setCart(newCart)
	}

	const deleteItem =  async (productId) => {
		await deleteAPIProduct(productId)
		const updatedProducts = await getProducts()
			setProducts(updatedProducts)
	}


		return (
			
			<li key={product.id} >
				<div className='product-card'>
					<div className='picture-container'>
						<img src={product.picture} alt={product.name}/>
						</div>
					<h3> {product.name} </h3> 
					{view !== 'cart' ? 
						<span><Link to={'/products/' + product.id}>Mer info</Link></span> :
						''}
					{view !== 'cart' ? <p>{product.price}:-</p>: ''}
					
					<div className='amount'>{isAdded ? 'Tillagd' : ''}</div>
					
					{ view === 'cart' ?<div className='item-total'>
					<p>{product.amount} st</p>
					<p> á {product.price}:- /styck</p>
					<p> Summa {product.itemtotal} :-</p>
					</div> : null }
		
					{view === 'cart' ?
					 <button onClick={() => removeFromCart(product)}> <HiOutlineTrash/> </button>: 	
					(view === 'admin-products' ?
					<button onClick ={() => deleteItem(product.id)}>Ta bort vara</button> : 
					<button onClick={() => addToCart(product)}>Lägg till</button>
					)}
					
				</div>
			</li>
			
		)
}

export default ViewProducts

///todo lägg till meddelande att tillagd i onClick {isAdded ? meddelande : ''}


