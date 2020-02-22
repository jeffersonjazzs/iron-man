import React, {useState} from 'react';
import {Animated} from 'react-native';
import Lottie from 'lottie-react-native';

import {Container, Button, Text} from './styles';

import ironman from './assets/iron-man.json';

export default function App() {
    return (
      <Container>
        <Lottie source={ironman} autoPlay loop /> 
        </Container>
  
  
    );
}
