
// File: /src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrandPage from './components/BrandPage';
import { brands } from './data/brand';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home brands={brands} />} />
        <Route path="/brand/:id" element={<BrandPage brands={brands} />} />
      </Routes>
    </Router>
  );
}

export default App;
