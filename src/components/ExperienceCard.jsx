import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Fade } from 'react-reveal';

const ExperienceCard = ({ data }) => {
    // Function to render text with bold formatting
    const renderBoldText = (text) => {
        if (!text) return '';
        
        // Split text by ** markers and render bold parts
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <b key={index} className='text-teal font-weight-600'>{part.slice(2, -2)}</b>;
            }
            return part;
        });
    };

    return (
        <div className="mb-4">
            <Fade left duration={1000} distance="40px">
                <Card className="shadow border-0 rounded bg-white">
                    <CardBody className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                                <CardTitle tag="h3" style={{ 
                                    color: '#000000',
                                    fontWeight: '600',
                                    marginBottom: '0.5rem'
                                }}>
                                    {data.company}
                                </CardTitle>
                                <CardSubtitle className="text-teal" style={{ 
                                    fontWeight: '500',
                                    fontSize: '1.25rem'
                                }}>
                                    {data.role}
                                </CardSubtitle>
                            </div>
                            <div style={{ 
                                color: '#666666',
                                fontWeight: '500'
                            }}>
                                {data.date}
                            </div>
                        </div>
                        
                        <CardText className="mt-3">
                            <ul className="list-unstyled mb-0">
                                {data.descBullets && data.descBullets.map((desc, index) => (
                                    <li key={index} className="mb-2 text-black" style={{fontSize: '18px'}}>
                                        <span className='text-teal mr-2'>•</span>
                                        {renderBoldText(desc)}
                                    </li>
                                ))}
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            </Fade>
        </div>
    );
}

export default ExperienceCard;