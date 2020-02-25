import React from 'react';

import {
  Intro, Content, NavBar, Social, Footer
} from './components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Content />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
