import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import {
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato';
import Homescreen from './Homescreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Loader } from '@kevtucker/rn-components';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
    InterSemibold: Inter_600SemiBold,
    InterBlack: Inter_900Black,
    Lato: Lato_400Regular,
    LatoBold: Lato_700Bold,
    LatoBlack: Lato_900Black,
  });
  if (!fontsLoaded) {
    return (
      <Loader
        blurRadius={3}
        backgroundImage={require('./assets/store.jpg')}
        overlayColor="rgba(0, 0, 0, 0.68)"
        text="Please wait..."
        textColor="rgb(255, 255, 255)"
        indicatorColor="rgb(255, 255, 255)"
        indicatorSize="large"
      />
    );
  }
  return (
    <SafeAreaProvider>
      <Homescreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
