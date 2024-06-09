import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Pressable, Keyboard, Touchable, TouchableWithoutFeedback, } from 'react-native';
import { initializeApp } from '@firebase/app';
import Svg, { G, Path, Ellipse, Defs, ClipPath } from "react-native-svg";  
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { getFirestore, setDoc, doc } from '@firebase/firestore';
import { Menu, Flower, Leaf, Group, GroupIcon, Users, Settings, Flame, PlusCircle, Sprout, UserPlus, EllipsisVertical } from 'lucide-react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { getDatabase, ref, set, get, child } from '@firebase/database';
import './sheets.tsx'; 

import { SheetManager } from 'react-native-actions-sheet';
import { SheetProvider } from 'react-native-actions-sheet'; 
import ActionSheet from 'react-native-actions-sheet';
import { StatusBar } from 'expo-status-bar';  
  
// import GoogleAuth from "./GoogleAuth.tsx"
import {Canvas, useFrame} from '@react-three/fiber';
import axios from 'axios';


// const firebaseConfig = {
//   apiKey: 'AIzaSyDOjuKJwdB3Xye8gvrX3ghdzIKSma8kCdM',
//   authDomain: 'habitat-9f1ab.firebaseapp.com',
//   projectId: 'habitat-9f1ab',
//   storageBucket: 'habitat-9f1ab.appspot.com',
//   messagingSenderId: '497983486268',
//   appId: '1:497983486268:web:8df0c6543fe02e9443c639',
//   measurementId: 'G-H31Q7QJM4E',
// };

const Tab = createBottomTabNavigator();

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

const AuthScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
  isFormValid,
  errors,
  username,
  setUsername,
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex flex-col items-center h-screen bg-[#FFFFFF] p-8">
        <Text className="text-2xl italic tracking-tighter font-bold text-[#344E41] mt-16 mx-auto">
          Welcome to
        </Text>
        <Text className="text-6xl italic -tracking-[1.5em] font-bold text-[#344E41] mx-auto">
          Habitat
        </Text>
        <Text className="text-2xl italic tracking-tighter font-bold text-[#344E41] mx-auto mb-6 -mt-2">
          Start Your Journey
        </Text>
        <View className="relative z-20 w-full h-full">
          <Text className="text-lg tracking-tighter font-bold text-[#344E41] mt-2 mr-auto text-left">
            Email Address
          </Text>
          <TextInput
            className="w-full h-12 border border-[#D2D5DA] shadow rounded-lg px-4 mt-2  text-black"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            selectionColor={'#344E41'}
            autoCapitalize="none"
          />
          {!isLogin && (
            <>
              <Text className="text-lg tracking-tighter font-bold text-[#344E41] mt-2 mr-auto text-left">
                Username
              </Text>
              <TextInput
                className="w-full h-12 border border-[#D2D5DA] shadow rounded-lg px-4 mt-2  text-black"
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                selectionColor={'#344E41'}
                autoCapitalize="none"
              />
            </>
          )}
          <Text className="text-lg tracking-tighter font-bold text-[#344E41] mt-2 mr-auto text-left">
            Password
          </Text>
          <TextInput
            className="w-full h-12 border border-[#D2D5DA] shadow rounded-lg px-4 mt-2  text-black"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            selectionColor={'#344E41'}
            secureTextEntry={true}
          />

          <Text className="text-sm text-red-500 mt-2">{errors.email}</Text>
          <Pressable
            className={`w-full h-12 bg-[#344E41] shadow rounded-lg mt-4 flex items-center justify-center ${
              isFormValid ? 'bg-[#344E41] ' : 'bg-[#344E41]/80'
            }`}
            onPress={handleAuthentication}
            disabled={!isFormValid}>
            <Text className="text-white">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Text>
          </Pressable>

          {/* <GoogleAuth/> */}
          <View className="mx-auto">
            <Text
              onPress={() => setIsLogin(!isLogin)}
              className="text-lg tracking-tighter font-bold text-[#344E41] mt-2 mr-auto text-left cursor-pointer">
              {isLogin
                ? 'Need an account? Sign Up'
                : 'Already have an account? Sign In'}
            </Text>
          </View>
        </View>

        
      <Svg 
      className='absolute -bottom-16 right-0 z-0' 
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
};

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

const Friends = () => {

  // use real user data

  const user = {
    email: '123@g.co',
    username: 'testuser',
    habits: [{
      name: 'Exercise',
      description: 'Go for a run',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 3,
      frequency: 'Daily',
      completed: false,
      isPrivate: false,
      
    }, {
      name: 'Sleep 8 Hours',
      description: 'Get a good night sleep every night',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 2,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    }, {
      name: 'Less Screen Time',
      description: 'Get less than 3 hours of screen time', 
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 2,
      streak: 2,
      frequency: 'Daily',
      completed: false,
      isPrivate: false
    },{
      name: 'Drink Water',
      description: 'Drink 8 cups of water a day',
      dayCreated: '2024-05-01', 
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 3,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    },{ 
      name: 'Read',
      description: 'Read a chapter of a book',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 5,
      streak: 5,
      frequency: 'Daily',
      completed: false,
      isPrivate: false
    }, {
      name: 'Meditate',
      description: 'Meditate for 10 minutes',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 5,
      streak: 5,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    }, { 
      name: 'No More Gooning',
      description: 'Stop the gooning',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 0,
      streak: 0,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    },],
    friends: [
      {
        username: 'testuser1',
        daily_streaks: 1,
      },
      {
        username: 'testuser2',
        daily_streaks: 4,
      },
      {
        username: 'testuser3',
        daily_streaks: 2,
      }],
  }; 

  return (
    <View className='h-screen bg-[#FFFFFF] p-4 relative'> 
      <View className='flex flex-row items-center justify-between w-full mt-10 p-4 '>  
      <Text className='text-4xl italic -tracking-[1.5em] font-bold text-[#344E41] text-left'>Friends</Text>  
      <View className='flex flex-row items-center justify-between -mr-2'>     
        <Pressable className='flex flex-row items-center justify-center m-1'>
          {/* Need to add either modal or new page to add friends. Modal would be easier */}
          <UserPlus className='text-[#344E41]' strokeWidth={2} size={32} /> 
        </Pressable> 
      </View>           
    </View>  

    {user.friends.length === 0 ? <View className='w-full bg-neutral-100 border-dashed border border-neutral-200/80 rounded-lg mt-4 p-4 flex items-center justify-center'>
      <Text className='text-[#344E41] text-center'>You currently have 0 friends. Add some friends to see their daily streaks and public habits.</Text>

    </View> : <>
    <Text className='text-base -tracking-[0.6em] font-medium text-[#3A5A4B] mx-2 mt-2 text-center'>View your friends' daily streaks and public habits!</Text>
    <View className='flex flex-col items-center justify-center mt-2'>
    {user.friends.map((friend, index) => ( 
      <Pressable key={friend.username} className='flex flex-row w-full mt-3 bg-neutral-100/30 border border-neutral-200/90 rounded-xl p-3 shadow-xs ' onPress={() => SheetManager.show('friend-sheet', {
        payload: { username: friend.username, daily_streaks: friend.daily_streaks }})}>
        <View className='flex flex-row justify-between w-full'>
          <View className='flex flex-col justify-between '>
            <View className='flex flex-row items-center justify-between w-full'>
              <Text className='text-2xl -tracking-[1.0em] font-bold text-[#344E41] text-left italic mb-2'>{friend.username}</Text>
              <EllipsisVertical className='text-[#344E41]' strokeWidth={2} size={24} /> 
            </View>
            <Text className='text-base -tracking-[0.6em] font-medium text-[#3A5A4B] text-left'>Your friend has {friend.daily_streaks} daily streaks</Text>
          </View>
        </View>
      </Pressable>
    ))}
    </View>   
  </>} 
  </View>
 
  );
}
  
const HomeScreen = () => {  
  return (
    
    <View className='h-screen bg-[#FFFFFF] relative'>       
      <View className='flex flex-row items-center justify-between w-full mt-10 p-8 pb-4 '>
        <Text className='text-4xl italic -tracking-[1.5em] font-bold text-[#344E41] text-left'>Habitat</Text>  
        <View className='flex flex-row items-center justify-between -mr-2'>     
          <Pressable className='flex flex-row items-center justify-center m-1' onPress={() => SheetManager.show('settings-sheet')}>
            <Settings className='text-[#344E41]' strokeWidth={2} size={32} />
          </Pressable> 
        </View>           
      </View>   
      <ScrollView className='bg-[#FFFFFF]' contentContainerStyle={{ flexGrow: 1 }}>

        {/* // Garden Space */}
         {/* <View className="flex flex-col h-screen bg-[#FFFFFF] p-8 relative">
          <View className="flex flex-row items-center justify-between w-full mt-10 ">
            <Text className="text-4xl italic -tracking-[1.5em] font-bold text-[#344E41] text-left">
              Habitat
            </Text>
            <Menu className="text-[#344E41]" strokeWidth={2} size={32} />
          </View>
          <Canvas>
            <ambientLight />
            <Box position={[1.2, 0, 0]} /> 
          </Canvas>
        </View>   */}
  
      </ScrollView> 
      <Pressable className='flex flex-row items-center justify-center m-1' onPress={() => SheetManager.show('habit-create-sheet')}>
          <View className='p-4 absolute z-40 bottom-[78px] right-0  '>
            <View className='bg-[#344E41] flex flex-row items-center w-fit rounded-full aspect-square h-14 justify-center '> 
              <Sprout className='text-white mx-2' strokeWidth={1.8} size={32} />     
            </View>     
          </View> 
        </Pressable> 
    </View>
  ); 
}; 


const Habits = () => { 

  const [selectedHabits, setSelectedHabits] = useState(['']);

  // update with real user functions

  const user = {
    email: '123@g.co',
    username: 'testuser',
    habits: [{
      name: 'Exercise',
      description: 'Go for a run',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 3,
      frequency: 'Daily',
      completed: false,
      isPrivate: false,
      
    }, {
      name: 'Sleep 8 Hours',
      description: 'Get a good night sleep every night',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 2,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    }, {
      name: 'Less Screen Time',
      description: 'Get less than 3 hours of screen time', 
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 2,
      streak: 2,
      frequency: 'Daily',
      completed: false,
      isPrivate: false
    },{
      name: 'Drink Water',
      description: 'Drink 8 cups of water a day',
      dayCreated: '2024-05-01', 
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 3,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    },{ 
      name: 'Read',
      description: 'Read a chapter of a book',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 5,
      streak: 5,
      frequency: 'Daily',
      completed: false,
      isPrivate: false
    }, {
      name: 'Meditate',
      description: 'Meditate for 10 minutes',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 5,
      streak: 5,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    }, { 
      name: 'No More Gooning',
      description: 'Stop the gooning',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 0,
      streak: 0,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    },],
    friends: [],
    daily_streaks: 0
  }; 


  const toggleHabitSelection = (habitName) => {
    setSelectedHabits((prevSelectedHabits) =>
      prevSelectedHabits.includes(habitName)
        ? prevSelectedHabits.filter((name) => name !== habitName)
        : [...prevSelectedHabits,habitName]
    );
  };

  const commitHabits = () => {
    console.log('habits completed:', selectedHabits);
    user.habits = user.habits.map(habit => {
      if (selectedHabits.includes(habit.name)) {
        return {...habit, completed: true };
      }
      return habit;  
    });
    setSelectedHabits([]);
  };

  
  return (
    <View>
      <View className="flex flex-row items-center justify-between w-full pt-8 px-8 pb-2 sticky bg-white">
        <Text className="text-4xl italic -tracking-[1.5em] font-bold text-[#344E41] text-left mt-10">Habits</Text>
        <Pressable className='flex flex-row items-center justify-center mt-10' onPress={() => SheetManager.show('settings-sheet')}>
          <Settings className='text-[#344E41] -mr-1' strokeWidth={2} size={32} />  
        </Pressable> 
      </View>  
      <ScrollView className="bg-[#FFFFFF] p-4 relative"  contentContainerStyle={{ flexGrow: 1 }}>
        <Text className="text-2xl italic -tracking-[1.0em] font-bold text-[#344E41] text-left mt-2 mx-2">
          Tasks left to complete
        </Text>
        <Text className="text-base -tracking-[0.6em] mb-2 font-medium text-[#3A5A4B] text-left mx-2">
          Check them off by clicking the habit! Long press to view more details. Don't forget to commit your changes below.
        </Text> 
        {user.habits
          .filter(habit => !habit.completed)
          .map((habit) => (
            <Pressable
              key={habit.name}
              onPress={() => toggleHabitSelection(habit.name)}
              onLongPress={() =>
                SheetManager.show('habit-sheet', {
                  payload: {
                    name: habit.name,
                    description: habit.description,
                    dayCreated: habit.dayCreated,
                    totalDaysSinceCreation: habit.totalDaysSinceCreation,
                    daysWatered: habit.daysWatered,
                    streak: habit.streak,
                    frequency: habit.frequency,
                    completed: habit.completed,
                    isPrivate: habit.isPrivate,
                  },
                })
              }
              className={  
                selectedHabits.includes(habit.name)
                  ? 'flex flex-row w-full mt-3 bg-[#344E41]/20 border border-[#344E41]/30 transition-all rounded-xl p-3 shadow-xs'
                  : 'flex flex-row w-full mt-3 bg-neutral-100/30 border border-neutral-200/90 transition-all rounded-xl p-3 shadow-xs'
              }
            >
              <View className="flex flex-row justify-between w-full">
                <View className="flex flex-col justify-between">
                  <View className="flex flex-row items-center justify-between w-full">
                    <Text className="text-2xl -tracking-[1.0em] font-bold text-[#344E41] text-left italic mb-2">
                      {habit.name}
                    </Text>
                    <View className="flex flex-row items-center justify-between relative">
                      <Leaf
                        fill={habit.streak > 0 ? '#344E41' : '#DADADA'}
                        className={habit.streak > 0 ? 'text-[#344E41] fill-[#344E41] -mt-2' : 'text-neutral-300 fill-neutral-300 -mt-2'}
                        strokeWidth={2}
                        size={20}
                      />
                      <Text
                        className={
                          habit.streak > 0
                            ? 'text-sm -tracking-[0.6em] font-bold text-[#344E41] text-left italic mb-2'
                            : 'text-sm -tracking-[0.6em] font-bold text-left italic mb-2 text-neutral-600'
                        }
                      >
                        {habit.streak} Streak
                      </Text>
                    </View>
                  </View>
                  <Text className="text-base -tracking-[0.6em] font-medium text-[#3A5A4B] text-left">{habit.description}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        <Button title="Commit" onPress={commitHabits} />
        <View className="flex flex-row items-center justify-between mb-36" />
      </ScrollView>
    </View>
  );
};    

const AuthenticatedScreen = ({user, handleAuthentication}) => {
  return ( 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className='h-screen'>        
        <Tab.Navigator className='w-full h-12 bg-[#344E41] shadow rounded-lg mt-4 flex items-center justify-center' screenOptions={{headerShown: false}}> 
          <Tab.Screen name="Garden" component={HomeScreen} options={{ tabBarLabel: 'Garden', tabBarIcon: ({ color, size }) => (<Flower color={color} strokeWidth={2} size={size} />), tabBarActiveTintColor: '#344E41',  tabBarInactiveTintColor: '#8E8E8F' }} />
          <Tab.Screen name="Habits" initialParams={user} component={Habits} options={{ tabBarLabel: 'Habits', tabBarIcon: ({ color, size }) => (<Leaf color={color} strokeWidth={2} size={size} />), tabBarActiveTintColor: '#344E41',  tabBarInactiveTintColor: '#8E8E8F' }} />
          <Tab.Screen name="Friends" component={Friends} options={{ tabBarLabel: 'Friends', tabBarIcon: ({ color, size }) => (<Users color={color} strokeWidth={2} size={size} />), tabBarActiveTintColor: '#344E41',  tabBarInactiveTintColor: '#8E8E8F' }} />
        </Tab.Navigator>   
      </View> 
    </TouchableWithoutFeedback>
  );
};

export default App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  // const auth = getAuth(app);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, user => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, [auth]);

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
    setIsFormValid(
      Object.keys(errors).length === 0 && Object.keys(empty).length === 0,
    );
  };

  const handleAuthentication = async () => {
    try {
      if (user) {
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        if (isLogin) {
          // login logic
          const response = await axios.post('http://127.0.0.1:8000/auth/login', {
            email: email,
            password: password
          });
          if (response.data) {
            console.log('User signed in successfully!');
          }
        } else {
          // register logic
          const response = await axios.post('http://127.0.0.1:8000/auth/register', {
            username: username,
            email: email,
            password: password
          });
  
          if (response.data) {
            console.log('User created successfully!');
          }
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const tempUser = {
    email: '123@g.co',
    username: 'testuser',
    habits: [{
      name: 'Exercise',
      description: 'Go for a run',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 3,
      frequency: 'Daily',
      completed: false,
      isPrivate: false,
      
    }, {
      name: 'Sleep 8 Hours',
      description: 'Get a good night sleep every night',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 2,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    }, {
      name: 'Less Screen Time',
      description: 'Get less than 3 hours of screen time', 
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 2,
      streak: 2,
      frequency: 'Daily',
      completed: false,
      isPrivate: false
    },{
      name: 'Drink Water',
      description: 'Drink 8 cups of water a day',
      dayCreated: '2024-05-01', 
      totalDaysSinceCreation: 5,
      daysWatered: 3,
      streak: 3,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    },{ 
      name: 'Read',
      description: 'Read a chapter of a book',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 5,
      streak: 5,
      frequency: 'Daily',
      completed: false,
      isPrivate: false
    }, {
      name: 'Meditate',
      description: 'Meditate for 10 minutes',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 5,
      streak: 5,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    }, { 
      name: 'No More Gooning',
      description: 'Stop the gooning',
      dayCreated: '2024-05-01',
      totalDaysSinceCreation: 5,
      daysWatered: 0,
      streak: 0,
      frequency: 'Daily',
      completed: false,
      isPrivate: true
    },],
    friends: [],
    daily_streaks: 0
  }; 


  return (
  <SheetProvider>
    <NavigationContainer>
      <StatusBar style="dark" />
      {!user ? (
        // Show user's email if user is authenticated
        <AuthenticatedScreen
          user={tempUser} 
          handleAuthentication={handleAuthentication}
        />
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
    </NavigationContainer>
  </SheetProvider>
  );
};
