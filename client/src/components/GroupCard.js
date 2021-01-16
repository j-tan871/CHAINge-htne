import React from 'react';
import { 
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
  Button, 
  Container, 
  Row, 
  Badge
} from 'reactstrap';

import Tag from '../components/Tag';
import './GroupCard.css';

const GroupCard = props => {
  return (
    <Card className="card-lift--hover shadow border-0">
      <CardBody>
        <Container> 
          <Row className="d-flex justify-content-center align-items-center mb-4">
            <div className="card-profile-image col-4">
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="group photo"
                  className="rounded-circle img-fluid"
                  src={props.image}
                />
              </a>
            </div>
            <CardTitle tag="h5" className="justify-content-center col-8 mt-3">{props.name}</CardTitle>
          </Row>
          <Row>
            <CardText tag="h6" className="mb-2 text-muted text">{props.description}</CardText>
          </Row>
          <Row className="mt-2">
            {
              props.tags.map((text, index) => (
                <Tag key={index} text={text}/>
              ))
            }
          </Row>
          <Row className="d-flex justify-content-center mt-4">
            <Button color="primary" >Join Group</Button>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
}

export default GroupCard;