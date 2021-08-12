import React from 'react';
import { Image, Container, Row, Col,/*, Card  */} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Bib } from '../components/CombinedElements';
import { AnchorLink } from '../components/InteractiveElements';

const MarginContainer = styled(Container)`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const GradientBackgroundOne = styled.div`
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, rgba(133, 255, 189, 0.9) 0%, rgba(255, 251, 125, 0.95) 100%), url(${process.env.PUBLIC_URL}/unsplash-restaurant.jpg);
    margin-top: -5rem;
    margin-bottom: 5rem;
    padding-top: 3rem;
    padding-bottom: 1.5rem;
`;

const GradientBackgroundTwo = styled.div`
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    margin-top: 5rem;
    margin-bottom: 10rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const Content = styled(Container)`
    padding-top: 5rem;
`;

function Home() {
    return (
        <div>
            <Helmet>
                <title>Grubsy</title>
            </Helmet>
            <GradientBackgroundOne>
                <MarginContainer fluid="md">
                    <Row>
                        <Col md="7">
                            <Content>
                                <h1>Introducing Grubsy</h1>
                                <h2>A mobile contactless dine-in ordering app</h2>
                                <p style={{marginTop: '1rem'}}>Grubsy addresses the problem of helping customers enjoy food safely at local restaurants while dining in during COVID-19</p>
                                <AnchorLink style={{marginTop: '3rem'}} md href="https://www.figma.com/proto/8mYNBSHpoHhxxJNgsiHhAY/IAT-334-P4-Prototype?node-id=104%3A343&scaling=scale-down&page-id=0%3A1&starting-point-node-id=104%3A2" target="_blank" rel="noreferrer noopener">Check our prototype</AnchorLink>
                            </Content>
                        </Col>
                        <Col xs lg="3">
                            <Container>
                                <Image style={{margin: "1rem 0 2rem 8rem"}} src={`${process.env.PUBLIC_URL}/iphone-prototype.png`}/>
                            </Container>
                        </Col>
                    </Row>
                </MarginContainer>
            </GradientBackgroundOne>
            <MarginContainer>
                <Row>
                    <Col xs lg="5">
                        <Image style={{margin: "2rem 8rem 2rem 0"}} src={`${process.env.PUBLIC_URL}/iphone-prototype.png`}/>
                    </Col>
                    <Col lg="7">
                        <Content>
                            <h3>Why is this a problem?</h3>
                            <p>Customers want to see restaurants following safety guidelines and often scan rooms to ensure their environment is safe to dine in. With new risks, customers feel weary and cautious about the objects they touch and all things on tables must be thoroughly sanitized</p>
                            <p>COVID-19 is a communicable disease that is defined as "an illness caused by an infectious agent or its toxic product that can be transmitted in a workplace from person to person". Thus, a clean environment must always be maintained for a safe dining experience.</p>
                        </Content>
                    </Col>
                </Row>
            </MarginContainer>
            <GradientBackgroundTwo>
                <MarginContainer>
                    <Row>
                        <Col lg="7">
                            <Content>
                                <h3>How Grubsy works</h3>
                                <ul>
                                    <li>Easily find the restaurant you want by searching or through suggestion based on your location</li>
                                    <li>Order online while dining inside the restaurant without the need to interact with any person or physical menu</li>
                                    <li>Safely pay through the app without having to pull out any card or cash</li>
                                    <li>Keep track of all the restaurants you’ve been to for a ease of mind without worry</li>
                                </ul>
                            </Content>
                        </Col>
                        <Col xs lg="5">
                            <Image style={{margin: "2rem 0 2rem 8rem"}} src={`${process.env.PUBLIC_URL}/iphone-prototype.png`}/>
                        </Col>
                    </Row>
                </MarginContainer>
                <MarginContainer>
                    <Row>
                        <Col xs lg="5">
                            <Image style={{margin: "2rem 8rem 2rem 0"}} src={`${process.env.PUBLIC_URL}/iphone-prototype.png`}/>
                        </Col>
                        <Col lg="7">
                            <Content>
                                <h3>How Grubsy is an effective solution</h3>
                                <ul>
                                    <li>Grubsy reduces the amount of physical interactions required while dining in at a restaurant</li>
                                    <li>Without the need to interact with others and physical menus, customers can feel less anxious about their surroundings and enjoy their meal with confidence</li>
                                    <li>With the ability to pay through the app, customers will not need to handle any cash or pull out a card to pay thus removing another unnecessary interaction</li>
                                    <li>By keeping track of the restaurants a customer has been to, they can easily identify a restaurant they've been to if any concerns arise</li>
                                </ul>
                            </Content>
                        </Col>
                    </Row>
                </MarginContainer>
            </GradientBackgroundTwo>
            <MarginContainer style={{marginBottom: '8rem'}}>
                <h4>Citations</h4>
                <Bib title="Tempura Bowl from Tendon Kohaku" site="Daily Hive" link="images.dailyhive.com/20210326145358/IMG_4653.jpg"/>
                <Bib title="Mastercard Logo" site="Mastercard" link="brand.mastercard.com/brandcenter/mastercard-brand-mark.html"/>
                <Bib title="Menu with a QR Code." site="NBC Montana" link="nbcmontana.com/resources/media/ebbe75df-87f7-4b79-ad85-67f9f7697eda-large1x1_511G8785_01.jpg?1589934975594"/>
                <Bib name="Perez, Valentina." title="Photo by Valentina Perez on Unsplash." site="Unsplash" date="8 June 2020" link="unsplash.com/photos/brPY6nMbPgw"/>
                <Bib name="Previsor." title="Restaurants and COVID-19: Challenges Affecting the Industry." site="Previsor Insurance," date="16 Oct. 2020," link="previsorinsurance.com/blog/restaurants-and-covid-19-challenges-and-changes-affecting-the-industry/"/>
                <Bib name="S O C I A L . C U T" title="Photo by S O C I A L . C U T on Unsplash." site="Unsplash" date="8 June 2021" link="unsplash.com/photos/IW6troZeS58"/>
                <Bib title="Sample Images" site="Internationalbarcodescom" link="internationalbarcodes.com/sample-images/"/>
                <Bib name="TENDON KOHAKU," title="Food images from restaurant" link="www.kohakutendon.com/"/>
                <Bib title="VISA Logo" site="Visa" link="usa.visa.com/run-your-business/accept-visa-payments/posguidelines.html"/>
                <Bib name="Worksafe BC" title="Step 3 of BC’s Restart: Communicable disease prevention" site="Worksafe BC" link="https://www.worksafebc.com/en/covid-19/bcs-four-step-restart"/>
                <Bib title="Restaurant information" site="Yelp" link="www.yelp.ca/vancouver"/>         
            </MarginContainer>
        </div>
    )
};

export default Home;
