import { useSelector, useDispatch } from 'react-redux'
import React from "react";
  
import { Flowbite } from "flowbite-react";
import Foooter from './components/Foooter';
import Header from './components/Header'
import Home from './components/Home';

function App() {

  return (
    <Flowbite
      theme={{
        theme: {
          alert: {
            color: {
              primary: 'bg-primary'
            }
          }
        }
      }}
    >
          <div className="App min-h-screen dark:bg-darker">
        <Header />
        <Home />
        <Foooter />
      </div>
    </Flowbite>
  );
}

export default App;
