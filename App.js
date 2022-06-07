import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./routes/MainTab";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#164A9C",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <MainTab />
      </PaperProvider>
    </NavigationContainer>
  );
}
