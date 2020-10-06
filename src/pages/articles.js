import React from 'react'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout'
import Head from '../components/Head'
import '../../scss/articles.scss'

const allArticles = [
  {
    id: 0,
    text:
      'Omy de Oro signs distribution deal with Caroline and releases new single “Cash” - AfterBuzz TV',
    title: "Meet Puerto Rico's King of Punchline Omy de Oro",
    url:
      'https://www.afterbuzztv.com/meet-puerto-ricos-king-of-punchline-omy-de-oro/',
  },
  {
    id: 1,
    text:
      'Debido a la crisis de salud y estos tiempos de cuarentena, nos enfrentamos a una nueva realidad, pero los organizadores de Hola México Film Festival no han rendido - AfterBuzz TV',
    title: 'Hola Mexico Film Festival Presenta Su Primer Cine Virtual!',
    url:
      'https://www.afterbuzztv.com/hola-mexico-film-festival-presenta-su-primer-cine-virtual/',
  },
  {
    id: 2,
    text:
      'Founded in 2008, the Hola Mexico Film Festival strives to highlight the best and brightest talents in Mexican cinematography. Despite Covid, fest will continue virtually as AfterBuzz Latino reports - AfterBuzz TV',
    title: 'Hola Mexico Film Festival Goes Virtual!',
    url: 'https://www.afterbuzztv.com/hola-mexico-film-festival-goes-virtual/',
  },
  {
    id: 3,
    text:
      'Frankie Rodriguez Breaks Barriers as One of First Gay Couples On High School Musical - AfterBuzz TV',
    title:
      "Frankie Rodriguez Breaks Barriers as One of First Gay Couples On High School MusicalMeet Puerto Rico's King of Punchline Omy de Oro",
    url:
      'https://www.afterbuzztv.com/frankie-rodriguez-breaks-barriers-as-one-of-first-gay-couples-on-high-school-musical/',
  },
]

const articleCards = allArticles.map(article => (
  <Col className="card-column col-12 col-md-6 col-lg-3 mb-3" key={article.id}>
    <Card className="card-element text-center h-100">
      <Card.Header>{article.title}</Card.Header>
      <Card.Body>
        <Card.Text>{article.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <a className="read-now-btn btn" href={article.url}>
          Read Now
        </a>
      </Card.Footer>
    </Card>
  </Col>
))

const Articles = () => (
  <Layout>
    <>
      <Head title="Articles" />
      <Container>
        <h1>Articles</h1>
        <Row className="justify-content-center">{articleCards}</Row>
      </Container>
    </>
  </Layout>
)

export default Articles
