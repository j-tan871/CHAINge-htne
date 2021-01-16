import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardLink,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  const [login, setLogin] = useState(true);
  const history = useHistory();

  const handleClick = () => {
    setLogin(!login);
  }

  const redirect = () => {
      history.push("/profile");
  }

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Col lg="5" className="mt-3">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center mb-4">
              {
                login ? <CardHeader className="bg-secondary">Log In</CardHeader> : <CardHeader className="bg-secondary">Sign Up</CardHeader>
              }
            </div>
            <Form role="form">
              {
                !login ? <React.Fragment>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text" />
                    </InputGroup>
                  </FormGroup>
                </React.Fragment> : null
              }
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="email" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="off"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                {
                  login ?
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={redirect}
                  >
                    Login
                  </Button> :
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                  >
                    Sign Up
                  </Button>
                }
              </div>
              <div className="text-muted font-italic mt-4">
                {
                  login ? <small>
                    Don't have an account?{" "}
                    <CardLink className="text-primary font-weight-700" onClick={handleClick}>
                      Sign up
                    </CardLink></small> :
                  <small>Already have an account?{" "}
                    <CardLink className="text-primary font-weight-700" onClick={handleClick}>
                      Log in
                    </CardLink></small>
                }
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
}

export default Login
