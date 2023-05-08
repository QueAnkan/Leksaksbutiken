import { useRecoilState } from "recoil"
import ViewProducts from "../../componenets/ViewProducts"
import { cartAtom } from "../../data/cartAtom"
import './Cart.css'


const Cart = () => {

	const [cart] = useRecoilState(cartAtom)


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
			<p>0 :-</p>
			</div>
		</div>
	)

}

export default Cart