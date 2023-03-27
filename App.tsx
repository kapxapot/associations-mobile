import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemoPlay from './components/DemoPlay';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="DemoPlay" component={DemoPlay} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
