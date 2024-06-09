import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Pressable, Keyboard, Touchable, TouchableWithoutFeedback } from 'react-native';
import { initializeApp } from '@firebase/app';
import Svg, { G, Path, Ellipse, Defs, ClipPath } from "react-native-svg";  
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { getFirestore, setDoc, doc } from '@firebase/firestore';

const firebaseConfig = {     
  apiKey: "AIzaSyDOjuKJwdB3Xye8gvrX3ghdzIKSma8kCdM",
  authDomain: "habitat-9f1ab.firebaseapp.com",
  projectId: "habitat-9f1ab",
  storageBucket: "habitat-9f1ab.appspot.com",
  messagingSenderId: "497983486268",
  appId: "1:497983486268:web:8df0c6543fe02e9443c639",
  measurementId: "G-H31Q7QJM4E"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, isFormValid, errors, username, setUsername,}) => {
  return ( 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
    <View className='flex flex-col items-center h-screen bg-[#FFFFFF] p-8'>    
      <Text className='text-2xl italic tracking-tighter font-bold text-[#344E41] mt-16 mx-auto'>Welcome to</Text>
      <Text className='text-6xl italic -tracking-[1.5em] font-bold text-[#344E41] mx-auto'>Habitat</Text>           
       <Text className='text-2xl italic tracking-tighter font-bold text-[#344E41] mx-auto mb-6 -mt-2'>Start Your Journey</Text>    
       <Text className='text-lg tracking-tighter font-bold text-[#344E41] mt-2 mr-auto text-left'>Email Address</Text>
       <TextInput
        className='w-full h-12 border border-[#D2D5DA] shadow rounded-lg px-4 mt-2  text-black'
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        selectionColor={'#344E41'} 
        autoCapitalize="none"
        
      />
      <Text className='text-lg tracking-tighter font-bold text-[#344E41] mt-2 mr-auto text-left'>Password</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <TextInput
        className='w-full h-12 border border-[#D2D5DA] shadow rounded-lg px-4 mt-2  text-black'
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        selectionColor={'#344E41'}
        secureTextEntry={true}
      />

      </TouchableWithoutFeedback>
        {!isLogin && (
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        />
      )}

      <Text className='text-sm text-red-500 mt-2'>{errors.email}</Text>    
      <Pressable className={`w-full h-12 bg-[#344E41] shadow rounded-lg mt-4 flex items-center justify-center ${isFormValid ? 'bg-[#344E41] ' : 'bg-[#344E41]/80'}`} onPress={handleAuthentication} disabled={!isFormValid}> 
        <Text onPress={handleAuthentication} className='text-white'>{isLogin ? 'Sign In' : 'Sign Up'}</Text>  
      </Pressable>

      <View>
        <Text onPress={() => setIsLogin(!isLogin)} className='text-lg tracking-tighter font-bold text-[#344E41] mt-2 mr-auto text-left cursor-pointer'>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text> 
      </View>
      <Svg
      className='absolute bottom-0 right-0 z-0 mt-24'
      width={393}
      height={268}
      viewBox="0 0 393 268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_1429_626)">
        <Path fill="#fff" d="M0 0H393V268H0z" /> 
        <G filter="url(#filter0_d_1429_626)">
          <Ellipse
            cx={135.375}
            cy={282.225}
            rx={340.031}
            ry={237.421}
            transform="rotate(27.655 135.375 282.225)"
            fill="#344E41"
          />
        </G>
        <G filter="url(#filter1_d_1429_626)">
          <Ellipse
            cx={134.431}
            cy={310.236}
            rx={340.031}
            ry={237.421}
            transform="rotate(27.655 134.431 310.236)"
            fill="#3A5A4B"
          />
        </G>
        <G filter="url(#filter2_d_1429_626)">
          <Ellipse
            cx={137.026}
            cy={339.841}
            rx={340.031}
            ry={237.967}
            transform="rotate(27.655 137.026 339.841)"
            fill="#578163"
          />
        </G>
        <G filter="url(#filter3_d_1429_626)">
          <Ellipse
            cx={127.836}
            cy={370.518}
            rx={340.031}
            ry={237.421}
            transform="rotate(27.655 127.836 370.518)"
            fill="#8AB197"
          />
        </G>
        <G filter="url(#filter4_d_1429_626)">
          <Ellipse
            cx={113.627}
            cy={403.436}
            rx={340.031}
            ry={237.421}
            transform="rotate(27.655 113.627 403.436)"
            fill="#fff"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1429_626">
          <Path fill="#fff" d="M0 0H393V268H0z" />
        </ClipPath>
      </Defs>
    </Svg>     
    </View>
    </TouchableWithoutFeedback>
  );      
}

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (
    <View >
      <Text>Welcome</Text>
      <Text>{user.email}</Text>
      <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
    </View>
  );
};

export default App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {   
    validateForm(); 
  }, [email, password]); 

  const validateForm = () => {
    const errors = {};
    const empty = {};
    if (email.length === 0) {
      empty.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {      
      errors.email = 'Email address is invalid';
    }
    if (password.length === 0) {
      empty.password = 'Password is required';
    } else if (password.length < 6) {   
      errors.password = 'Password must be at least 6 characters';
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0 && Object.keys(empty).length === 0);
  }

  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
          const userId = userCredential.user.uid;
          await set(ref(db, 'users/' + userId), {
            username: username,
            email: email,
            habits: [],
            friends: [],
            daily_streaks: 0
          });
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <View>
      
      {user ? (
        // Show user's email if user is authenticated
        <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
      ) : (
        // Show sign-in or sign-up form if user is not authenticated
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
          isFormValid={isFormValid}
          errors={errors}
        />
      )}
    </View>   
  );
}
