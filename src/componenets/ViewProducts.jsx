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
			<img src={product.picture} alt={product.name}/><br/>
			{product.name}<br/> 
			{product.price}:-
		<button onClick={() => addToCart(product)}>Lägg till</button>
		</li>

	)
}

export default ViewProducts

///todo lägg till meddelande att tillagd i onClick {isAdded ? meddelande : ''}
