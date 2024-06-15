import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";
import simpleStore from "../../Assets/Projects/store.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Blog App'
              description='My portfolio project blog page build with NodeJS, ExpressJS, ReactJS, PostgreSQL and Tailwind Css.'
              ghLink='https://github.com/nurdinxdev/blog-app'
              demoLink='https://nurdinxdev-blog-app.vercel.app/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={simpleStore}
              isBlog={false}
              title='Simple Store'
              description='My portfolio project ReactJS and Tailwind Css'
              ghLink='https://github.com/nurdinxdev/e-commerce'
              demoLink='https://nurdinxdev-e-commerce.vercel.app/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={simpleStore}
              isBlog={false}
              title='Lorem Ipsum'
              description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!'
              ghLink='#'
              demoLink='#'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
