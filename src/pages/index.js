import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Video from '../components/Video'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

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
const Home = ({data}) => {
  const files = data.allFile.edges
  const homeImages = files.filter(file => file.node.name.includes('home'))
  const imageColumns = homeImages.map(img => {
    return (
      <Col key={img.node.name} className="my-auto"><Img fluid={img.node.childImageSharp.fluid}/></Col>
    )
  })

  return (
  <Layout>
    <>
      <Head title="Home" />
      <Container>
        <Row className="mb-5">
          {imageColumns}
        </Row>

        <Row className="mb-5">
          <Col>
            <h2>Check out the most recent episode of Café con Leslie</h2>
            <Video
              videoSrcURL="https://www.youtube.com/embed/?listType=playlist&list=PLI06p-PFP4Line6k_PObdjbCN7zb11mok&index=7"
              videoTitle="Latest Video"
            />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2>Check out my guest appearance on Wassup Flobo? After Hours!</h2>
            <Video
              videoSrcURL="https://www.youtube.com/embed/VlvTNjfqjZ4"
              videoTitle="Latest Video"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Check out my guest appearance on the Knew Amsterdam Radio</h2>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Knew Amsterdam Podcast"
                src="https://open.spotify.com/embed-podcast/episode/0o2rwDzf8WM4NnJ57jQRMY"
                width="100%"
                height="380"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  </Layout>
)}

export default Home
