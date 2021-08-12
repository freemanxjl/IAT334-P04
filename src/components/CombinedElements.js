import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export function Bib({name, title, site, link, date}){
    return(<p>{name} "{title}", <em>{site}</em> {date} {link}.</p>);
}

export default Bib;
