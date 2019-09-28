import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import PersonnelList from './components/PersonnelList';
import TaskList from './components/TaskList';
import PersonnelModal from './components/PersonnelModal';
import TaskModal from './components/TaskModal';
import { Container } from 'reactstrap';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <PersonnelModal />
          <PersonnelList />
          <p>&nbsp;</p>
          <TaskModal />
          <TaskList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
