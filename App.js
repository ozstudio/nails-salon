import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import { GlobalStyles } from './assets/constants/styles';
import {Ionicons,SimpleLineIcons} from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './assets/store/expenses-context';
import ImageGallery from './components/ImageGallery';
import StackN from '../ExpenseApp/components/StackN';
import StackN1 from '../ExpenseApp/components/StackN1';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function TabNav() {
  return (
    <Tab.Navigator >
      <Tab.Screen 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
       name="Home" component={StackNavigator} />


      <Tab.Screen
      options={{
        tabBarLabel: 'Portfolio',
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="user-female" color={color} size={size} />
        ),
      }}
      name="Portfolio" component={ImageGallery} />
    </Tab.Navigator>
  );
}

function StackNavigator(){
    return (<Stack.Navigator
      screenOptions={{
        title:'',
      headerShown:true,
     
    }}>
      <Stack.Screen 
      options={{
        presentation:'modal',
        animation:'slide_from_right'
   }}
      name = 'StackN' 
      component ={StackN} />
      <Stack.Screen
      options={{
        presentation:'modal',
        animation:'slide_from_right'
   }} name = 'StackN1' component ={StackN1} />
    </Stack.Navigator>)

        }


export default function App() {
  return (
    
      <NavigationContainer>
       <TabNav/>
     
      </NavigationContainer>
    
  );
}

