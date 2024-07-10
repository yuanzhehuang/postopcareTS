// HomePage.tsx
import React from 'react';
/** import Header from './Header';*/


const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#e6f3f5', minHeight: '100vh' }}>
      <main style={{ 
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
          We enable easy access of physician provided instructions for patients.
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '800px' }}>
          Private instructions are available, accessed by patients through a QR link with optional password protection.
        </p>
      </main>
    </div>
  );
};

export default HomePage;