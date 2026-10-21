import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-hero">
            <div className="landing-content">
              <p className="landing-eyebrow">GROW YOUR OWN PARADISE</p>
              <h1>Welcome to Paradise Nursery</h1>
              <div className="landing-divider"></div>
              <p className="landing-tagline">
                Where Green Meets Serenity
              </p>
              <p className="landing-description">
                Discover beautiful plants and bring a refreshing touch of
                nature into your everyday life.
              </p>
              <button
                className="get-started-button"
                onClick={handleGetStartedClick}
              >
                Explore Our Plants →
              </button>
            </div>
          </div>

          <AboutUs />
        </div>
      ) : (
        <div className="product-list-container">
          <ProductList onHomeClick={handleHomeClick} />
        </div>
      )}
    </div>
  );
}

export default App;

