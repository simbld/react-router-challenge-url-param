import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  // Remplacez ... par le nom d'utilisateur récupéré du paramètre URL
  const { username } = useParams();

  return (
    <div>
      <p>Hello {username} !</p>
    </div>
  );
}

export default User;
