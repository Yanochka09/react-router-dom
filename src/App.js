import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Main from './Main/Main';
import Catalogue from './Catalogue/Catalogue';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='Header'>
          <Link to="/" className='Header__Link'>
            <div>
              Home
            </div>
          </Link>
          <Link to="/menu/*" className='Header__Link'>
            <div>
              Menu
            </div>
          </Link>
          <Link to="/catalogue" className='Header__Link'>
            <div>
              Catalogue
            </div>
          </Link>
          <Link to="/about" className='Header__Link'>
            <div>
              About
            </div>
          </Link>
          <Link to="/contacts" className='Header__Link'>
            <div>
              Contacts
            </div>
          </Link>
        </div>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/menu/*' element={<Menu />} />
          <Route exact path='/catalogue/*' element={<Catalogue />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts/*' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
