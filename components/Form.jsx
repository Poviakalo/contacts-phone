import { StyleSheet, View, TextInput, Button } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';


export const Form = ({ closeModal }) => {

  const dispatch = useDispatch();

  const saveNewContact = (value) => {
    dispatch(addContact(value))
    closeModal(false)
  }

  return (
    <Formik
     initialValues={{  name: '', tel: '', email: '', imgUrl: '' }}
     onSubmit={values => saveNewContact(values)}
   >
     {({ handleChange, handleSubmit, values }) => (
       <View style={{padding:20}}>
         <TextInput
           autoFocus
           onChangeText={handleChange('name')}
           value={values.name}
           style={styles.input}
           placeholder="Введіть ім'я"
         />
         <TextInput
           onChangeText={handleChange('tel')}
           value={values.tel}
           style={styles.input}
           placeholder='Введіть номер телефону'
           keyboardType="numeric"
         />
         <TextInput
           autoComplete='email'
           onChangeText={handleChange('email')}
           value={values.email}
           style={styles.input}
           placeholder='Введіть email'
         />
         <TextInput
           onChangeText={handleChange('imgUrl')}
           value={values.imgUrl}
           style={styles.input}
           placeholder='Введіть url фото'
         />
         <Button 
            onPress={handleSubmit} 
            title="Зберегти"
            color='green'
            width={100}
        />
       </View>
     )}
   </Formik>
  )
}


const styles = StyleSheet.create({
    input: {        
        width: 300,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
    }
})