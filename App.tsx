/* eslint-disable @typescript-eslint/no-unused-vars */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {HomeScreen} from './src/screens/home';
import {JoinScreen} from './src/screens/join';
import {LoginScreen} from './src/screens/login';
import {theme} from './src/styles/theme/theme';
import {NicknameScreen} from './src/screens/join/Nickname';
import {AgreeScreen} from './src/screens/join/Agree';

function App(): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // TODO 로그인 상태 추가
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {isLoggedIn ? ( // 로그인 상태에 따라 내비게이션을 조건부로 렌더링
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="Login" options={{headerShown: false}}>
                {props => (
                  <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />
                )}
              </Stack.Screen>
              <Stack.Screen
                name="Join"
                component={JoinScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Nickname"
                component={NicknameScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Agree"
                component={AgreeScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
