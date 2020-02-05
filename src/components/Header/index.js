import React from 'react';
import { MaterialIcons } from '@expo/vector-icons/'

import { Container, Top, Logo, ButtonBox, Button, Tabs, CameraTab, ChatsTab, StatusTab, CallsTab, Text } from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo>WhatsApp</Logo>
        <ButtonBox>
          <Button>
            <MaterialIcons name='search' size={28} color='#fff'/>
          </Button>
          <Button>
            <MaterialIcons name='more-vert' size={28} color='#fff'/>
          </Button>
        </ButtonBox>
      </Top>
      <Tabs>
        <CameraTab>
          <MaterialIcons name='camera-alt' size={24} color='rgba(255, 255, 255, 0.6)'/>
        </CameraTab>
        <ChatsTab>
          <Text>CONVERSAS</Text>
        </ChatsTab>
        <StatusTab>
          <Text>STATUS</Text>
        </StatusTab>
        <CallsTab>
          <Text>CHAMADAS</Text>
        </CallsTab>
      </Tabs>
    </Container>
  );
}
