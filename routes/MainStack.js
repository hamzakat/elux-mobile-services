import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Result from "../screens/Result";

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

export default MainStack;
