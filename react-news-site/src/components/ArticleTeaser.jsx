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
					{title
						? <h2><Link to={`/articles/${objectID}`}>{title}</Link></h2>
						: <p>{comment_text}</p>
					}
				</Col>
				<Col lg='4'>
					<p>{created_at}</p>
				</Col>
			</Row>
		</Container>
	)
}

export default ArticleTeaser;