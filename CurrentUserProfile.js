import React from 'react';

const CurrentUserProfile = props => {
  return (
    <div>
      <div>Hello {props.currentUser}</div>
    </div>
  );
};

export default CurrentUserProfile;
