import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    padding: 12,
    height: "100%",
    backgroundColor: "#F5CB58",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    color: "#fff",

  },
  titleRK: {
    color: '#E95322',           // Color for "RK"
  },
  titleFineArts: {
    color: '#fff',          // Color for "Fine Arts"
  },
  innerContainer: {
    padding: 22,
    display: 'flex',
    alignItems: "center"
  },
  logo: {
    width: 220
  },
  backgroundImage: {
    height: '100%',
    position: "relative",
    width: 393,
    height: 852,
    /* Yellow Base */
    background: "#F5CB58",
    borderRadius: 20

  },
  sketch: {
    width: 200
  },
  button: {
    width: 250,
    // marginHorizontal: 5,
    borderRadius: 8,       // Rounded corners
    overflow: 'hidden',
    // marginBottom: 15,
    backgroundColor: '#008CBA',  // Dark blue color
    // paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: 'center',
    // Shadow for Android
    elevation: 8,
  },
})

export default styles;