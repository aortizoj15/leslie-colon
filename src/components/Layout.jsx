import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'
import '../styles.scss'

const Layout = props => {
  const { children } = props
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="m-3">
        <Col>{children}</Col>
      </Row>
      <Row>
        <Col>
          <Footer>Created by Alexis Ortiz Ojeda</Footer>
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
