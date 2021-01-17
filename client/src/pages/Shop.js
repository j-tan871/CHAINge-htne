import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Spinner,
  CardTitle,
  ListGroup, 
  ListGroupItem, 
  Badge, 
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import Fade from 'react-reveal/Fade';

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
        const responseData = await response.json();
        setCoin(responseData);
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
      const responseData = await response.json();
      setCoin(responseData);
      setLoading(false);
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }

  const [modal, setModal] = useState(false);
  // const toggle = (toSubtract) => {
  //   setCoin(toSubtract);
  //   setModal(!modal);
  // }

  const toggle = () => setModal(!modal);

  // const toggle = (toSubtract) => setModal(!modal);

  const [toSubtract, setSubtract] = useState();

  const confirm = (toSubtract) => {
    handleClick(toSubtract);
    toggle();
  }


  return (
    <Fade>
      <div>
        {
          toSubtract == 10 ?
            <div>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                  <div className="text-center mt-2">
                    <Row className="d-flex justify-content-center align-items-center mb-2">
                      <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>Contributor</h4></span>
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-2 ml-3">
                        <i className="ni ni-money-coins m-2" />
                      </div>
                      <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>10</h4></span>
                    </Row>
                  </div>
                  </ModalHeader>
                  <ModalBody>
                    <div style={{fontFamily: 'Roboto Mono'}}>
                      Continue with your Contributor perks purchase                            
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <div style={{fontFamily: 'Roboto Mono'}}>
                      <Button color="primary" onClick={() => confirm(10)}>Confirm</Button>
                      <Button color="secondary" onClick={toggle}>Cancel</Button>                            
                    </div>
                  </ModalFooter>
                </Modal>
            </div>
          : toSubtract == 50 ?
            <div>
              <Modal isOpen={modal} toggle={toggle} className="Modal2">
                <ModalHeader toggle={toggle}>
                  <div className="text-center mt-2">
                    <Row className="d-flex justify-content-center align-items-center mb-2">
                      <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>Plus</h4></span>
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-2 ml-3">
                        <i className="ni ni-money-coins m-2" />
                      </div>
                      <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>50</h4></span>
                    </Row>
                  </div>
                  </ModalHeader>
                  <ModalBody>
                    <div style={{fontFamily: 'Roboto Mono'}}>
                      Continue with your Plus perks purchase                            
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <div style={{fontFamily: 'Roboto Mono'}}>
                      <Button color="primary" onClick={() => confirm(50)}>Confirm</Button>
                      <Button color="secondary" onClick={toggle}>Cancel</Button>                            
                    </div>
                  </ModalFooter>
                </Modal>
            </div>
          : toSubtract == 100 ?
            <div>
              <Modal isOpen={modal} toggle={toggle} className="Modal3">
                <ModalHeader toggle={toggle}>
                <div className="text-center mt-2">
                  <Row className="d-flex justify-content-center align-items-center mb-2">
                    <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>Pro</h4></span>
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-2 ml-3">
                      <i className="ni ni-money-coins m-2" />
                    </div>
                    <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>100</h4></span>
                  </Row>
                </div>
                </ModalHeader>
                <ModalBody>
                  <div style={{fontFamily: 'Roboto Mono'}}>
                    Continue with your Pro perks purchase                            
                  </div>
                </ModalBody>
                <ModalFooter>
                  <div style={{fontFamily: 'Roboto Mono'}}>
                    <Button color="primary" onClick={() => confirm(100)}>Confirm</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>                            
                  </div>
                </ModalFooter>
              </Modal>               
            </div>

          : toSubtract == 130 ?
            <div>
              <Modal isOpen={modal} toggle={toggle} classNmae="Modal4">
                <ModalHeader toggle={toggle}>
                  <div className="text-center mt-2">
                    <Row className="d-flex justify-content-center align-items-center mb-2">
                      <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>Premier</h4></span>
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-2 ml-3">
                        <i className="ni ni-money-coins m-2" />
                      </div>
                      <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>130</h4></span>
                    </Row>
                  </div>
                  </ModalHeader>
                  <ModalBody>
                    <div style={{fontFamily: 'Roboto Mono'}}>
                      Continue with your Premier perks purchase                            
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <div style={{fontFamily: 'Roboto Mono'}}>
                      <Button color="primary" onClick={() => confirm(130)}>Confirm</Button>
                      <Button color="secondary" onClick={toggle}>Cancel</Button>                            
                    </div>
                  </ModalFooter>
                </Modal>
              </div>
            
          : toSubtract == 150 ?
            <div>
              <Modal isOpen={modal} toggle={toggle} className="Modal6">
                <ModalHeader toggle={toggle}>
                  <div className="text-center mt-2">
                    <Row className="d-flex justify-content-center align-items-center mb-2">
                      <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>Platinum</h4></span>
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-2 ml-3">
                        <i className="ni ni-money-coins m-2" />
                      </div>
                      <span className="ml-3"><h4 style={{fontFamily: 'Roboto Mono'}}>150</h4></span>
                    </Row>
                  </div>
                  </ModalHeader>
                  <ModalBody>
                    <div style={{fontFamily: 'Roboto Mono'}}>
                      Continue with your Platinum perks purchase                            
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <div style={{fontFamily: 'Roboto Mono'}}>
                      <Button color="primary" onClick={() => confirm(150)}>Confirm</Button>
                      <Button color="secondary" onClick={toggle}>Cancel</Button>                            
                    </div>
                  </ModalFooter>
                </Modal>
            </div>
          : null
        }
      </div>
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
            <a target="_blank" href="https://stellar.expert/explorer/testnet/account/GDF7RYDHS4PQ4XNHT3GUFROCKGOKQTKPO2MQ3TQINWNFGLHTRXWDSYGR">
            <Button color="primary">View Wallet</Button></a>
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
                    <div>
                      <Button color="primary" onClick={() => {setSubtract(10); toggle();}}>Buy</Button>
                    </div>
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
                  <div>
                      <Button color="primary" onClick={() => {setSubtract(50); toggle();}}>Buy</Button>
                    </div>
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
                  <div>
                      <Button color="primary" onClick={() => {setSubtract(100); toggle();}}>Buy</Button>
                    </div>
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
                  <div>
                      <Button color="primary" onClick={() => {setSubtract(130); toggle();}}>Buy</Button>
                    </div>
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
                  <div>
                      <Button color="primary" onClick={() => {setSubtract(150); toggle();}}>Buy</Button>
                    </div>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Shop;
