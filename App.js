import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ListaFichas from './src/screens/ListaFichasScreen';
import Dice from './src/screens/DadoScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AlterFicha from './src/screens/AlterFicha'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#BEADFA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="Criador de Ficha" component={ListaFichas} />
      <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#BEADFA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="AlterFicha" component={AlterFicha} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator 
        screenOptions={{
        tabBarActiveTintColor: '#FFF8C9', //cor da tela selecionada
        tabBarInactiveTintColor: 'black', //cor da tela inativa
      	tabBarStyle: {
		      backgroundColor: '#BEADFA', //cor de fundo da tab
          }}}>
      <Tab.Screen name="ListaFichaOutro" 
                  component={MyStack} 
                  options={{
                    headerShown: false,
                    //tabBarStyle: {display: 'none'},
                    tabBarLabel: 'Lista Fichas',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="newspaper-variant" color={color} size={size} />
                    )
                    }}/>
      <Tab.Screen name="Dice" 
                  component={Dice} 
                  options={{headerShown: false, tabBarIcon: ({color, size}) => 
                      <MaterialCommunityIcons name="dice-d20-outline" size={size} color={color}/>}}/>
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
