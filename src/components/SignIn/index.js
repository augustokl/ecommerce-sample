import React, { useState } from 'react';
import { useCallback } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils';

import CustomButton from '../CustomButton';
import FormInput from '../FormInput';

import './styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      try {
        await auth.signInWithEmailAndPassword(email, password);

        setEmail('');
        setPassword('');
      } catch (error) {
        console.error(error);
      }
    },
    [email, password]
  );

  const handleGoogleLogin = useCallback(async () => {
    await signInWithGoogle();
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

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={handleGoogleLogin}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
