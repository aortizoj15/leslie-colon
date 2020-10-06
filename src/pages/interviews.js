import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Card from 'react-bootstrap/Card'
import Head from '../components/Head'
import Layout from '../components/Layout'
import '../../scss/interviews.scss'

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`
const allInterviews = {
  johnny_lopez: {
    id: 0,
    show: 'The Riveras After Show',
    message:
      'Johnny Lopez nos acompaña en el estudio para hablar todo sobre el episodio la boda de Chiquis y Lorenzo',
    name: 'Johnny Lopez',
    video_url: 'https://youtu.be/P9na4qiE4-0',
  },
  lily_brooks: {
    id: 1,
    show: 'The Big Show After Show',
    message:
      'Lola arrives in Florida to move in with her dad the Big Show but her arrival is not what she expected',
    name: 'Lily Brooks',
    video_url: 'https://youtu.be/61N2qB72W48',
  },
  julia_lester: {
    id: 2,
    show: 'High School Musical: The Musical: The Series',
    message: 'EJ prepares to play Troy which leaves Carlos filling in as Chad',
    name: 'Julia Lester',
    video_url: 'https://youtu.be/aQCAJ7MeIEo',
  },
  frankie_rodriguez: {
    id: 3,
    show: 'High School Musical: The Musical: The Series',
    message:
      'We have Frankie Rodriguez on the show tonight or you may know him as Carlos!',
    name: 'Frankie Rodriguez',
    video_url: 'https://youtu.be/UKA6v4w_ip4',
  },
}
const Interviews = ({ data }) => {
  const files = data.allFile.edges
  const interviewImages = files.filter(file => allInterviews[file.node.name])

  const contentCards = interviewImages.map(img => (
    <Card className="mb-3 card-element" key={allInterviews[img.node.name].id}>
      <Container>
        <Row>
          <Col className="p-0">
            <Card.Header as="h5">
              {allInterviews[img.node.name].show}
            </Card.Header>
            <Card.Body>
              <Card.Title>{allInterviews[img.node.name].name}</Card.Title>
              <Card.Text>{allInterviews[img.node.name].message}</Card.Text>
              <a
                className="watch-now-btn btn"
                href={allInterviews[img.node.name].video_url}
              >
                Watch Now
              </a>
            </Card.Body>
          </Col>
          <Col xs="12" md="6" className="p-0">
            <Card.Img as="div">
              <Img fluid={img.node.childImageSharp.fluid} />
            </Card.Img>
          </Col>
        </Row>
      </Container>
    </Card>
  ))

  return (
    <Layout>
      <>
        <Head title="Interviews" />
        <Container>
          <h1>Interviews</h1>
          {contentCards}
        </Container>
      </>
    </Layout>
  )
}

export default Interviews
