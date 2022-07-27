import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Article from '../components/Article'
import { fetchArticleById } from '../api/ArticlesAPI'

function ArticlePage ({articles}){

	let {articleID} = useParams()
	const [article, setArticle] = useState(null)
	
	useEffect(() => {
		fetchArticleById(articleID).then((response) => {
			setArticle(response.data.hits[0])
		})
	}, [articleID])
	
	return (
		<div>
			<Article {...article} />
		</div>
	)
}

export default ArticlePage