import React from 'react';

import './App.css';
import { Route } from 'react-router-dom';
import Jeopardy from './components/jeopardy/Jeopardy';


function App() {
  return (
    <div className="App">
     <Route exact path="/" component={Jeopardy}/>
    </div>
  );
}

export default App;
