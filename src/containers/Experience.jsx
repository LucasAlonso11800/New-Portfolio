import React from 'react';
import { experience } from "../portfolio";
import {
    Container,
    Row,
    Col,
} from "reactstrap";

import { Fade } from 'react-reveal';

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
    return (
        <section className="section section-lg bg-gradient-info">
            <Container>
                <Fade left duration={1000} distance="40px">
                    <div className="d-flex mb-4">
                        <div>
                            <div className="icon icon-lg icon-shape shadow rounded-circle bg-white">
                                <i className="ni ni-briefcase-24 text-teal" />
                            </div>
                        </div>
                        <div className="pl-4">
                            <h4 className="display-3 text-white">Experience</h4>
                        </div>
                    </div>
                    <Row className="justify-content-start">
                        <Col lg="8">
                            {
                                experience.map((data, index) => {
                                    return <ExperienceCard key={index} data={data} />
                                })
                            }
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </section>
    );
}

export default Experience;