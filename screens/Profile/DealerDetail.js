import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DealerList from './DealerList';

const DealerDetail = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedTerritory, setSelectedTerritory] = useState(null);
  const [selectedSalesArea, setSelectedSalesArea] = useState(null);

  const states = [
    { id: "33", name: "ANDAMAN AND NICOBAR ISLANDS" },
    { id: "26", name: "ANDHRA PRADESH" },
    { id: "35", name: "ANDHRA PRADESH" },
    { id: "11", name: "ARUNANCHAL PRADESH" },
    { id: "17", name: "ASSAM" },
    { id: "9", name: "BIHAR" },
    { id: "3", name: "CHANDIGARH" },
    { id: "21", name: "CHATTISGARH" },
    { id: "6", name: "DELHI" },
    { id: "28", name: "GOA" },
    { id: "23", name: "GUJARAT" },
    { id: "5", name: "HARYANA" },
    { id: "1", name: "HIMACHAL PRADESH" },
    { id: "19", name: "JHARKHAND" },
    { id: "27", name: "KARNATAKA" },
    { id: "30", name: "KERELA" },
    { id: "36", name: "LADAKH" },
    { id: "29", name: "LAKSHADWEEP" },
    { id: "22", name: "MADHYA PRADESH" },
    { id: "25", name: "MAHARASHTRA" },
    { id: "13", name: "MANIPUR" },
    { id: "16", name: "MEGHALAYA" },
    { id: "14", name: "MIZORAM" },
    { id: "12", name: "NAGALAND" },
    { id: "20", name: "ODISHA" },
    { id: "32", name: "PUDUCHERRY" },
    { id: "2", name: "PUNJAB" },
    { id: "7", name: "RAJASTHAN" },
    { id: "10", name: "SIKKIM" },
    { id: "31", name: "TAMIL NADU" },
    { id: "34", name: "TELANGANA" },
    { id: "15", name: "TRIPURA" },
    { id: "8", name: "UTTAR PRADESH" },
    { id: "4", name: "UTTARAKHAND" },
    { id: "18", name: "WEST BENGAL" },
  ];

  const districts = [
    { id: "1", name: "Araria" },
    { id: "2", name: "Arwal" },
    { id: "3", name: "Aurangabad" },
    { id: "4", name: "Banka" },
    { id: "5", name: "Begusarai" },
    { id: "6", name: "Bhagalpur" },
    { id: "7", name: "Bhojpur" },
    { id: "8", name: "Buxar" },
    { id: "9", name: "Darbhanga" },
    { id: "10", name: "East Champaran" },
    { id: "11", name: "Gaya" },
    { id: "12", name: "Gopalganj" },
    { id: "13", name: "Jamui" },
    { id: "14", name: "Jehanabad" },
    { id: "15", name: "Kaimur" },
    { id: "16", name: "Katihar" },
    { id: "17", name: "Khagaria" },
    { id: "18", name: "Kishanganj" },
    { id: "19", name: "Lakhisarai" },
    { id: "20", name: "Madhepura" },
    { id: "21", name: "Madhubani" },
    { id: "22", name: "Munger" },
    { id: "23", name: "Muzaffarpur" },
    { id: "24", name: "Nalanda" },
    { id: "25", name: "Nawada" },
    { id: "26", name: "Patna" },
    { id: "27", name: "Purnia" },
    { id: "28", name: "Rohtas" },
    { id: "29", name: "Saharsa" },
    { id: "30", name: "Samastipur" },
    { id: "31", name: "Saran" },
    { id: "32", name: "Sheikhpura" },
    { id: "33", name: "Sheohar" },
    { id: "34", name: "Sitamarhi" },
    { id: "35", name: "Siwan" },
    { id: "36", name: "Supaul" },
    { id: "37", name: "Vaishali" },
    { id: "38", name: "West Champaran" },
  ];

  const territories = [
    { id: "3", name: "MUZAFFARPUR" },
    { id: "1", name: "PATNA" },
    { id: "2", name: "PURNIA" },
  ];

  const salesAreas = [
    { id: "6", name: "BARAUNI" },
    { id: "4", name: "BHAGALPUR" },
    { id: "3", name: "BIHAR SARIF" },
    { id: "8", name: "DARBHANGA" },
    { id: "2", name: "GAYA" },
    { id: "7", name: "MUZAFFARUR" },
    { id: "1", name: "PATNA" },
    { id: "5", name: "PURNIA" },
    { id: "9", name: "SARAN" },
  ];

  return (
    <View style={styles.container}>
      {/* State Dropdown */}
      <Text>State</Text>
      <Picker
        selectedValue={selectedState}
        onValueChange={(value) => {
          setSelectedState(value);
          setSelectedDistrict(null);
          setSelectedTerritory(null);
          setSelectedSalesArea(null);
        }}
      >
        <Picker.Item label="Select State" value={null} />
        {states.map((state) => (
          <Picker.Item key={state.id} label={state.name} value={state.id} />
        ))}
      </Picker>

      {/* District Dropdown */}
      <Text>District</Text>
      <Picker
        selectedValue={selectedDistrict}
        onValueChange={(value) => {
          setSelectedDistrict(value);
          setSelectedTerritory(null);
          setSelectedSalesArea(null);
        }}
        enabled={!!selectedState}
      >
        <Picker.Item label="Select District" value={null} />
        {selectedState &&
         districts.map((district) => (
          <Picker.Item key={district.id} label={district.name} value={district.id} />
        ))}
      </Picker>

      {/* Territory Dropdown */}
      <Text>Territory</Text>
      <Picker
        selectedValue={selectedTerritory}
        onValueChange={(value) => {
          setSelectedTerritory(value);
          setSelectedSalesArea(null);
        }}
        enabled={!!selectedDistrict}
      >
        <Picker.Item label="Select Territory" value={null} />
        {selectedDistrict &&
          territories.map((territory) => (
            <Picker.Item key={territory.id} label={territory.name} value={territory.id} />
          ))}
      </Picker>

      {/* Sales Area Dropdown */}
      <Text>Sales Area</Text>
      <Picker
        selectedValue={selectedSalesArea}
        onValueChange={(value) => setSelectedSalesArea(value)}
        enabled={!!selectedTerritory}
      >
        <Picker.Item label="Select Sales Area" value={null} />
        {selectedTerritory &&
          salesAreas.map((area) => (
            <Picker.Item key={area.id} label={area.name} value={area.id} />
          ))}
      </Picker>

      {/* Dealer List */}
      {selectedSalesArea && <DealerList />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  selectedText: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default DealerDetail;
