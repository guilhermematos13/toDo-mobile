import { StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Home } from "./src/screens/Home";
import theme from "./src/theme";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
