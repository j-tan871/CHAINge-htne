import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Progress } from "reactstrap";

import image from '../images/chases.jpeg';

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background (can add bg later) */}
            <div className="shape shape-default alpha-5">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section>
            <Container>
              <Card className="card-profile shadow mt--300 mb-5">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={image}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                      <div className="text-left">Task Progress</div>
                      <Progress value={75} />
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Tasks Completed</span>
                        </div>
                        <div>
                          <span className="heading">1</span>
                          <span className="description">Groups Joined</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Chase Stevenson
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Atlanta, Georgia
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Protect the Pups
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Treasurer
                    </div>
                    <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="float-center"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                    </div>
                  </div>
                  <div className="mt-2 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        Hi, I'm Chase, the treasurer for Protect the Pups. I'm responsible for all things money
                        and mediate tasks including fundraising, financial budgeting and planning and record keeping.
                        Please feel free to send me a message if you have any questions about Protect the Pups or for me!
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Profile;
