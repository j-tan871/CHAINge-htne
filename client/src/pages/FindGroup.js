import React, { useState } from 'react';
import {
  Container, 
  Row,
  Col, 
  Input,
  ListGroupItemHeading
} from 'reactstrap';

import GroupCard from '../components/GroupCard';
import image from '../hehe.jpg';

const FindGroup= () => {
  const [search, setSearch] = useState('');
  const [groups, setGroups] = useState(
    [
      {
        "name": "Group 1", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "healthcare", "disability justice"
        ], 
        "keywords": "healthcare disability justice"
      }, 
      {
        "name": "Group 2", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "LGBTQ+ empowerment"
        ], 
        "keywords": "LGBTQ+ empowerment"
      }, 
      {
        "name": "Group 3", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "environment", "decolonization"
        ], 
        "keywords": "environment decolonization"
      }, 
      {
        "name": "Group 4", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "healthcare", "disability justice"
        ], 
        "keywords": "healthcare disability justice"
      }, 
      {
        "name": "Group 5", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "LGBTQ+ empowerment"
        ], 
        "keywords": "LGBTQ+ empowerment"
      }, 
      {
        "name": "Group 6", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "environment","decolonization"
        ], 
        "keywords": "environment decolonization"
      }, 
      {
        "name": "Group 7", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "healthcare", "disability justice"
        ], 
        "keywords": "healthcare disability justice"
      }, 
      {
        "name": "Group 8", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "LGBTQ+ empowerment"
        ], 
        "keywords": "LGBTQ+ empowerment"
      }, 
      {
        "name": "Group 9", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "tags": [
          "environment", "decolonization"
        ], 
        "keywords": "environment decolonization"
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
    <React.Fragment>
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
              onChange={(event) => {setSearch(event.target.value); console.log(search)}}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {
            filter(groups).map((groupItem, index) => (
              <Col className="order-lg-2 mt-4" lg="4">
                <GroupCard key={index} name={groupItem.name} description={groupItem.description} tags={groupItem.tags}image={image}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FindGroup;