import React from 'react';
import { Image, Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Bib } from '../components/CombinedElements';
import { AnchorLink } from '../components/InteractiveElements';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Grubsy</title>
            </Helmet>
            <Container>
                <h1>Introducing Grubsy</h1>
                <h2>A mobile contactless dine-in ordering app</h2>
                <AnchorLink lg href="https://www.figma.com/proto/8mYNBSHpoHhxxJNgsiHhAY/IAT-334-P4-Prototype?node-id=104%3A343&scaling=scale-down&page-id=0%3A1&starting-point-node-id=104%3A2" target="_blank" rel="noreferrer noopener">Check our prototype</AnchorLink>
            </Container>
            <Container>
                <h3>The Problem Context</h3>
                <p>Our app addresses the problem of helping customers enjoy food safely at local restaurants while dining in during COVID-19</p>
            </Container>
            <Container>
                <h3>Why is this a problem?</h3>
                <p>Customers want to see restaurants following safety guidelines and often scan rooms to ensure their environment is safe to dine in. With new risks, customers feel weary and cautious about the objects they touch and all things on tables must be thoroughly sanitized</p>
                <p>Additionally, 90% of customers look online to research and find inspirations for restaurants they would like to dine from. Customers will rely on search engines, online reviews, and restaurant websites to make a careful decision on where to enjoy their food</p>
            </Container>
            <Container>
                <h3>How Grubsy works</h3>
                <ul>
                    <li>Easily find the restaurant you want either by searching or through suggestions</li>
                    <li>Order online while dining inside the restaurant without the need to interact with any person or physical menu</li>
                    <li>Safely pay through the app without having to pull out any card or cash</li>
                    <li>Keep track of all the restaurants you’ve been to for a ease of mind without worry</li>
                </ul>
            </Container>
            <Container>
                <h3>How Grubsy is an effective solution</h3>
                <ul>
                    <li>Customers are able to search for restaurants and look at their menus online beforehand in order to make an informed and enjoyable decision</li>
                    <li>Without the need to interact with others and physical menus, customers can feel less anxious about their surroundings and enjoy their meal with confidence</li>
                    <li>With the ability to pay through the app, customers will not need to interact with any cash or pull out a card to pay thus removing another unneeded interaction</li>
                    <li>Customers can keep track of the restaurants they’ve been to in case of any concerns that arise at restaurants they’ve been to</li>
                </ul>
            </Container>
            <Container>
                <h4>Citations</h4>
                <Bib name="DoorDash, Andrew McCarthy." title="The Rise of Food Delivery Services: Why Today's Consumers Order In, DoorDash" date="18 Dec. 2020," link="get.doordash.com/blog/rise-in-food-delivery-and-why-it-is-popular"/>
                <Bib title="Tempura Bowl from Tendon Kohaku" site="Daily Hive" link="images.dailyhive.com/20210326145358/IMG_4653.jpg"/>
                <Bib title="Mastercard Logo" site="Mastercard" link="brand.mastercard.com/brandcenter/mastercard-brand-mark.html"/>
                <Bib title="Menu with a QR Code." site="NBC Montana" link="nbcmontana.com/resources/media/ebbe75df-87f7-4b79-ad85-67f9f7697eda-large1x1_511G8785_01.jpg?1589934975594"/>
                <Bib name="Perez, Valentina." title="Photo by Valentina Perez on Unsplash." site="Unsplash" date="8 June 2020" link="unsplash.com/photos/brPY6nMbPgw"/>
                <Bib name="Previsor." title="Restaurants and COVID-19: Challenges Affecting the Industry." site="Previsor Insurance," date="16 Oct. 2020," link="previsorinsurance.com/blog/restaurants-and-covid-19-challenges-and-changes-affecting-the-industry/"/>
                <Bib name="S O C I A L . C U T" title="Photo by S O C I A L . C U T on Unsplash." site="Unsplash" date="8 June 2021" link="unsplash.com/photos/IW6troZeS58"/>
                <Bib title="Sample Images" site="Internationalbarcodescom" link="internationalbarcodes.com/sample-images/"/>
                <Bib name="TENDON KOHAKU," title="Food images from restaurant" link="www.kohakutendon.com/"/>
                <Bib title="VISA Logo" site="Visa" link="usa.visa.com/run-your-business/accept-visa-payments/posguidelines.html"/>
                <Bib title="Restaurant information" site="Yelp" link="www.yelp.ca/vancouver"/>         
            </Container>
        </div>
    )
};

export default Home;
