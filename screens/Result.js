import { View, Text } from "react-native";
import React from "react";
import { global } from "../styles/global";
import { Button } from "react-native-paper";

const Result = ({ navigation, route }) => {
  const goToHome = () => {
    navigation.goBack();
    // alternatively use: navigation.pop()
  };

  return (
    <View style={global.container}>
      {/* 
      Todo:
        If vaild result:
          Show the received info
        Else:
          Show error screen
      */}

      <View>
        {/* Todo: print all json content */}
        <Text style={{ color: "#002" }}>{route.params["Dormant Date"]}</Text>
      </View>

      <Button mode="contained" onPress={goToHome}>
        Back to Home
      </Button>
    </View>
  );
};

export default Result;
