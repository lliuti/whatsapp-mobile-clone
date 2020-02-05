import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';
import Header from './src/components/Header/index';

export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#075E54'/>
    <Header/>
    <Routes/>
    </>
  );
}