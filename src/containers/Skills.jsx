import React, { Fragment } from "react";

import { Fade } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import webdev from "../assets/lottie/webdev.json";

import { Container, Row, Col } from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    <Fade left duration={1000}>
      <Container className="text-center section section-lg">
        <h1 className="h1 text-black font-weight-500">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6" className="mb-5">
            <DisplayLottie animationData={webdev} />
          </Col>
          <Col lg="6">
            <div className="mb-5">
              <div className="d-flex flex-wrap justify-content-center">
                {skillsSection.languages.map((skill) => (
                  <div key={skill.skillName} className="text-center mx-3 mb-4">
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-2 mx-auto">
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <p className="text-muted font-weight-500">{skill.skillName}</p>
                  </div>
                ))}
                
                {skillsSection.frontendSkills.map((skill) => (
                  <div key={skill.skillName} className="text-center mx-3 mb-4">
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-2 mx-auto">
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <p className="text-muted font-weight-500">{skill.skillName}</p>
                  </div>
                ))}
                
                {skillsSection.backendSkills.map((skill) => (
                  <div key={skill.skillName} className="text-center mx-3 mb-4">
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-2 mx-auto">
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <p className="text-muted font-weight-500">{skill.skillName}</p>
                  </div>
                ))}
                
                {skillsSection.cloudSkills.map((skill) => (
                  <div key={skill.skillName} className="text-center mx-3 mb-4">
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-2 mx-auto">
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <p className="text-muted font-weight-500">{skill.skillName}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;
