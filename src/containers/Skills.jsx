import React, { Fragment } from "react";

import { Fade } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import webdev from "../assets/lottie/webdev.json";

import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    <Fade left duration={1000}>
      <Container className="text-center section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6" className="mb-5">
            <DisplayLottie animationData={webdev} />
          </Col>
          <Col lg="6">
            <div className="mb-5">
              {skillsSection.languages.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5 mx-1"
                      id={skill.skillName}
                    >
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
              <br />
              {skillsSection.frontendSkills.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5 mx-1"
                      id={skill.skillName}
                    >
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
              <br />
              {skillsSection.backendSkills.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5 mx-1"
                      id={skill.skillName}
                    >
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
              <br />
              {skillsSection.cloudSkills.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5 mx-1"
                      id={skill.skillName}
                    >
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;
