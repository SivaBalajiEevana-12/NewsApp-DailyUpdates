// import logo from './logo.svg';
import './App.css';


import React, {useState } from 'react'
import News from './component/News';
import NavBar from './component/NavBar';
// import About from './component/About';
import {
  BrowserRouter as Router,
  // RouterProvider,
  Route,
  // Link,
} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import LoadingBar from 'react-top-loading-bar';
export default function App () {
  let [progress,setProgress]=useState(0);

 
    return (
      <div>
        <Router>
          <NavBar />

          <LoadingBar
        color='#f11946'
        progress={10}
        onLoaderFinished={() => setProgress(0)}
      />
          <Switch>
            <Route exact path='/' key='general'><News setProgress={setProgress}country='in' catogery='general' pageSize='8' /></Route>
            <Route exact path='/business' key='business'><News setProgress={setProgress}country='in' catogery='business' pageSize='8' /></Route>
            <Route exact path='/science' key='science'><News setProgress={setProgress}country='in' catogery='science' pageSize='8' /></Route>
            <Route exact path='/sports' key='sports'><News setProgress={setProgress}country='in' catogery='sports' pageSize='8' /></Route>
            <Route exact path='/health' key='health'><News setProgress={setProgress}country='in' catogery='health' pageSize='8' /></Route>
            <Route exact path='/technology' key='technology'><News setProgress={setProgress}country='in' catogery='technology' pageSize='8' /></Route>
            <Route exact path='/entertainment' key='entertainment'><News setProgress={setProgress}country='in' catogery='entertainment' pageSize='8' /></Route>
            <Route exact path='/general' key='general'><News setProgress={setProgress}country='in' catogery='general' pageSize='8' /></Route>

          </Switch>
        </Router>
      </div>
    )
  }


