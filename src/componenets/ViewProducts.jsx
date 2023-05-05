import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { cartAtom } from '../data/cartAtom'


const ViewProducts = ({product}) => {
 const [cart, setCart] = useRecoilState(cartAtom)
 const [isAdded, setIsAdded] = useState(false)

 const addToCart = () =>{
	let newCart = [...cart, product]
	setCart(newCart)
	setIsAdded(true)
 }

//  lägg till funktion att ta bort. Ändra med if-sats vilken knapp som ska synas

	return (
		
		<li key={product.name}>
			<div className='product-card'>
				<img src={product.picture} alt={product.name}/>
				<h3> {product.name} </h3> 
				<p>{product.price}:-</p>
				<button onClick={() => addToCart(product)}>Lägg till</button>
			</div>
		</li>
		
	)
}

export default ViewProducts

///todo lägg till meddelande att tillagd i onClick {isAdded ? meddelande : ''}

// Lägg till länk på cards för att se mer info
