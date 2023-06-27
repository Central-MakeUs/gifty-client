import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {HomeScreen} from './src/screens/home';
import {theme} from './src/styles/theme/theme';

function App(): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const Stack = createStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
