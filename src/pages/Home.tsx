
// File: /src/pages/Home.tsx

import { Link } from 'react-router-dom';
import { Brand } from '../data/brand';
import '../App.css';

interface HomeProps {
  brands: Brand[];
}

function Home({ brands }: HomeProps) {
  return (
    <div className="firefox-container">
      <div className="top-nav">
        <div className="nav-title">Brand Directory</div>
        <button className="refresh-button" onClick={() => window.location.reload()}>🔃 Refresh</button>
      </div>

      <div className="main-content">
        <div className="brand-grid-container">
         
          <div className="brand-grid">
            {brands.map(brand => (
              <Link to={`/brand/${brand.id}`} key={brand.id} className="brand-tile">
                <img src={brand.logo} alt="" />
                <div className="brand-name">{brand.name}</div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;

