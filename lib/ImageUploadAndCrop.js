import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import NetInfo from '@react-native-community/netinfo';

const ImageUploadAndCrop = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Request camera and storage permissions on Android
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera to upload images.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const requestStoragePermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'This app needs access to your storage to save images.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage permission granted');
        } else {
          console.log('Storage permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    if (Platform.OS === 'android') {
      requestCameraPermission();
      requestStoragePermission();
    }
  }, []);

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image);
      })
      .catch(error => {
        console.log('ImagePicker Error:', error);
      });
  };

  const handleSendImage = async () => {
    if (!selectedImage) {
      alert('Please select an image first!');
      return;
    }

    // Check for network connectivity (optional)
    const isConnected = await NetInfo.fetch().then(state => state.isConnected);
    if (!isConnected) {
      alert('No internet connection. Image will be sent later.');
      // Store image locally for later upload
      // ... (Implementation for local storage)
      return;
    }

    try {
      // 1. Create a temporary file path
      const tempFilePath =
        Platform.OS === 'ios'
          ? `${RNFS.TemporaryDirectoryPath}/tempImage.jpg`
          : `${RNFS.ExternalStorageDirectoryPath}/tempImage.jpg`;

      // 2. Move the cropped image to the temporary path
      await RNFS.moveFile(selectedImage.path, tempFilePath);

      // 3. Navigate to the next screen and pass the temporary file path
      navigation.navigate('NextScreen', {imagePath: tempFilePath});
    } catch (error) {
      console.error('Error handling image:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={openImagePicker} style={styles.uploadButton}>
        {selectedImage ? (
          <Image
            source={{uri: selectedImage.path}}
            style={styles.imagePreview}
          />
        ) : (
          <Text style={styles.uploadButtonText}>Upload & Crop Image</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSendImage}
        style={styles.sendButton}
        disabled={!selectedImage}>
        <Text style={styles.sendButtonText}>Send Image</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imagePreview: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  sendButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImageUploadAndCrop;
