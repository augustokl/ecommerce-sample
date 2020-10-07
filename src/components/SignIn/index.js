import React, { useState } from 'react';
import { useCallback } from 'react';
import { signInWithGoogle } from '../../firebase/firebaseUtils';
import CustomButtom from '../CustomButton';
import FormInput from '../FormInput';

import './styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  }, []);

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>SIgn in iwth your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={e => setEmail(e.target.value)}
          value={email}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={e => setPassword(e.target.value)}
          value={password}
          label="Password"
          required
        />

        <CustomButtom type="submit">Sign in</CustomButtom>
        <CustomButtom onClick={signInWithGoogle}>
          Sign in with google
        </CustomButtom>
      </form>
    </div>
  );
};

export default SignIn;
