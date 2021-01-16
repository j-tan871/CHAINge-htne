import React from 'react';

import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';

function App() {
  return (
    <div style={styles.general}>
      <Navigation />
    </div>
  );
}

const styles = {
  general: {
    fontFamily: 'Roboto Mono'
  }
}

export default App;
