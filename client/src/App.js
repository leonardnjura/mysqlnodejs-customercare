import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from "./components/AppNavbar";
import PersonnelList from "./components/PersonnelList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <PersonnelList />
    </div>
  );
}

export default App;
