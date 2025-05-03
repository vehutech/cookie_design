import { Routes, Route, Link } from 'react-router-dom';
import Artifact1 from './artifact1/cookie-consent-ui';
import Artifact2 from './artifact2/cookie-consent-ui';
import Artifact3 from './artifact3/cookie-consent-ui';

export default function App() {
  const handleRefresh = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <nav
        style={{
          padding: '1rem',
          borderBottom: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#f8f9fa',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{
          fontFamily: 'IBM Plex Sans, sans-serif',
          display: 'flex',
          gap: '1rem'
        }}>
          <Link to="/artifact1">Artifact 1</Link>
          <Link to="/artifact2">Artifact 2</Link>
          <Link to="/artifact3">Artifact 3</Link>
        </div>

        <button
          onClick={handleRefresh}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '0.9rem',
            cursor: 'pointer',
            borderRadius: '4px',
            border: '1px solid #ccc',
            background: '#ffffff',
          }}
        >
          🔄 Refresh
        </button>
      </nav>

      <main style={{
        fontFamily: 'IBM Plex Sans, sans-serif',
      }}>
        <Routes>
          <Route path="/artifact1" element={<Artifact1 />} />
          <Route path="/artifact2" element={<Artifact2 />} />
          <Route path="/artifact3" element={<Artifact3 />} />
          <Route path="/" element={<h2>Select an artifact to preview.</h2>} />
        </Routes>
      </main>
    </div>
  );
}
