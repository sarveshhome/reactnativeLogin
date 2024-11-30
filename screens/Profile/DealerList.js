import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const DealerList = () => {
  // Sample data based on the screenshot
  const dealers = [
    {
      sapCode: "CC20231",
      name: "ABC Gas Service",
      type: "Proprietor",
      partners: "1",
      address: "SAJOUR, BHAGALPUR",
      contact1: "9379528845",
      contact2: "",
      active: true,
      state: "Bihar",
      district: "Bhagalpur",
      memberCode: "AIBDA10231029",
    },
    {
      sapCode: "CC234543",
      name: "rest gas agency",
      type: "Proprietor",
      partners: "1",
      address: "bhagalpur",
      contact1: "94578652856",
      contact2: "",
      active: false,
      state: "Bihar",
      district: "Bhagalpur",
      memberCode: "AIBDA10231147",
    },
    {
      sapCode: "CC736377",
      name: "test gas agency",
      type: "Proprietor",
      partners: "1",
      address: "bhagalpur",
      contact1: "9854732586",
      contact2: "",
      active: false,
      state: "Bihar",
      district: "Bhagalpur",
      memberCode: "AIBDA10231148",
    },
    {
      sapCode: "CC111111",
      name: "Test1 Gas Agency",
      type: "Proprietor",
      partners: "1",
      address: "Nathnagar",
      contact1: "9546385856",
      contact2: "",
      active: true,
      state: "Bihar",
      district: "Bhagalpur",
      memberCode: "AIBDA10231149",
    },
  ];

  // Render a single card
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subTitle}>
        SAP Code: <Text style={styles.value}>{item.sapCode}</Text>
      </Text>
      <Text style={styles.subTitle}>
        Dealer Type: <Text style={styles.value}>{item.type}</Text>
      </Text>
      <Text style={styles.subTitle}>
        No. of Partners: <Text style={styles.value}>{item.partners}</Text>
      </Text>
      <Text style={styles.subTitle}>
        Address: <Text style={styles.value}>{item.address}</Text>
      </Text>
      <Text style={styles.subTitle}>
        Contact No: <Text style={styles.value}>{item.contact1 || "N/A"}</Text>
      </Text>
      <Text style={styles.subTitle}>
        Active:{" "}
        <Text
          style={[
            styles.value,
            { color: item.active ? "green" : "red", fontWeight: "bold" },
          ]}
        >
          {item.active ? "Yes" : "No"}
        </Text>
      </Text>
      <Text style={styles.subTitle}>
        State: <Text style={styles.value}>{item.state}</Text>
      </Text>
      <Text style={styles.subTitle}>
        District: <Text style={styles.value}>{item.district}</Text>
      </Text>
      <Text style={styles.subTitle}>
        Member Code: <Text style={styles.value}>{item.memberCode}</Text>
      </Text>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity>
          <Text style={styles.activateButton}>Activate</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.deactivateButton}>Deactivate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={dealers}
      renderItem={renderCard}
      keyExtractor={(item) => item.sapCode}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },
  value: {
    color: "#000",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  activateButton: {
    color: "blue",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  deactivateButton: {
    color: "red",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default DealerList;
