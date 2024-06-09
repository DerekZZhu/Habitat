// GoogleSignIn.js
import React, { useEffect } from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import firebase from './firebaseConfig';

const GoogleSignIn = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    // expoClientId: 'YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com',
    iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com',
    webClientId: '497983486268-rlm2rera3752j7fd29apul5i7tc8adrc.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential).then((userCredential) => {
        console.log('User signed in:', userCredential.user);
      }).catch((error) => {
        console.error('Error signing in with Google:', error);
      });
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Sign in with Google"
      onPress={() => {
        promptAsync();
      }}
    />
  );
};

export default GoogleSignIn;
