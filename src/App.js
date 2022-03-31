import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './routes/homepage/homepage.component.jsx'
import Navigation from './routes/navigation/navigation.component.jsx'
import SignIn from './routes/signin/signin.component.jsx'


const Shop =()=>{
  return(
      <div>I am a shop</div>
  )
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>

    </ Routes>
  );
};

export default App;
