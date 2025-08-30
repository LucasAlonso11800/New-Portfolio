import React from 'react';

import { Button } from "reactstrap";

import { greetings, socialLinks } from "../portfolio";

const SocialLinks = ({ isHero = false }) => {
    const handleClick = () => {
        const link = document.createElement("a");
        link.download = 'Lucas Alonso Resume.pdf';
        link.href = greetings.resumeLink;
        link.click();
    };

    if (isHero) return (
        <button className='btn bg-info' onClick={handleClick}>
            <span class="btn-inner--icon mr-1">
                <i class="fa fa-file text-white"></i>
            </span>
            <span class="btn-inner--text text-white">Check My Resume</span>
        </button>
    )

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
                <button className='btn bg-white' onClick={handleClick}>
                    <span class="btn-inner--icon mr-1">
                        <i class="fa fa-file text-black"></i>
                    </span>
                    <span class="btn-inner--text text-black">Check My Resume</span>
                </button>
            </div>
        </>
    );
}

export default SocialLinks;