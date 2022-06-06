import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MainStack from "./MainStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DefaultTheme } from "react-native-paper";

const MainTab = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator barStyle={{ backgroundColor: DefaultTheme.colors.primary }}>
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
