import React from 'react';
import {
  Container,
  Row
} from 'reactstrap';
import image from '../homebackground.jpg';
import Fade from 'react-reveal/Fade';

const screenHeight = window.innerHeight;

const Home = () => {
  return (
    <Fade>
      <div style={{ height:100 }} className="d-flex justify-content-center">
        <h1>CHAINge: be the chainge you wish to see</h1>
      </div>
      <div style={{...styles.window, alignItems: 'center', marginTop: 0, backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundPosition: "center", backgroundSize: "absolute" }}></div>
      <div style={ styles.window }>
        <Container className="mt-5">
          <Row>
            <h1 className="mt-5">About Us</h1>
            <p>
              CHAINge is a worldwide organization that strives to bring volunteers together and work for social change and inclusivity 
              during the COVID-19 pandemic. We connect volunteers with non-profit organizations that need motivated individuals to help 
              further their cause. Volunteers are rewarded for their hard work with CHAINgeCoin, a decentralized token based on the Stellar 
              blockchain network, and gain perks for each task they complete with their group. 
            </p>
          </Row>
        </Container>
      </div>
    </Fade>
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
