import { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web developer', 'Web Designer', 'UI/UX Designer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Ian `}
              <span className='wrap'>web developer</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente natus voluptates quas eveniet officia itaque vero
                deleniti eaque, autem accusamus nostrum facilis perferendis
                excepturi cum exercitationem non rem, aliquam perspiciatis!
              </p>
              <button onClick={() => console.log('connect')}>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Image' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
