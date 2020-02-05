import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ChatBox = styled.View`
  flex-direction: row;
  border-bottom-color: #ccc;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const ImageBox = styled.View`
  padding: 10px 10px;
`;

export const Image = styled.Image``;

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

export const DateBox = styled.View``;

export const Date = styled.Text`
  color: #666;
`;

export const LastMessage = styled.View``;

export const Text = styled.Text`
  color: #666;
`;