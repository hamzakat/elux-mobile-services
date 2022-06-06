// import TextInputMask from "react-native-text-input-mask";
import { View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { global } from "../styles/global";
import { StyleSheet } from "react-native";

const Home = () => {
  const [idNum, setIdNum] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  return (
    <View style={global.container}>
      <TextInput
        mode="outlined"
        label="ID Number"
        value={idNum}
        onChangeText={(text) => setIdNum(text)}
      />
      <TextInput
        mode="outlined"
        label="Phone Number"
        value={phoneNum}
        onChangeText={(text) => setPhoneNum(text)}
        // Implement the mask later for checking the input sanity
        // render={(props) => (
        //   <TextInputMask {...props} mask="+[00] [000] [000] [000]" />
        // )}
      />
      <Button mode="contained" style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});

export default Home;
