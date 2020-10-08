import React from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import './styles.scss';

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
