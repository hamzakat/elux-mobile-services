import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./routes/MainTab";
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MainTab />
      </PaperProvider>
    </NavigationContainer>
  );
}
