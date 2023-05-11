import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/home/Home";
import Products, {loader as productsLoader} from "./routes/products/Products";
import ProductDetails from "./routes/products/ProductDetails";
import Search, {loader as searchLoader} from "./routes/search/Search";
import Cart from "./routes/cart/Cart";
import LogIn from "./routes/admin/LogIn";
import AdminStart from "./routes/admin/AdminStart";
import AdminProducts, {loader as adminLoader} from "./routes/admin/AdminProducts";
import AdminHandleUsers from "./routes/admin/AdminHandleUsers";
import ErrorPage from "./routes/ErrorPage";


const router = createHashRouter ([

	{
		path: '/',
		element: <Root/>,
	
			children:[

				{
					path: '/',
					element: <Home/> ,
				},

				{
					path: 'products' ,
					element: <Products/>,
					loader: productsLoader,

				},

				{
					path:'/products/:id',
					element:<ProductDetails/>,
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

				{
					path: 'admin',
					element: <AdminStart/>,

					children:[
						{
							path: 'admin-products',
							element: <AdminProducts/>,
							loader:adminLoader,
						},
						{
							path: 'admin-handle-users',
							element: <AdminHandleUsers/>,
						},

						
					]
				},

				


			],
			
				errorElement: <ErrorPage/>
	}

])

export {router}



