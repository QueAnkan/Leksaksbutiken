import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/home/Home";
import Products from "./routes/Products";
import Search from "./routes/Search";
import Cart from "./routes/Cart";
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
			},

			{
				path: 'search',
				element: <Search/>,
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



