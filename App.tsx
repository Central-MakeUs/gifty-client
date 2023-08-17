/* eslint-disable @typescript-eslint/no-unused-vars */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {HomeScreen} from './src/screens/home';
import {LoginScreen} from './src/screens/login';
import {theme} from './src/styles/theme/theme';

function App(): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const Tab = createBottomTabNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 추가
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {isLoggedIn ? ( // 로그인 상태에 따라 내비게이션을 조건부로 렌더링
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
          ) : (
            <LoginScreen onLogin={() => setIsLoggedIn(true)} /> // 로그인 스크린에 onLogin 함수 전달
          )}
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
