import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Header from '../components/Header'

export default function HomeScreen() {
  return (
    <Background>
      
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Logo />
          <Header>Besoin d'un transporteur ?</Header>
          <TextInput
            placeholder="Adresse de depart"
            editable
            returnKeyType="next"
          />
          <TextInput placeholder="Adresse d'arriver" returnKeyType="next" />
          <TextInput
            placeholder="Poids du colis (en Kg)"
            keyboardType="numeric"
            returnKeyType="next"
          />

          <TextInput
            placeholder="description du colis(frigo, canapé ...) "
            multiline
            numberOfLines={5}
            returnKeyType="next"
          />
          <TextInput
            placeholder="Tarifs proposé"
            keyboardType="numeric"
            returnKeyType="next"
          />

          <Button
            mode="contained"
            onPress={() => navigation.navigate('LoginScreen')}
          >
            valider
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style = {styles.container}></View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 4,
    width: '100%',
  },
})
