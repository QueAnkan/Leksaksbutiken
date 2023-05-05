import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/home/Home";
import Products, {loader as productsLoader} from "./routes/products/Products";
import Search, {loader as searchLoader} from "./routes/Search";
import Cart from "./routes/cart/Cart";
import LogIn from "./routes/LogIn";


const router = createHashRouter ([

{
	path: '/',
	element: <Root/>,
 
		 children:[

			{
				path: '',
				element: <Home/> ,
			},

			{
				path: 'products' ,
				element: <Products/>,
				loader: productsLoader,
			},

			{
				path: 'search',
				element: <Search/>,
				loader: searchLoader,
			},

			{
				path: 'cart',
				element: <Cart/>
			},

			{
				path: 'login',
				element: <LogIn/>,
			},

		 ],

}




])

export {router}



