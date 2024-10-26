// src/components/OptionsPage.tsx
import React from 'react';
import './OptionsPage.css';

const options = [
  "שפה",
  "יציאה בשאלה",
  "מתמטיקה",
  "היסטוריה",
  "אנגלית",
  "ביולוגיה",
  "עברית",
  "מוזיקה",
  "מדעי המחשב",
  "אחר"
];

const OptionsPage: React.FC = () => {
  return (
    <div className="options-page">
      <header className="header">מסך הרשמה - מנטי</header>
      <h2 className="title">במה נוכל לעזור?</h2>
      <p className="subtitle">ניתן לבחור בכמה אופציות</p>
      <div className="options">
        {options.map(option => (
          <button key={option} className="option-button">
            {option}
          </button>
        ))}
      </div>
      <div className="footer-buttons">
        <button className="back-button">חזרה</button>
        <button className="next-button">הבא</button>
      </div>
    </div>
  );
};

export default OptionsPage;
