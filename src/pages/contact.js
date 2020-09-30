import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Layout from '../components/Layout'
import Head from '../components/Head'
import '../../scss/contact.scss'

const Contact = () => (
  <Layout>
    <>
      <Head title="Contact" />
      <Container>
        <h1>Contact</h1>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item
                className="mb-3 list-item"
                href="mailto:leslie.ojeda@gmail.com"
                action
              >
                Email: leslie.ojeda@gmail.com
              </ListGroup.Item>
              <ListGroup.Item
                className="mb-3 list-item"
                href="https://www.linkedin.com/in/leslie-colon-521892158/"
                action
              >
                LinkedIn: /in/leslie-colon-521892158
              </ListGroup.Item>
              <ListGroup.Item
                className="mb-3 list-item"
                href="https://twitter.com/LeslieColon_"
                action
              >
                Twitter: LeslieColon_
              </ListGroup.Item>
              <ListGroup.Item
                className="mb-3 list-item"
                href="https://www.instagram.com/lesliecolon_/"
                action
              >
                Instagram: lesliecolon_
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  </Layout>
)

export default Contact
