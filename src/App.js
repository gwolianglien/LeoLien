import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
