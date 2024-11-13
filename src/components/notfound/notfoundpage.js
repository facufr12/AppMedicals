import React from 'react';
import './notfound.css';

const NotfoundPage = () => {
    return (
      <div className="notfound-container">
        <div className="error-message">
          <h1>¡404!</h1>
          <p>La página que buscas no existe.</p>
        </div>
      </div>
    );
  }

export default NotfoundPage;
