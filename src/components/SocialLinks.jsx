import React from 'react';

import { Button } from "reactstrap";

import { greetings, socialLinks } from "../portfolio";

const SocialLinks = () => {
    const handleClick = () => {
        const link = document.createElement("a");
        link.download = 'Lucas Alonso Resume.pdf';
        link.href = greetings.resumeLink;
        link.click();
    };

    return (
        <>
            <div className="btn-wrapper text-lg">
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="github"
                    href={socialLinks.github}
                    target="_blank"
                >
                    <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                    </span>
                </Button>
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="twitter"
                    href={socialLinks.linkedin}
                    target="_blank"
                >
                    <span className="btn-inner--icon">
                        <i className="fa fa-linkedin" />
                    </span>
                </Button>
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="instagram"
                    href={socialLinks.gmail}
                    target="_blank"
                >
                    <span className="btn-inner--icon">
                        <i className="fa fa-google" />
                    </span>
                </Button>
            </div>
            <div class="btn-wrapper my-4">
                <Button class="btn-white btn-icon mb-3 mb-sm-0 ml-1 btn btn-default" onClick={handleClick}>
                    <span class="btn-inner--icon mr-1">
                        <i class="fa fa-file"></i>
                    </span>
                    <span class="btn-inner--text">See My Resume</span>
                </Button>
            </div>
        </>
    );
}

export default SocialLinks;