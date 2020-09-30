import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Video from '../components/Video'

const Home = () => (
  <Layout>
    <>
      <Head title="Home" />
      <Container>
        <Row className="mb-5">
          <Col>
            <h2>Check Out My Latest Video!</h2>
            <Video
              videoSrcURL="https://www.youtube.com/embed/?listType=playlist&list=PLI06p-PFP4Line6k_PObdjbCN7zb11mok&index=7"
              videoTitle="Latest Video"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Listen to a Podcast!</h2>
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
)
export default Home
