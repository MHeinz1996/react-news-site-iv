import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ArticleList from '../components/ArticleList'
import { fetchArticlesBySection } from '../api/ArticlesAPI'

function SectionPage ({articles}){

	const { sectionName } = useParams()
	const [sectionArticles, setSectionArticles] = useState([])

	useEffect( () => {
		fetchArticlesBySection(sectionName).then((response) => {
			setSectionArticles(response.data.hits)
		})
	}, [sectionName])
	
	return(
		<div>
		{sectionArticles 
			? <ArticleList articles={sectionArticles} />
			: 'no articles found'
		}
		</div>
	)
}

export default SectionPage