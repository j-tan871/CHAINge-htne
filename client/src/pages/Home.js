import React from 'react';
import {
  Container,
  Row
} from 'reactstrap';
import image from '../homebackground.jpg';
const screenHeight = window.innerHeight;

const Home = () => {
  return (
    <React.Fragment>
      <div style={{ height:100 }} className="d-flex justify-content-center">
        <h1>CHAINge: be the chainge you wish to see</h1>
      </div>
      <div style={{...styles.window, alignItems: 'center', marginTop: 0, backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundPosition: "center", backgroundSize: "absolute" }}></div>
      <div style={ styles.window }>
        <Container>
          <Row>
            <h1 className="mt-4">About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

const styles = {
  window: {
    height: screenHeight - 240,
    display: 'flex',
    flexDirection: 'column'
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50
  }
}

export default Home;
