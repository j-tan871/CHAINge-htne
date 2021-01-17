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
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap';


const Group = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5 mb-2">
        <h1>Protect the Pups</h1>
      </Row>
      <Row>
        <p>
          We are a worldwide group of volunteers dedicated to working on canine-focused initiatives, with a focus on fighting animal cruelty and neglect.
        </p>
      </Row>
      <Row className="justify-content-md-center mt-5 mb-2">
        <h1>Group Stats</h1>
      </Row>
      <Row className="d-flex justify-content-md-center mt-3">
        <Col lg="3">
          <Card className="shadow border-0 card-lift--hover">
            <CardBody className="d-flex justify-content-md-center">
              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                <i className="ni ni-bullet-list-67 m-2" />
              </div>
              <span className="ml-3"><h2>4</h2></span>
            </CardBody>
            <CardTitle className="ml-3 mr-3 d-flex justify-content-md-center">Tasks Remaining</CardTitle>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="shadow border-0 card-lift--hover">
            <CardBody className="d-flex justify-content-md-center">
              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                <i className="ni ni-check-bold m-2" />
              </div>
              <span className="ml-3"><h2>5</h2></span>
            </CardBody>
            <CardTitle className="ml-3 mr-3 d-flex justify-content-md-center">Tasks Completed</CardTitle>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="shadow border-0 card-lift--hover">
            <CardBody className="d-flex justify-content-md-center">
              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                <i className="ni ni-money-coins m-2" />
              </div>
              <span className="ml-3"><h2>20</h2></span>
            </CardBody>
            <CardTitle className="ml-3 mr-3 d-flex justify-content-md-center">CHAINgeCoins Earned</CardTitle>
          </Card>
        </Col>
        <Col lg="3">
          <Card className="shadow border-0 card-lift--hover">
            <CardBody className="d-flex justify-content-md-center">
              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                <i className="ni ni-circle-08 m-2" />
              </div>
              <span className="ml-3"><h2>3</h2></span>
            </CardBody>
            <CardTitle className="ml-3 mr-3 d-flex justify-content-md-center">Group Members</CardTitle>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 mb-5">
        <Col lg="6">
          <Card className="shadow border-0 card-lift--hover">
            <CardTitle className="ml-3 mr-3 mt-4 d-flex justify-content-md-center" tag="h4">Tasks</CardTitle>
            <CardBody>
              <ListGroup>
                <ListGroupItem>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheck1"
                      type="checkbox"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Find a forever home for Jefferie.
                    </label>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheck2"
                      type="checkbox"
                    />
                    <label className="custom-control-label" htmlFor="customCheck2">
                      Migrate pet shot db to noSQL (@Kendra).
                    </label>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheck3"
                      type="checkbox"
                    />
                    <label className="custom-control-label" htmlFor="customCheck3">
                      Set up bake sale fundraiser. NO NUTS
                    </label>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheck4"
                      type="checkbox"
                    />
                    <label className="custom-control-label" htmlFor="customCheck4">
                      Investigate leads in top secret folder.
                    </label>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="shadow border-0 card-lift--hover">
            <CardTitle className="ml-3 mr-3 mt-4 d-flex justify-content-md-center" tag="h4">Members</CardTitle>
            <CardBody>
              <ListGroup>
                <ListGroupItem>Kendra Huang<Badge pill className="ml-2 bg-info">Premier</Badge></ListGroupItem>
                <ListGroupItem>Bryant Hou<Badge pill className="ml-2 bg-success">Platinum</Badge></ListGroupItem>
                <ListGroupItem>Raghav Sriram<Badge pill className="ml-2 bg-warning">Pro</Badge></ListGroupItem>
                <ListGroupItem>Jenny Tan<Badge pill className="ml-2 bg-danger">Contributor</Badge></ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Group;
