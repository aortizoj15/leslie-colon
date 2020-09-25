import React from "react"
import Container from "react-bootstrap/Container"
import Head from "../components/Head"
import Layout from "../components/Layout"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "../../scss/articles.scss"

const allArticles = [
  {
    text: "Omy de Oro signs distribution deal with Caroline and releases new single “Cash” - AfterBuzz TV",
    title: "Meet Puerto Rico's King of Punchline Omy de Oro",
    url: "https://www.afterbuzztv.com/meet-puerto-ricos-king-of-punchline-omy-de-oro/"
  },
  {
    text: "Debido a la crisis de salud y estos tiempos de cuarentena, nos enfrentamos a una nueva realidad, pero los organizadores de Hola México Film Festival no han rendido - AfterBuzz TV",
    title: "Hola Mexico Film Festival Presenta Su Primer Cine Virtual!",
    url: "https://www.afterbuzztv.com/hola-mexico-film-festival-presenta-su-primer-cine-virtual/"
  },
  {
    text: "Founded in 2008, the Hola Mexico Film Festival strives to highlight the best and brightest talents in Mexican cinematography. Despite Covid, fest will continue virtually as AfterBuzz Latino reports - AfterBuzz TV",
    title: "Hola Mexico Film Festival Goes Virtual!",
    url: "https://www.afterbuzztv.com/hola-mexico-film-festival-goes-virtual/"
  },
  {
    text: "Frankie Rodriguez Breaks Barriers as One of First Gay Couples On High School Musical - AfterBuzz TV",
    title: "Frankie Rodriguez Breaks Barriers as One of First Gay Couples On High School MusicalMeet Puerto Rico's King of Punchline Omy de Oro",
    url: "https://www.afterbuzztv.com/frankie-rodriguez-breaks-barriers-as-one-of-first-gay-couples-on-high-school-musical/"
  },
]

const Articles = () => {
  const articleCards = allArticles.map(article => {
    return (
      <Card className="card-element">
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.text}</Card.Text>
          <Button variant="light" className="read-now-btn"><a src={article.url}>Read Now</a></Button>
        </Card.Body>
      </Card>
    )
  })
  return (
    <Layout>
      <>
        <Head title="Articles" />
        <Container>
          <h1>Articles</h1>
          <CardDeck>
            {articleCards}
          </CardDeck>
        </Container>
      </>
    </Layout>
  )
}

export default Articles
