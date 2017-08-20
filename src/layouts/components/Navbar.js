import React from 'react';
import Link from 'gatsby-link';

export default function Navbar(props) {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #fff, #e3f7ff)',
        boxShadow: '0 2px 18px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zindex: 2,
        display: 'flex',
        alignItems: 'center',
        height: 70
      }}
    >
      <Link to="/" style={{}}>
        chrisvoll
      </Link>
    </div>
  );
}
