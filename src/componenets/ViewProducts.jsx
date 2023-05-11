import { useRecoilState } from 'recoil'
import { useState } from 'react'
import {Link } from 'react-router-dom'
import { cartAtom } from '../data/cartAtom'
import {HiOutlineTrash} from "react-icons/hi"


const ViewProducts = ({product, view}) => {
	let [cart, setCart] = useRecoilState(cartAtom)
	const [isAdded, setIsAdded] = useState(false)

	const addToCart = () =>{

		// todo komihåg att använda en if-sats så man antingen ändrar ett objekt eller skapar ett helt nytt
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

		return (
			
			<li key={product.id} >
				<div className='product-card'>
					<div className='picture-container'>
						<img src={product.picture} alt={product.name}/>
						</div>
					<h3> {product.name} </h3> 
					<span><Link to={'/products/' + product.id}>Mer info</Link></span>
					<p>{product.price}:-</p>
					<div className='amount'>{isAdded ? 'Tillagd' : ''}</div>
					
					{ view === 'cart' ?<div className='item-total'>
					<p>{product.amount} st</p>
					<p> {product.itemtotal} :-</p>
					</div> : null }
					{view !== 'cart' ?
					<button onClick={() => addToCart(product)}>Lägg till</button> :
					<button onClick={() => removeFromCart(product)}> <HiOutlineTrash/> </button>
					}
				</div>
			</li>
			
		)
}

export default ViewProducts

///todo lägg till meddelande att tillagd i onClick {isAdded ? meddelande : ''}


