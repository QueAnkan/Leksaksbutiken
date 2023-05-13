import { useRecoilState } from "recoil"
import ViewProducts from "../../componenets/ViewProducts"
import { cartAtom } from "../../data/cartAtom"
import './Cart.css'


const Cart = () => {

	const [cart] = useRecoilState(cartAtom)
	
console.log(cart);

const sum = cart.reduce((accumulator, item) =>{
	return accumulator + item.itemtotal;
}, 0)

console.log(sum);

	return(
		<div className="cart-products-container">
			<h2>Varukorg</h2>
			<ul>
				{cart.map(product => (
					<ViewProducts key={product.id} product = {product} view ='cart' />
				))}
			</ul>
			<div className="total">
			<p>Totalt belopp:</p>
			<p>{sum }:-</p>
			</div>
			<button className="buy-button" type="button"> Till betalning</button>
		</div>
	)

}

export default Cart