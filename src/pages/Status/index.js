import React from 'react';
import { MaterialIcons } from '@expo/vector-icons/'

import { 
  Container,
  MyStatusBox,
  ImageBox,
  Image,
  AddStatusBox,
  Details,
  Top,
  TitleBox,
  Title,
  UpdateStatus,
  Text
} from './styles';

export default function Status() {
  return (
    <Container>
      <MyStatusBox>
        <ImageBox>
          <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://avatars3.githubusercontent.com/u/53618919?s=400&u=1685efc02d9f5f2a1e470efc7ce7e745e665967e&v=4' }}/>
          <AddStatusBox>
            <MaterialIcons name='add' size={18} color='#fff'/>
          </AddStatusBox>
        </ImageBox>
        <Details>
          <Top>
            <TitleBox>
              <Title>Meu status</Title>
            </TitleBox>
          </Top>
          <UpdateStatus>
            <Text>Toque para atualizar seu status</Text>
          </UpdateStatus>
        </Details>
      </MyStatusBox>
    </Container>
  );
}
