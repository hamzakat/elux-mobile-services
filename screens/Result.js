import { View, Text } from "react-native";
import React from "react";
import { global } from "../styles/global";
import { Button, DataTable } from "react-native-paper";

const Result = ({ navigation, route }) => {
  const goToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={global.result}>
      {typeof route.params.errors === "string" ? (
        // Show error screen
        <Text>Invalid information</Text>
      ) : (
        // Show the received info
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell>ICCID</DataTable.Cell>
            <DataTable.Cell numeric>{route.params["ICCID"]}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Phone Number</DataTable.Cell>
            <DataTable.Cell numeric>
              {route.params["Phone Number"]}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Activation Date</DataTable.Cell>
            <DataTable.Cell numeric>
              {route.params["Activation Date"]}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Registration Date</DataTable.Cell>
            <DataTable.Cell numeric>
              {route.params["Registration Date"]}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Cash Balance</DataTable.Cell>
            <DataTable.Cell numeric>
              {route.params["Cash Balance"]}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Data Balance</DataTable.Cell>
            <DataTable.Cell numeric>
              {route.params["Data Balance"]}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Minutes Balance</DataTable.Cell>
            <DataTable.Cell numeric>
              {route.params["Minutes Balance"]}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Last Top Up Date</DataTable.Cell>
            <DataTable.Cell numeric>
              {route.params["Last Top Up Date"].replace("T", " ")}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Status</DataTable.Cell>
            <DataTable.Cell numeric>
              <Text
                style={{
                  color:
                    route.params["Status"] === "Active" ? "green" : "black",
                  fontWeight: "bold",
                }}
              >
                {route.params["Status"]}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Dormant Date</DataTable.Cell>
            <DataTable.Cell numeric>
              {route.params["Dormant Date"]}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Terminated Date</DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={{ color: "red", fontWeight: "bold" }}>
                {route.params["Terminated Date"]}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      )}

      <Button mode="contained" onPress={goToHome}>
        Back to Home
      </Button>
    </View>
  );
};

export default Result;
