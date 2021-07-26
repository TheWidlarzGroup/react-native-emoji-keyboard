import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Examples from './Examples/Examples';
import Basic from './Basic/Basic';
import Dark from './Dark/Dark';
import Translated from './Translated/Translated';
import DisabledCategories from './DisabledCategories/DisabledCategories';
import StaticModal from './StaticModal/StaticModal';
import Static from './Static/Static';

const Stack = createStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Examples" component={Examples} />
        <Stack.Screen name="Basic" component={Basic} />
        <Stack.Screen name="Dark" component={Dark} />
        <Stack.Screen name="Translated" component={Translated} />
        <Stack.Screen
          name="DisabledCategories"
          component={DisabledCategories}
        />
        <Stack.Screen name="StaticModal" component={StaticModal} />
        <Stack.Screen name="Static" component={Static} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
