
import { useState } from 'react';
import './App.css';
import Body from './Body.js'
import Header from './Header.js'
import { usercontext } from './utils/Context';
function App() {
 
  const [userr, setuserr]=useState({name:"prasad"});



  return (
   <div className="App">
   <usercontext.Provider value={{user:userr, setuser:setuserr } }>
      <Header  />
      <Body  />
      </usercontext.Provider>
    </div>
  );
}

export default App;
