import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

// function ArticleTeaser (props){
function ArticleTeaser ({objectID, title, created_at, comment_text}){

	return(
		<Container>
			<hr/>
			<Row>
				<Col lg='8'>
					<h2 >
						{title
						? <Link to={`/articles/${objectID}`} >{title} </Link>
						: <Link to={`/articles/${objectID}`} >{comment_text} </Link>
						}
					</h2>
				</Col>
				<Col lg='4'>
					<p>{created_at}</p>
				</Col>
			</Row>
		</Container>
	)
}
export default ArticleTeaser;

// {sectionArticles 
// 	? <ArticleList articles={sectionArticles} />
// 	: 'no articles found'
// }