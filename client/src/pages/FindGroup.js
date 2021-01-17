import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
} from 'reactstrap';

import GroupCard from '../components/GroupCard';
import javascript from '../groupImgs/javascript.png';
import hacker from '../groupImgs/hacker.jpg';
import health from '../groupImgs/health.png';
import globe from '../groupImgs/globe.png';
import toast from '../groupImgs/toast.png';
import lgbtq from '../groupImgs/lgbtq.png';
import un from '../groupImgs/un.svg';
import web from '../groupImgs/web.png';
import olympics from '../groupImgs/olympics.jpg';


const FindGroup= () => {
  const [search, setSearch] = useState('');
  const [groups, setGroups] = useState(
    [
      {
        "name": "Javascript FTW",
        "description": "Our group creates and maintains websites and other apps in the healthcare space. Open to all experience levels",
        "tags": [
          "healthcare", "web development"
        ],
        "keywords": "healthcare web website development",
        "img":javascript
      },
      {
        "name": "The Hacker Group",
        "description": "A group of volunteer white hat hackers. We throughly test ",
        "tags": [
          "cybersecurity", "web development"
        ],
        "keywords": "LGBTQ+ empowerment",
        "img": hacker
      },
      {
        "name": "Global Initiative",
        "description": "We are a worldwide group of volunteers dedicated to working on environmentally-focused initiatives, with a focus on rural and impoverished areas.",
        "tags": [
          "environment", "worldwide"
        ],
        "keywords": "environment world",
        "img" : globe
      },
      {
        "name": "Bakers United",
        "description": "Just a group of chefs, foodies, and amatuer cooks making sure everyone is fed.",
        "tags": [
          "food", "hunger"
        ],
        "keywords": "food hunger",
        "img":toast
      },
      {
        "name": "LGBTQ+s for Social Good",
        "description": "A LGBTQ+ empowerment group. Our mission is to promote LGBTQ+ through social improvement. Open to all allys!",
        "tags": [
          "LGBTQ+ empowerment"
        ],
        "keywords": "LGBTQ+ empowerment",
        'img':lgbtq
      },
      {
        "name": "Healthcare Worker Support",
        "description": "Giving back to healthcare workers, especially during Covid-19",
        "tags": [
          "healthcare"
        ],
        "keywords": "healthcare covid",
        "img":health
      },
      {
        "name": "UN Volunteers",
        "description": "To discuss curent volunteer opportunities listed by the United Nations",
        "tags": [
          "healthcare", "worldwide"
        ],
        "keywords": "united nations",
        "img":un
      },
      {
        "name": "Special Olympics",
        "description": "Meet Special Olympics participants, coordinators, and volunteers here!",
        "tags": [
          "Special Olympics",
          "worldwide"
        ],
        "keywords": "special olympics",
        "img":olympics
      },
      {
        "name": "Collaborate Online",
        "description": "Discussion board for online-only volunteer opportunities. Must have Contributor or above to post",
        "tags": [
          "online", "worldwide"
        ],
        "keywords": "online team worldwide",
        "img":web
      },
    ]
  );

  const filter = (list) => {
    return list.filter(
      (listItem) => (
        listItem.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        listItem.keywords
          .toLowerCase()
          .includes(search.toLowerCase()))
    );
  }

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Find a Group</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-4">
        <Col lg="8">
          <Input
            placeholder="Search (ex: healthcare, climate, LGBTQ+)"
            type="text"
            value={search}
            onChange={(event) => {setSearch(event.target.value);}}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-5">
        {
          filter(groups).length === 0 ? <React.Fragment>No groups found. Try another keyword or group name!</React.Fragment> :
          filter(groups).map((groupItem, index) => (
            <Col className="order-lg-2 mt-4" lg="4">
              <GroupCard key={index} name={groupItem.name} description={groupItem.description} tags={groupItem.tags} image={groupItem.img}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default FindGroup;
