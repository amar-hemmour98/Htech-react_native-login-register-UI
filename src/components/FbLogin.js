import React from 'react'
import { View,Image, StyleSheet,TouchableWithoutFeedback,Alert } from 'react-native'

export default function Logo() {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => Alert.alert('Connexion avec Facebook disponible dans la journée')}
      >
        <Image source={require('../assets/fbbtn.png')} style={styles.image} />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
})
