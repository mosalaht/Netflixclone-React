import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import {actions,comedy,documentaries,horror,romance,trending} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={trending} title = 'Netflix Originals'/>
      <RowPost url={actions} title = 'Action' isSmall/>
      <RowPost url={romance} title = 'Romance' isSmall/>
      <RowPost url={comedy} title = 'Comedy' isSmall/>
      <RowPost url={horror} title = 'Horror' isSmall/>
      <RowPost url={documentaries} title = 'Documentaries' isSmall/>
    </div>
  );
}

export default App;
