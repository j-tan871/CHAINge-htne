import React from 'react';

import {
  Container, 
  Row, 
  Col, 
  Card, 
  CardText, 
  CardBody,
  CardTitle,
  ListGroup, 
  ListGroupItem, 
  Badge, 
  Button
} from 'reactstrap';

//import './ShopCard.css';

const Shop = () => {

  return (
    <Container>
      <Row className="justify-content-md-center mt-5 mb-2">
        <h1>Shop with your CHAINgeCoins</h1>
      </Row>
      <Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Row>
      <Row className="d-flex justify-content-md-center mt-4 mb-5">
        <Row className="d-flex justify-content-center align-items-center mb-2">
          <div className="text-center mt-0 mr-3">
            <h3>
              CHAINgeCoin Balance: 
            </h3>
          </div>
          <span className="ml-1 mr-3"><h2>200</h2></span>
          <div className="icon icon-shape icon-shape-primary rounded-circle mb-10 mr-3 mb-2">
            <i className="ni ni-money-coins m-2" />
          </div>
        </Row>
      </Row>

      <Row className="d-flex justify-content-md-center mt-3">
        <Col lg="4">
          <Card className="card-lift--hover shadow border-0">
            <CardBody className="d-flex justify-content-md-center">
              <Container> 
                <Row className="d-flex justify-content-center align-items-center mb-2">
                  <div className="icon icon-shape icon-shape-primary rounded-circle mb-2">
                    <i className="ni ni-money-coins m-2" />
                  </div>
                  <span className="ml-3"><h2>20</h2></span>
                </Row>
                  <div className="text-center mt-2">
                    <div className="h5 font-weight-400">
                      <i className="ni location_pin mr-2" />
                      Contributor
                    </div>
                  </div>
                <Row>
                  <div tag="h6" className="ml-3 mr-2 mt-4 mb-3 text-muted text">
                    <ul>
                        <li>1 week priority in being chosen for a project</li>
                    </ul>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" >Buy</Button>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-lift--hover shadow border-0">
            <CardBody className="d-flex justify-content-md-center">
              <Container> 
                <Row className="d-flex justify-content-center align-items-center mb-2">
                  <div className="icon icon-shape icon-shape-primary rounded-circle mb-2">
                    <i className="ni ni-money-coins m-2" />
                  </div>
                  <span className="ml-3"><h2>20</h2></span>
                </Row>
                  <div className="text-center mt-2">
                    <div className="h5 font-weight-400">
                      <i className="ni location_pin mr-2" />
                      Plus
                    </div>
                  </div>
                <Row>
                  <div tag="h6" className="mt-2 text-muted text">
                    <ul>
                        <li>All Contributor perks</li>
                        <li>2 weeks priority in being chosen for a project</li>
                        <li>Profile badge</li>
                    </ul>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" >Buy</Button>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-lift--hover shadow border-0">
            <CardBody className="d-flex justify-content-md-center">
              <Container> 
                <Row className="d-flex justify-content-center align-items-center mb-2">
                  <div className="icon icon-shape icon-shape-primary rounded-circle mb-2">
                    <i className="ni ni-money-coins m-2" />
                  </div>
                  <span className="ml-3"><h2>20</h2></span>
                </Row>
                  <div className="text-center mt-2">
                    <div className="h5 font-weight-400">
                      <i className="ni location_pin mr-2" />
                      Award Non-profit
                    </div>
                  </div>
                <Row>
                  <div tag="h6" className="mb-2 text-muted text-center text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" >Buy</Button>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 mb-5">
        <Col lg="6">
        <Card className="card-lift--hover shadow border-0">
            <CardBody>
              <Container> 
                <Row className="d-flex justify-content-center align-items-center mb-2">
                  <div className="icon icon-shape icon-shape-primary rounded-circle mb-2">
                    <i className="ni ni-money-coins m-2" />
                  </div>
                  <span className="ml-3"><h2>20</h2></span>
                  
                  </Row> 
                    <div className="text-center mt-0">
                      <div className="h2 font-weight-400">
                        <i className="ni location_pin mr-2" />
                        Award Non-profit
                      </div>
                    </div>
                  <Row>
                </Row>
                <Row>
                  <div tag="h6" className="mb-2 text-muted text-center text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" >Buy</Button>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
        <Card className="card-lift--hover shadow border-0">
            <CardBody>
              <Container> 
                <Row className="d-flex justify-content-center align-items-center mb-2">
                  <div className="icon icon-shape icon-shape-primary rounded-circle mb-2">
                    <i className="ni ni-money-coins m-2" />
                  </div>
                  <span className="ml-3"><h2>20</h2></span>
                  </Row>
                    <div className="text-center mt-0">
                      <div className="h2 font-weight-400">
                        <i className="ni location_pin mr-2" />
                        VIP
                      </div>
                    </div>
                  <Row>
                </Row>
                <Row>
                  <div tag="h6" className="mb-2 text-muted text-center text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" >Buy</Button>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;