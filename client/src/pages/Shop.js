import React, { useEffect, useState } from 'react';

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
  Button, 
  Spinner
} from 'reactstrap';

const Shop = () => {
  const [coin, setCoin] = useState('Loading...');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoin = async() => {
      try {
        const body = JSON.stringify({
          username: 'bryant'
        });
        const headers = {
          'Content-Type': 'application/json'
        };
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getBalance`, {
          method: 'POST', 
          body, 
          headers
        });
        console.log(response);
        const responseData = await response.json();
        setCoin(responseData);
        console.log(coin);
      } catch(err) {
        console.log(err);
      }
    }
    fetchCoin();
  }, []);

  const handleClick = async(toSubtract) => {
    try {
      setLoading(true);
      const body = JSON.stringify({
        username: 'bryant', 
        password: 'password', 
        amt: toSubtract, 
        destination: 'admin'
      });
      const headers = {
        'Content-Type': 'application/json'
      };
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/addTransaction`, {
        method: 'POST', 
        body, 
        headers
      });
      console.log(response);
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
    try {
      const body = JSON.stringify({
        username: 'bryant'
      });
      const headers = {
        'Content-Type': 'application/json'
      };
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getBalance`, {
        method: 'POST', 
        body, 
        headers
      });
      console.log(response);
      const responseData = await response.json();
      setCoin(responseData);
      console.log(coin);
      setLoading(false);
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center mt-5 mb-2">
        <h1>Shop with your CHAINge Coins</h1>
      </Row>
      <Row>
        <p>
          Spend your CHAINgeCoins you have earned  and saved here to level up for additional perks in your group.
          Earn perks such as priority registration, additional group features such as posting, and much more.
          Earn CHAINgeCoins by joining and participating in group through things such as creating unique 
          content and contributing to group tasks.
        </p>
      </Row>
      <Row className="d-flex justify-content-md-center mt-4 mb-5">
        <Row className="d-flex justify-content-center align-items-center mb-2">
          <div className="text-center mt-0 mr-3">
            <h3>
              CHAINgeCoin Balance: 
            </h3>
          </div>
          <span className="ml-1 mr-3"><h2>{coin}</h2></span>
          <div className="icon icon-shape icon-shape-primary rounded-circle mb-10 mr-3 mb-2">
            <i className="ni ni-money-coins m-2" />
          </div>
        </Row>
      </Row>
      {
        loading ? <Row className="justify-content-md-center mt-1 mb-5">
            <Spinner color="primary" />
          </Row> : null
      }
      <Row className="d-flex justify-content-md-center mt-3">
        <Col lg="4">
          <Card className="card-lift--hover shadow border-0">
            <CardBody className="d-flex justify-content-md-center">
              <Container> 
                <Row className="d-flex justify-content-center align-items-center mb-2">
                  <div className="icon icon-shape icon-shape-primary rounded-circle mb-2">
                    <i className="ni ni-money-coins m-2" />
                  </div>
                  <span className="ml-3"><h2>10</h2></span>
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
                  <Button color="primary" onClick={() => handleClick(10)}>Buy</Button>
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
                  <span className="ml-3"><h2>50</h2></span>
                </Row>
                  <div className="text-center mt-2">
                    <div className="h5 font-weight-400">
                      <i className="ni location_pin mr-2" />
                      Plus
                    </div>
                  </div>
                <Row>
                  <div tag="h6" className="mt-1 ml-2 text-muted text">
                    <ul>
                        <li>All Contributor perks</li>
                        <li>2 weeks priority in being chosen for a project</li>
                        <li>Profile badge</li>
                    </ul>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" onClick={() => handleClick(50)}>Buy</Button>
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
                  <span className="ml-3"><h2>100</h2></span>
                </Row>
                  <div className="text-center mt-2">
                    <div className="h5 font-weight-400">
                      <i className="ni location_pin mr-2" />
                      Pro
                    </div>
                  </div>
                <Row>
                <div tag="h6" className="mt-1 ml-2 text-muted text">
                    <ul>
                        <li>All Plus perks</li>
                        <li>4 weeks priority in being chosen for a project</li>
                        <li>Direct non-profit chat line</li>
                    </ul>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" onClick={() => handleClick(100)}>Buy</Button>
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
                  <span className="ml-3"><h2>130</h2></span>
                  
                  </Row> 
                    <div className="text-center mt-0">
                      <div className="h2 font-weight-400">
                        <i className="ni location_pin mr-2" />
                        Premier
                      </div>
                    </div>
                  <Row>
                </Row>
                <Row>
                  <div tag="h6" className="mt-2 ml-5 text-muted text">
                    <ul>
                        <li>All Pro perks</li>
                        <li>Ability to add features to your group</li>
                    </ul>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" onClick={() => handleClick(130)}>Buy</Button>
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
                  <span className="ml-3"><h2>150</h2></span>
                  </Row>
                    <div className="text-center mt-0">
                      <div className="h2 font-weight-400">
                        <i className="ni location_pin mr-2" />
                        Platinum
                      </div>
                    </div>
                  <Row>
                </Row>
                <Row>
                  <div tag="h6" className="mt-2 ml-5 text-muted text">
                    <ul>
                        <li>All Premier perks</li>
                        <li>Ability to pitch upcoming project ideas</li>
                    </ul>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                  <Button color="primary" onClick={() => handleClick(150)}>Buy</Button>
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