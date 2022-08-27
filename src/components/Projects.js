import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

import { Col, Container, Nav, Row, TabContent, TabPane } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projects = [
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              accusantium? Asperiores in similique est possimus animi nihil
              mollitia, hic amet ratione eius a illum quis optio accusamus nemo
              obcaecati ullam.
            </p>
            <Nav.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant='pills' defaultActiveKey='/home'>
                <Nav.Item>
                  <Nav.Link eventKey='fist'>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey='first'>
                  <Row>
                    {projects.map((projects, index) => {
                      return <ProjectCard key={index} {...projects} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey='second'>lorem ipsum</TabPane>
                <TabPane eventKey='third'>lorem ipsum</TabPane>
              </TabContent>
            </Nav.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt='' className='background-image-right' />
    </section>
  );
};
