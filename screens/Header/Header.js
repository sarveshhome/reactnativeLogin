import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import globalStyle from '../../assets/styles/globalStyle';
import { scaleFontSize } from '../../assets/styles/scaling';

const Header = ({ navigation }) => {
  const [isSearchVisible, setSearchVisible] = React.useState(false);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={globalStyle.messageIcon}
        onPress={() => navigation.openDrawer()}>
        <FontAwesomeIcon
          icon={faBars}
          size={scaleFontSize(20)}
          color={'#898DAE'}
        />
      </TouchableOpacity>

      {isSearchVisible ? (
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#898DAE"
        />
      ) : (
        <Text style={styles.headerTitle}>IGL</Text>
      )}

      <TouchableOpacity onPress={() => setSearchVisible(!isSearchVisible)}>
        <FontAwesomeIcon
          icon={faSearch}
          size={scaleFontSize(20)}
          color={'#898DAE'}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1, // Allow title to take up available space
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#898DAE',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default Header;
