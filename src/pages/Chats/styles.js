import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  /* padding: 10px; */
`;

export const ChatBox = styled.View`
  flex-direction: row;
`;

export const ImageBox = styled.View`
  /* border-radius: 50%; */
  padding: 10px 10px;
`;

export const Image = styled.Image`
  
`;

export const Details = styled.View`
  flex: 1;
  padding: 0 10px;
  margin-right: 10px;
  justify-content: center;
  border-bottom-color: #ccc;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
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

export const DateBox = styled.View``;

export const Date = styled.Text`
  color: #666;
`;

export const LastMessage = styled.View`
  /* flex: 1; */
`;

export const Text = styled.Text`
  color: #666;
`;