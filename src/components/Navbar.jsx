import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const users = [
    'angrymouse274',
    'whiteostrich844',
    'greenswan545',
    'purpleleopard311',
  ];

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Users
          <ul>
            {/* Mapping on users to generate corresponding links */}
            {users.map((username) => {
              return (
                <li key={username}>
                  <Link to={`/users/${username}`}>{username}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
