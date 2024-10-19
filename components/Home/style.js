import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container : {
      alignItems : "center",
      display:'flex',
      justifyContent: 'flex-start',
      paddingTop: 40,
      rowGap:25,
      fontWeight: 100
    },
    image : {
      height : 160,
      width : 170
    },
    title : {
      fontSize : 30,
      fontWeight : "bold",
      textTransform : "uppercase",
      textAlign: "center",
      paddingVertical : 40,
      color : "blue"
    },
    inputView : {
      gap : 15,
      width : "100%",
      paddingTop:60,
      paddingHorizontal : 40,
      marginBottom:5
    },
    input : {
      height : 45,
      paddingHorizontal : 20,
      borderColor : "gray",
      borderWidth : 1,
      borderRadius: 16
    },
    rememberView : {
      width : "100%",
      paddingHorizontal : 50,
      justifyContent: "space-between",
      alignItems : "center",
      flexDirection : "row",
      marginBottom : 8
    },
    switch :{
      flexDirection : "row",
      gap : 1,
      justifyContent : "center",
      alignItems : "center"
      
    },
    rememberText : {
      fontSize: 13,
      paddingRight:12
    },
    forgetText : {
      fontSize : 11,
      color : "red"
    },
    button : {
      backgroundColor : "blue",
      height : 40,
      width: 100,
      borderColor : "gray",
      borderRadius : 20,
      alignItems : "center",
      justifyContent : "center",
      margin:'auto'
    },
    buttonText : {
      color : "white"  ,
      fontSize: 13,
      fontWeight : "bold"
    }, 
    buttonView :{
      width :"100%",
      paddingHorizontal : 50
    },
    optionsText : {
      textAlign : "center",
      paddingVertical : 10,
      color : "gray",
      fontSize : 13,
      marginBottom : 2,
    },
    mediaIcons : {
      flexDirection : "row",
      gap : 8,
      alignItems: "center",
      justifyContent : "center",
      marginBottom : 23
    },
    icons : {
      width: 25,
      height : 25,
    },
    footerText : {
      color : "gray",
      display:'flex',
      alignItems:"center"
    },
    signup : {
      color : "red",
    }
  })

  export default styles;