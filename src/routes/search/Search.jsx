import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import { data } from '../../data/toys'
import ViewProducts from "../../componenets/ViewProducts"
import './search.css'

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
		<div className="search-container" >
			<h2>Sök efter produkt</h2>
			<div className="search-input">
				<label htmlFor="search"> Skriv in ditt sökord här</label>
				<input id='search' type="text"
				value= {searchString}
				onChange={handleOnChange} />
			</div>
			
			<div className="products-container">
				{searchString===''? 
				null : 
				<ul>
				{matches.map(product => (
					<ViewProducts key={product.id}  product = {product} view='search'/>
				))}
				</ul>
				}
				</div>
		</div>
	)
}


export default Search