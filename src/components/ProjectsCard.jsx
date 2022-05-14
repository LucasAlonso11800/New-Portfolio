import React from 'react'

import {
    Card,
    CardBody,
    Row,
    Col,
    Button
} from "reactstrap";

import { Fade } from 'react-reveal';

const ProjectsCard = ({ data, index }) => {
    return (
        <Fade left={index % 2 === 0 ? true : false} right={index % 2 === 0 ? false : true} duration={1000}>
            <Card className="shadow-lg--hover shadow mt-4">
                <CardBody>
                    <Row lg="12">
                        <Col md='6' sm='12'>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h3 className="text-info text-center">
                                        {data.name}
                                    </h3>
                                    <p className="description mt-4">
                                        {data.desc}
                                    </p>
                                    <p className="description">
                                        {data.desc2}
                                    </p>
                                    <p className="description">
                                        {data.desc3}
                                    </p>
                                    <div>
                                        <Button
                                            className="btn-neutral btn-icon mb-4"
                                            color="primary"
                                            href={data.link.url}
                                            target="_blank"
                                        >
                                            <span className="btn-inner--icon">
                                                <i className="fa fa-arrow-right mr-2" />
                                            </span>
                                            <span className="nav-link-inner--text ml-1">
                                                {data.link.name}
                                            </span>
                                        </Button>
                                        <Button
                                            className="btn-neutral btn-icon mb-4"
                                            color="primary"
                                            href={data.git.url}
                                            target="_blank"
                                        >
                                            <span className="btn-inner--icon">
                                                <i className="fa fa-arrow-right mr-2" />
                                            </span>
                                            <span className="nav-link-inner--text ml-1">
                                                {data.git.name}
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='6' sm='12'>
                            <img src={data.img} alt={data.name} className="w-100 mb-4 rounded" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Fade>
    );
}

export default ProjectsCard;