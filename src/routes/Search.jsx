import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import { data } from '../data/toys'
import ViewProducts from "../componenets/ViewProducts"

export const loader = () => data


const Search = () => {

	const [searchString, setSearchString] = useState('')
	const products = useLoaderData()

	const handleOnChange = (event) => {
		setSearchString(event.target.value)
	} 

	const matches = products.filter((product) =>{
		return product.name.toLowerCase().includes(searchString.toLowerCase())
	})

	return (
		<div>
			<h2>Sök efter produkt</h2>
			<label htmlFor=""></label>
			<input type="text"
			value= {searchString}
			onChange={handleOnChange} />
			<p>Sökresultat</p>
			
				{searchString===''? 
				null : 
				<ul>
				{matches.map(product => (
					<ViewProducts key={product.name}  product = {product}/>
				))}
				</ul>
				}
		</div>
	)
}


export default Search