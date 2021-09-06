import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import ListGroup from 'react-bootstrap/ListGroup'
import '../../scss/on-air.scss'

import Layout from '../components/Layout'
import Head from '../components/Head'

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

const onAirData = {
  miz_and_mrs: {
    id: 0,
    title: 'Miz & Mrs',
    videos: [
      {
        title: "Mr. Mizanin's Neighborhood",
        url: 'https://youtu.be/AIfknBwCqWw',
      },
    ],
  },
  total_bellas: {
    id: 1,
    title: 'Total Bellas',
    videos: [
      {
        title: 'Season 5 Episode 8',
        url: 'https://youtu.be/vQzbmXSusOU',
      },
      { title: 'Season 5 Episode 7', url: 'https://youtu.be/_ZuyOErsReI' },
    ],
  },
  total_divas: {
    id: 2,
    title: 'Total Divas',
    videos: [
      {
        title: 'The Next Wave',
        url: 'https://youtu.be/E-iXa_3yxL4',
      },
    ],
  },
  wrestlemania_36: {
    id: 3,
    title: 'Wrestemania 36',
    videos: [
      {
        title: 'Panel Review',
        url: 'https://youtu.be/lSXp0zoGZpY',
      },
    ],
  },
  wwe_raw_spanish: {
    id: 4,
    title: 'WWE Raw Español',
    videos: [
      {
        title: 'Diciembre 16, 2019',
        url: 'https://www.youtube.com/watch?v=9AyMbqkm0X4',
      },
      { title: 'Diciembre 9, 2019', url: 'https://youtu.be/iIA3AXFYVko' },
    ],
  },
  wwe_raw: {
    id: 5,
    title: 'WWE Raw',
    videos: [
      {
        title: 'June 22nd, 2020',
        url: 'https://www.youtube.com/watch?v=jNOfg9TJhPs',
      },
      {
        title: 'June 15th, 2020',
        url: 'https://www.youtube.com/watch?v=feG3Zy8KClM',
      },
      {
        title: 'May 18th, 2020',
        url: 'https://www.youtube.com/watch?v=wY7g0nNeT_Q',
      },
    ],
  },
}
const OnAir = ({ data }) => {
  const files = data.allFile.edges
  const onAirImages = files.filter(file => onAirData[file.node.name])
  const imageCards = onAirImages.map(image => {
    const videoList = onAirData[image.node.name].videos
    const videoListItem = videoList.map(video => (
      <ListGroup.Item className="text-center">
        <h6>{video.title}</h6>
        <a className="btn watch-now-btn" href={video.url}>
          Watch Now
        </a>
      </ListGroup.Item>
    ))
    return (
      <Col
        className="mb-3"
        sm={12}
        md={6}
        lg={4}
        key={onAirData[image.node.name].id}
      >
        <Card className="card-element">
          <Card.Header className="card-header">
            {onAirData[image.node.name].title}
          </Card.Header>
          <Card.Img variant="top" as="div">
            <Img fluid={image.node.childImageSharp.fluid} />
          </Card.Img>
          <ListGroup>{videoListItem}</ListGroup>
        </Card>
      </Col>
    )
  })

  return (
    <Layout>
      <>
        <Head title="On-Air" />
        <Container>
          <h1>On-Air</h1>
          <h2 className="text-center">AfterBuzz TV After Show</h2>
          <Row>{imageCards}</Row>
        </Container>
      </>
    </Layout>
  )
}

export default OnAir
