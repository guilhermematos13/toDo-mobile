import { ActivityIndicator, StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Home } from "./src/screens/Home";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Home /> : <ActivityIndicator />}
      </ThemeProvider>
    </View>
  );
}
