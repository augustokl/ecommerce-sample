import React from 'react';

import './styles.scss';

const CustonButton = ({ children, isGoogleSignIn, ...props }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in ' : ''}custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustonButton;
