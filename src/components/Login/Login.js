
// src/components/Login.js
import React from 'react';
import firebase from '../../firebaseConfig.js';

const Login = () => {
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      console.log('Logged in with Google');
    } catch (error) {
      console.error('Error logging in with Google', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Other login form fields */}
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
