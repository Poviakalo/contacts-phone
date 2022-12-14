import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export const Contact = ({ name, tel, imgUrl }) => {
  return (
    <View style={styles.contactItem}>
      <View style={[{width: 60, height: 60}, styles.img]}>
        {
        imgUrl === '' || !imgUrl
          ? <Ionicons name="person-circle-sharp" size={63} color="black" />
          : <Image style={{width: '100%', height: '100%'}} source={{uri:imgUrl}} /> 
        } 
      </View>              
      <View style={styles.info}>
        <Text style={styles.title} >{name}</Text>
        <Text style={styles.number}>{tel}</Text>
      </View>      
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 30,
    marginLeft: 10,
    overflow: 'hidden'
  },
  contactItem: {
    flexDirection: 'row',
    marginTop: 20,
  },
  info: {
    marginLeft: 20,
  },
  title: {
    fontFamily: 'openSansBold',
    fontSize: 24,
  },
  number: {
    fontFamily: 'openSansRegular',
    fontSize: 18,
  },
  
})