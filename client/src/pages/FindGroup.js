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
        "description": "Our group creates and maintains websites and other apps in the healthcare space. We're open to people of all experience levels.",
        "tags": [
          "healthcare", "web development"
        ],
        "keywords": "healthcare web website development",
        "img":javascript
      },
      {
        "name": "The Hacker Group",
        "description": "A group of volunteer white hat hackers. We throughly test code to ensure the security of any organization there is.",
        "tags": [
          "cybersecurity", "web development"
        ],
        "keywords": "LGBTQ+ empowerment",
        "img": hacker
      },
      {
        "name": "Global Initiative",
        "description": "A group of worldwide volunteers, dedicated to environmental initiatives with a focus on rural and impoverished areas.",
        "tags": [
          "environment", "worldwide"
        ],
        "keywords": "environment world",
        "img" : globe
      },
      {
        "name": "Bakers United",
        "description": "Just a group of chefs, foodies, and amatuer cooks making sure everyone is fed. Any experience level is welcome to join.",
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
        "name": "Healthy Giving",
        "description": "Give back to healthcare workers by providing necessary support, supplies, and help, especially during Covid-19.",
        "tags": [
          "healthcare"
        ],
        "keywords": "healthcare covid",
        "img":health
      },
      {
        "name": "UN Volunteers",
        "description": "To contribute and discuss curent volunteer opportunities listed by the United Nations and address any important issues.",
        "tags": [
          "healthcare", "worldwide"
        ],
        "keywords": "united nations",
        "img":un
      },
      {
        "name": "Special Olympics",
        "description": "Interested in the Speical Olympics and everything about it? Meet Special Olympics participants, coordinators, and volunteers here!",
        "tags": [
          "Special Olympics", 
          "worldwide"
        ],
        "keywords": "special olympics",
        "img":olympics
      },
      {
        "name": "Collaborate Online",
        "description": "Discussion board for online-only volunteer opportunities about important issues and any ideas. Must have Contributor or above to post.",
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
          <p>Find your group that fits your interests. From environmental advocacy to diversity groups,
            simply search for what you're interested and find your fit! There are groups for everyone. 
            Collaborate, contribute, and be the CHAINge anywhere and everywhere.
          </p>
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
