import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const MyStatusBox = styled.View`
  flex-direction: row;
  /* border-bottom-color: #ccc;
  border-bottom-width: ${StyleSheet.hairlineWidth}px; */
`;

export const ImageBox = styled.View`
  padding: 10px 10px;
`;

export const Image = styled.Image``;

export const AddStatusBox = styled.View`
  background: #25D366;
  width: 20px;
  height: 20px;
  border-radius: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5px;
  right: 10px;
`;

export const Details = styled.View`
  flex: 1;
  padding: 0 10px;
  margin-right: 10px;
  justify-content: center;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBox = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
`;

export const UpdateStatus = styled.View``;

export const Text = styled.Text`
  color: #666;
`;