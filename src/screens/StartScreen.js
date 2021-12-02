import React from 'react'
import { View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import FbLogin from '../components/FbLogin'
import GoogleLogin from '../components/GoogleLogin'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>HtechCommunity</Header>
      <Paragraph>Besoin d'un transporteur ?</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Se connecter
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        S'inscrire
      </Button>
      <Paragraph>Se connecter avec</Paragraph>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <FbLogin />
        <Paragraph> ou </Paragraph>
        <GoogleLogin />
      </View>
    </Background>
  )
}
