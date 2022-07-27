import Form from 'react-bootstrap/Form'
import { useState, useEffect } from "react"
import ArticleTeaser from "../components/ArticleTeaser"
import { fetchArticles } from '../api/ArticlesAPI'

function Search ({articles}) {

	const [searchTitle, setSearchTitle] = useState('')
	const [results, setResults] = useState([])
	
	const handleChange = (event) => {
		const value = event.target.value
		setSearchTitle(value)
	}

	useEffect( () => {
		if(searchTitle.length != 0) {
			fetchArticles(searchTitle).then((response) => {
					setResults(response.data.hits)
				})
			} else {
				setResults(articles)
				// document.getElementById('header').innerHTML = 'All Articles'
			}}, [searchTitle])
		

	return (
		<div>
			<Form >
			<Form.Control
				type="search"
				placeholder="Search"
				aria-label="Search"
				onChange={(event)=>{handleChange(event)}}
				/>
			</Form>
			<div>
			{
				results.length > 0
				? <div >
					<h2>Search Results</h2>
					{results.map((article) => (
					<ArticleTeaser key={article.objectID} {...article}/>
				))}</div>
				: ''
			}
			</div>
		</div>
	)
}

export default Search