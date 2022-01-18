import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { AuthProvider } from './hooks/use-Auth';
import tw from 'tailwind-rn';

export default function App() {
  return (
    <SafeAreaView style={tw('flex-1 justify-center')}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}