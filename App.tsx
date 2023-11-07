import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/redux';
import MainScreen from './src/components/mainScreen/MainScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './src/components/detailScreen/DetailScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackVisible: false,
            }}>
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{
                headerTitle: 'Home screen',
              }}
            />
            <Stack.Screen
              name="DetailScreen"
              component={DetailScreen}
              options={{
                headerTitle: 'Detail screen',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
