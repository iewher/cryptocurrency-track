import React from 'react';
import Header from './components/structure/Header';
import Body from './components/structure/Body';
import Bottom from './components/structure/Bottom';
import './/components/style/style.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Body />
      <Bottom />
    </div>
  );
}

export default App;
