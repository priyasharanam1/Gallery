import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
// import { ReactDOM } from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import EditPage from './pages/Edit';

function App() {
  return(
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/edit' element={<EditPage/>}/>
      </Routes>
    </div>
  )
  
}

export default App;
