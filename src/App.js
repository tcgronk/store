import React from 'react';
import SideMenu from './Side-Menu/SideMenu'
import Main from "./Main/Main"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        Tailor & Chief
      </header> */}
      <p className='Sales-Banner'>
        Free Shipping on all sales!
      </p>
      <div className='Outline'>
      <SideMenu/>
      <Main/>
      </div>
    </div>
  );
}

export default App;
