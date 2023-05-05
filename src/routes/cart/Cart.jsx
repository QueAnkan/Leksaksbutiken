import { useRecoilState } from "recoil"
import ViewProducts from "../../componenets/ViewProducts"
import { cartAtom } from "../../data/cartAtom"



const Cart = () => {

	const [cart] = useRecoilState(cartAtom)


	return(
		<div>
			<h2>Varukorg</h2>
			<ul>
				{cart.map(product => (
					<ViewProducts key={product.name} product = {product} view ='cart' />
				))}
			</ul>
		</div>
	)

}

export default Cart