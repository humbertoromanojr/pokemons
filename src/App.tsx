import * as React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import ItemPokemonScreen from './screens/ItemPokemon/';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#ee4035" />
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}} />
                <Stack.Screen
                    name="ItemPokemon"
                    component={ItemPokemonScreen}
                    options={{
                        title: 'Details and skills',
                        headerTintColor: '#fff',
                        headerStyle: { backgroundColor: '#ee4035' },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
