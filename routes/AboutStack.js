import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const AboutStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default AboutStack;
