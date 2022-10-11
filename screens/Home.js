// import TextInputMask from "react-native-text-input-mask";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import {
  Button,
  TextInput,
  Text,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { global } from "../styles/global";
import { useFormik, Formik } from "formik";
import logo from "../assets/elux-logo.png";
import * as Yup from "yup";
import { Keyboard } from "react-native";

// Validation schema that will be used in the Formik form
const InformationSchema = Yup.object().shape({
  idNum: Yup.string().required("ID number is required"),
  phoneNum: Yup.string()
    .matches(new RegExp("[0-9]{9}"), "Please enter a valid phone number")
    .required("Phone number is required"),
});

const Home = ({ navigation }) => {
  const [idNum, setIdNum] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const submitInfo = (values) => {
    Keyboard.dismiss();

    const fullPhoneNum = "352" + values.phoneNum;
    setLoading(true);

    const payload = JSON.stringify({
      id: values.idNum,
      phone: fullPhoneNum,
    });

    console.log("this is the payload", payload);

    fetch("https://elux-api.herokuapp.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })
      .then((result) => result.json())
      .then((resultJson) => {
        console.log(resultJson);

        setResult(resultJson);
        navigation.navigate("Result", resultJson);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={global.container}>
        <View style={global.logoContainer}>
          <Image source={logo} />
        </View>

        <Formik
          initialValues={{ idNum: "", phoneNum: "" }}
          onSubmit={(values) => submitInfo(values)}
          validationSchema={InformationSchema}
        >
          {({
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            handleReset,
            setFieldValue,
          }) => (
            <View>
              {/* ID Number */}
              <TextInput
                onChangeText={(value) => {
                  setFieldValue("idNum", value);
                }}
                onBlur={handleBlur("idNum")}
                value={values.idNum}
                mode="outlined"
                keyboardType="number-pad"
                placeholder="ID Number"
                label="ID Number"
              />
              {errors.idNum && touched.idNum ? (
                <Text>{errors.idNum}</Text>
              ) : null}

              {/* Phone Number */}
              <TextInput
                onChangeText={(value) => setFieldValue("phoneNum", value)}
                onBlur={handleBlur("phoneNum")}
                value={values.phoneNum}
                mode="outlined"
                keyboardType="phone-pad"
                left={<TextInput.Affix text="+352" />}
                label="Phone Number"
                placeholder="123456789"
              />
              {errors.phoneNum && touched.phoneNum ? (
                <Text>{errors.phoneNum}</Text>
              ) : null}

              {/* Submit Button */}
              <Button
                mode="contained"
                style={global.button}
                onPress={handleSubmit}
              >
                Submit
              </Button>

              {/* Reset Button */}
              <Button
                mode="outlined"
                style={global.button}
                onPress={handleReset}
              >
                Reset
              </Button>
            </View>
          )}
        </Formik>
        {loading ? (
          <ActivityIndicator
            style={global.spinner}
            size="large"
            animating={true}
            color={Colors.red700}
          />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
