import React from 'react';
import Sidebar from './components/Sidebar';
import InvitationList from './pages/InvitationList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <InvitationList />
      </div>
    </div>
  );
};

export default App;
