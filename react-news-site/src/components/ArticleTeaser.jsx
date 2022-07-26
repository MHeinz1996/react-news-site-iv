import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

// function ArticleTeaser (props){
function ArticleTeaser ({objectID, title, created_at}){
    return(
        <Container>
            <hr/>
            <Row>
                <Col lg='8'>
                    <h2 >
                        <Link to={`/articles/${objectID+1}`} >{title} </Link>
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