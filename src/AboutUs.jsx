
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <span className="about-us-label">ABOUT PARADISE NURSERY</span>
        <h2>Bringing Nature Closer to You</h2>
        <p>
          At Paradise Nursery, we believe every space deserves a touch of
          nature. Our collection of beautiful indoor and outdoor plants helps
          you create a greener, fresher, and more peaceful environment.
        </p>
        <p>
          Whether you are a beginner or an experienced plant lover, we make
          finding and caring for your perfect plant simple and enjoyable.
        </p>

        <div className="about-us-features">
          <div className="about-us-feature">
            <span>🌱</span>
            <h3>Healthy Plants</h3>
            <p>Beautiful plants for every space.</p>
          </div>

          <div className="about-us-feature">
            <span>🌿</span>
            <h3>Easy Care</h3>
            <p>Options for beginners and experts.</p>
          </div>

          <div className="about-us-feature">
            <span>💚</span>
            <h3>Greener Living</h3>
            <p>Bring natural beauty into your home.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

