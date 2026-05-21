import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
// import LandingPageCoklat from './pages/LandingPageCoklat';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

