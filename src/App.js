import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/HomePage';
import EditorPage from './pages/Editor/EditorPage' 
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    // routes.
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/editor' element={<EditorPage />}/>
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
