import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons/'
 
import { 
  Container, 
  NoCameraContainer, 
  Text, 
  Button, 
  ButtonText,
  ActionsGroup,
  FlashModeButton,
  TakePictureButton, 
  FlipCameraButton,
} from './styles';

export default function StatusCamera() {
  
  const [cameraType, setCameraType] = useState('back');
  const [cameraAccess, setCameraAccess] = useState('denied');

  useEffect(() => {
    requestCameraPermission();
  }, []);

  async function requestCameraPermission() {
    const { status } = await Camera.requestPermissionsAsync();
    setCameraAccess(status);
  };

  return (
    cameraAccess == 'granted' ? (
    <Container>
      <Camera style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }} type={cameraType}>
        
        <ActionsGroup>
          <FlashModeButton>
            <Ionicons name='md-flash' size={32} color='#fff'/>
          </FlashModeButton>

          <TakePictureButton>
            <MaterialCommunityIcons name='circle-outline' color='#fff' size={80}/>
          </TakePictureButton>

          <FlipCameraButton onPress={() => setCameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}>
            <Ionicons name='md-reverse-camera' size={32} color='#fff'/>
          </FlipCameraButton>
        </ActionsGroup>
      </Camera>
    </Container>
    ) : ( 
    <NoCameraContainer>
      <Text>You must give camera access to take pictures</Text>
      <Button onPress={requestCameraPermission}>
        <ButtonText>Allow access</ButtonText>
      </Button>
    </NoCameraContainer>
    )
  )
}
