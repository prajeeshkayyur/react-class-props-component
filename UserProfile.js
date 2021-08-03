import React from 'react';

import CurrentUserProfile from './CurrentUserProfile.js';

const UserProfile = props => {
  return (
    <div>
      <CurrentUserProfile currentUser={props.currentUser} />
    </div>
  );
};

export default UserProfile;
