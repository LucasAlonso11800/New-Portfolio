import React from "react";
import { greetings } from "../portfolio";
import code from '../assets/lottie/coding.json';


import { Fade } from 'react-reveal';

import {
  Container,
  Row,
  Col
} from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "components/SocialLinks";

const Greetings = () => {
  return ( 
    <Fade top duration={1000} distance="40px">
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped">
              <div className="shape shape-style-1 bg-gradient-white">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-4 d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="pt-4 display-3 text-teal">
                        {greetings.title + " "}
                      </h1>
                      <p className="lead text-teal font-weight-600 mb-3">
                        {greetings.tagline}
                      </p>
                      <p className="lead text-teal">
                        {greetings.description.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            {index < greetings.description.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                      <SocialLinks isHero={true} />
                    </Col>
                    <Col lg="6">
                      <GreetingLottie animationData={code}/>
                    </Col>
                  </Row>
                </div>
              </Container>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
        </Fade>
   );
}
 
export default Greetings;
