import React from 'react';
import { Link } from 'react-router-dom';

function HEAD() {
  return (
    <header>
      <nav>
        <div className='link_nav'>
          <li><Link to="/">Accueil</Link></li>
        </div>
      </nav>
    </header>
  );
}

export default HEAD;
