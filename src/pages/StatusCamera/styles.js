import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const NoCameraContainer = styled.View`
  padding: 20px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  border: none;
  background-color: #25D366;
  padding: 6px 10px;
  border-radius: 4px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  elevation: 15;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

export const ActionsGroup = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  padding: 35px 20px;
`;

export const FlashModeButton = styled.TouchableOpacity``;
export const TakePictureButton = styled.TouchableOpacity``;
export const FlipCameraButton = styled.TouchableOpacity``;