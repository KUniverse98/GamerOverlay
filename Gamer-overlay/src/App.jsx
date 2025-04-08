import React, { useState } from 'react';
import './App.css';

const GamerCard = () => {
  const [showLevelPopup, setShowLevelPopup] = useState(false);

  const [particles, setParticles] = useState([]);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);


  const gainXp = () => {
    let newXp = xp + 20;
    let newLevel = level;

    if (newXp >= 100) {
      newXp -= 100;
      newLevel += 1;
      setLevel(newLevel);
    if(newLevel % 5 === 0) {
      setShowLevelPopup(true);

      setTimeout(() => {
        setShowLevelPopup(false);
      }, 2000);
    }

    }

    setXp(newXp);

    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 80 - 40,
      y: Math.random() * 60 - 30,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.slice(newParticles.length));
    }, 800);
  };

  const xpPercent = `${(xp / 100) * 100}%`;

  return (
    <div className="gamer-card">
      <h1 className="username">KidUniverse#98</h1>

      {/* XP BAR */}
      <div className="xp-bar">
        <div className="xp-fill" style={{ width: xpPercent }}></div>

        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              top:"50%",
              left:"50%",
              transform: `translate(calc(-50% + ${particle.x}px), ${particle.y}px)`,
            }}            
          ></span>
        ))}
      </div>

      <p className="level-display">Level: {level}</p>

      {/* Avatar */}
      <div className="avatar-container">
        <img src="/pfp.png" alt="avatar" className="avatar" />
      </div>

      <button onClick={gainXp} className="xp-button">
        Gain XP
      </button>

      {/* Achievements */}
        {showLevelPopup && (
          <div className="level-overlay">
            <div className="level-popup">
              <h2 clssName="popup-alert">ATTENTION!!!</h2>
              <p clasName="popup-success">YOU'VE LEVEL UP!!</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default GamerCard;
