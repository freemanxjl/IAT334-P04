import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '../css/grid-image.scss';

//A link within text, can be linked to an external site or internal route
function TextLink({link, siteLink, children}) {
    return link ? <a href={link} target="_blank" rel="noopener noreferrer">{children}</a> : <Link to={siteLink}>{children}</Link>
}

//Button element
export const NavLink = styled(Link)`
    color: #ffffff;
    background-color: #3a7a73;
    border: none;
    margin: 0.25rem 0.5rem 0.25rem 0;
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;

    /* Hover effect */
    ${this}:hover{
        background-color: #1a9486;
        color: #ffffff;
        text-decoration: none;
    }

    /* Specific size stylings */
    ${({sm}) => sm && `
        padding: 0.15rem 1rem 0.15rem 1rem;
        font-size: 1rem;
    `}
    ${({md}) => md && `
        padding: 0.15rem 2rem 0.15rem 2rem;
    `}
    ${({lg}) => lg && `
        padding: 0.2rem 2.5rem 0.2rem 2.5rem;
        font-size: 2rem;
    `}
`;

export const AnchorLink = styled.a`
    color: #ffffff;
    background-color: #000000;
    font-weight: 700;
    border-radius: 2rem;
    margin: 0.25rem 0.5rem 0.25rem 0;
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;

    /* Hover effect */
    ${this}:hover{
        background-color: #006245;
        color: #ffffff;
        text-decoration: none;
    }

    /* Specific size stylings */
    ${({sm}) => sm && `
        padding: 0.15rem 1rem 0.15rem 1rem;
        font-size: 1rem;
    `}
    ${({md}) => md && `
        padding: 1rem 2rem 1rem 2rem;
    `}
    ${({lg}) => lg && `
        padding: 0.2rem 2.5rem 0.2rem 2.5rem;
        font-size: 2rem;
    `}
`;

export default TextLink;
