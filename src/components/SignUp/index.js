import React, { useState } from 'react';
import { useCallback } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';

import FormInput from '../FormInput';
import CustonButton from '../CustomButton';

import './styles.scss';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });

        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        history.push('/');
      } catch (error) {
        console.error(error);
      }
    },
    [confirmPassword, displayName, email, history, password]
  );

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your e-mail and password</span>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={event => setDisplayName(event.target.value)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          label="E-mail"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          label="Password"
          required
        />
        <FormInput
          type="passwrod"
          name="confirm-password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          label="Confirm Password"
          required
        />
        <CustonButton type="submit">Sign Up</CustonButton>
      </form>
    </div>
  );
};

export default SignUp;
