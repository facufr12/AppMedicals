// import node module libraries
import { Fragment } from 'react'
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap'

// import sub components
import AboutMentor from './AboutMentor';
import TabMembershipPlan from './TabMembershipPlan';
import TabSessions from './TabSessions';
import MentorSingleHero from './MentorSingleHero';
import MentorSkills from './MentorSkills';
import WhatMenteesSay from './WhatMenteesSay';
import SimilarMentors from './SimilarMentors';

// import layouts
import NavbarMentorPages from 'layouts/marketing/navbars/NavbarMentorPages';
import FooterDark from 'layouts/marketing/footers/FooterDark';


const MentorSingle = () => {
    return (
        <Fragment>

            {/* Top Navbar */}
            <NavbarMentorPages />

            <section className="py-xl-8 py-6">
                <Container>
                    <Row className="gy-4">
                        <Col xl={8} xs={12}>
                            <div className="d-flex flex-column gap-4">

                                {/* Mentor single hero section */}
                                <MentorSingleHero />

                                {/* About mentor section */}
                                <AboutMentor />

                                {/* Mentor skills section */}
                                <MentorSkills />

                                {/* Mentees Testimonials */}
                                <WhatMenteesSay />

                            </div>
                        </Col>
                        <Col xl={4} xs={12} >
                            <Card>
                                <Card.Body className="px-md-5 pt-2">
                                    <Tab.Container id="tab" defaultActiveKey="membership">
                                        <Nav as="ul" className="nav-lb-tab mb-4" >
                                            <Nav.Item as="li" className='ms-0'>
                                                <Nav.Link eventKey="membership">Membership Plan</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="sessions">Sessions</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="membership">
                                                <TabMembershipPlan />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sessions">
                                                <TabSessions />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <SimilarMentors />

            {/*   Footer with center alignment */}
            <FooterDark />

        </Fragment>
    )
}

export default MentorSingle