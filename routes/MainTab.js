import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../App";
import MainStack from "./MainStack";

const MainTab = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator barStyle={{ backgroundColor: theme.colors.primary }}>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={MainStack}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
