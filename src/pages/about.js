import React from 'react'
import Img from 'gatsby-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import '../../scss/about.scss'

export const query = graphql`
  query {
    file(relativePath: { regex: "/graduation/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const About = ({ data }) => (
  <Layout>
    <>
      <Head title="About" />
      <Container>
        <h1>About</h1>
        <Row>
          <Col sm="12" lg="6" className="d-flex justify-content-center my-auto">
            <div className="w-100 h-100">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Leslie Colon Graduation"
              />
            </div>
          </Col>
          <Col className="my-auto">
            <p>
              My name is Leslie Colon and I am from San Marcos, CA: A small city
              in the county of San Diego. I recently completed my Bachelor of
              Arts in Communication, specifically Mass Communication
              specializing in Public Relations and Advertising from California
              State University, Los Angeles.
            </p>
            <p>
              Growing up I was always a very social person and knew that I had
              to consider my communication skills when choosing a career. My
              interest in studying Communication began one Sunday night during a
              Sunday Night Football game, where I witnessed Erin Andrews
              interview football players on the field. Due to my love for
              football and my interest in traveling, I became curious and began
              to research what she studied and that's when I discovered that I
              would get my degree in Mass Communication.
            </p>
            <p>
              I began my career within the media and entertainment industry as
              an intern at AfterBuzz TV. There, I was able to learn about the
              production environment and once I was offered the opportunity to
              audition as a host I did. I began to host After Shows,
              specifically about Wrestling and Reality TV including the WWE RAW
              After Show, Total Bellas, and I was even part of the first Spanish
              After Show for the new Latin Channel, AfterBuzz TV Latino.
            </p>
            <p>
              Not only do I have experience as a host, but I also acquired a
              freelance position with Vesper Public Relations, specializing in
              PR within the Latin Market. While working side by side with the
              CEO of the company, I learned to set up red carpets while working
              events and have even worked with public figures for these events.
            </p>
            <p>
              Currently, I am looking for a full-time position within the
              Entertainment and Media industry. Meanwhile, I am still working as
              an intern for companies helping with Social Media, Marketing, and
              take any projects to gain experience. I have also branched out on
              my own and launched my own Youtube channel, Café con Leslie. So
              make sure you check out my channel and enjoy my conversations over
              a cup of Coffee!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  </Layout>
)

export default About
