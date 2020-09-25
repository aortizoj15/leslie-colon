import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { graphql } from "gatsby"
import Head from "../components/Head"
import Layout from "../components/Layout"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Articles = () => {
  const allArticles = [
    {
      title: "Meet Puerto Rico's King of Punchline Omy de Oro",
    },
  ]
  return (
    <Layout>
      <>
        <Head title="Articles" />
        <Container>
          <h1>Articles</h1>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>This Is The Title</Card.Title>
                <Card.Text>This is the card text.</Card.Text>
                <Button>Read Now</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    </Layout>
  )
}

export default Articles
