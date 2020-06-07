import 'react-native-gesture-handler';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AuthContext from './AuthContext';

// logged out
import Login from './screens/Login';
import Register from './screens/Register';

// logged in
import Home from './screens/Home';
import Profile from './screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  console.log('State', state);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('token');
        console.log(userToken);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        try {
          const response = await fetch('http://10.0.2.2:3000/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          if (response.ok) {
            const data = await response.json();
            await AsyncStorage.setItem('token', data.token);
            dispatch({type: 'SIGN_IN', token: data.token});
          }
        } catch (error) {
          console.log(error);
        }
      },
      signOut: async () => {
        //remove token from async storage
        await AsyncStorage.removeItem('token');
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async (username, email, password) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        // dispatch({type: 'SIGN_IN', token: data.token});
      },
      userToken: state.userToken,
    }),
    [state.userToken],
  );

  if (state.isLoading) {
    //display splash
  }

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        {!state.userToken ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        )}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

export default App;
