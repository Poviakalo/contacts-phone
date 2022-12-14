import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Form } from './Form';

export const AddNewContact = ({ closeModal }) => {
    
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.close} onPress={closeModal}  >
            <AntDesign name="closesquare" size={25} color="grey"/>
        </TouchableOpacity>
        <Form closeModal={closeModal} />        
    </View>
  )
}


const styles = StyleSheet.create({
    btn: {
        padding: 10,
        borderColor: '#cce',
        borderWidth: 1,
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
})