import { Layout, Card } from 'rn-components';
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
    InterSemibold: Inter_600SemiBold,
    InterBlack: Inter_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Layout isSafeArea backgroundColor="hsl(0, 0.70%, 71.60%)" isCenter>
      <Card
        buttonEnabled
        buttonText="Click Me"
        buttonOnPress={() => {
          console.log('Button Pressed');
        }}
        titleFontSize={20}
        descriptionFontFamily="Inter"
        titleFontFamily="InterBlack"
        width={`95%`}
        description="This is a card component that can be used to display information in a structured way. It can contain a title, description, and an image."
        title="Your Account"
      />
    </Layout>
  );
}
