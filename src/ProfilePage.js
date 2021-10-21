import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const user = useSelector(state => state[0].login);
  return (
    <div>
      <h1>Welcome, {user}!</h1>
    </div>
  )
}

export default ProfilePage;
