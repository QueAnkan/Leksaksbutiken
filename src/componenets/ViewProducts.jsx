import { useRecoilState } from 'recoil'
import { useState } from 'react'
import {Link } from 'react-router-dom'
import { cartAtom } from '../data/cartAtom'
import {HiOutlineTrash} from "react-icons/hi"


const ViewProducts = ({product, view}) => {
	const [cart, setCart] = useRecoilState(cartAtom)
	const [isAdded, setIsAdded] = useState(false)

	const addToCart = () =>{
		let newCart = [...cart, product]
		setCart(newCart)
		setIsAdded(true)
	}

	const removeFromCart = () => {
		let newCart = cart.filter((cartItem) => cartItem.id !== product.id )
		setCart(newCart)
	}

	
	//  i funktion att ta bort. Se till att det går att ta bort alla
		return (
			
			<li key={product.id}>
				<div className='product-card'>
					<div className='picture-container'>
						<img src={product.picture} alt={product.name}/>
						</div>
					<h3> {product.name} </h3> 
					<span><Link to={'/products/' + product.id}>Mer info</Link></span>
					<p>{product.price}:-</p>
					<div className='amount'>{isAdded ? 'Tillagd' : ''}</div>
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

// Lägg till länk på cards för att se mer info
