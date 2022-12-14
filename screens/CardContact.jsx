import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, FlatList } from 'react-native'

import { Ionicons, Feather } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { edit } from '../redux/contactSlice';


export const CardContact = ({ route }) => {

    const { index, changeContact } = route.params;
    const { name, tel, email, imgUrl } = useSelector(state => state.contacts.list[index]);
    
    const [editContact, setEditContact] = React.useState(changeContact);

    const [changeName, setChangeName] = React.useState(name);
    const [changeTel, setChangeTel] = React.useState(tel);
    const [changeEmail, setChangeEmail] = React.useState(email);
    const [changeImgUrl, setChangeImgUrl] = React.useState(imgUrl);

    const dispatch = useDispatch();

    const saveEdit = (obj) => {
      dispatch(edit(obj))
      setEditContact(false)
    }

    if (editContact) {    
      return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.image} source={{uri:imgUrl}}/>
        <TextInput value={changeImgUrl} onChangeText={setChangeImgUrl} style={[styles.input]} placeholder='вставте url фото' />
        <TextInput value={changeName} autoFocus onChangeText={setChangeName} style={[styles.text, styles.input]} />
        <TextInput value={changeTel} keyboardType='numeric' onChangeText={setChangeTel} style={[styles.text, styles.input]} />
        <TextInput value={changeEmail} autoComplete='email' keyboardType='email-address' onChangeText={setChangeEmail} style={[styles.text, styles.input]} />
        
        <TouchableOpacity onPress={() => Alert.alert('', 'Ви дійсно хочете змінити контакт', [
            {text: 'Ні', onPress: () => setEditContact(false)},
            {text: 'Так', onPress: () => saveEdit({
              index: index,
              name: changeName, 
              tel: changeTel,
              email: changeEmail,
              imgUrl: changeImgUrl            
            })}
          ])}
          style={{padding: 20, backgroundColor: 'green', borderRadius: 5}}
          >
          <Text style={{color: '#fff', fontSize: 30}}>Зберегти зміни</Text>
        </TouchableOpacity>        
    </View>
    )
    } else {
      return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {imgUrl.length > 0 
        ? <Image style={styles.image} source={{uri:imgUrl}}/>
        : <Ionicons name="person-circle-sharp" size={300} color="black" />
        }
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{tel}</Text>
        <Text style={[styles.text, {fontSize: 21}]}>{email}</Text>
        <TouchableOpacity 
            style={styles.call} 
            onPress={() => Alert.alert('Дзвоним', `Викликати ${name}?`,[
                {text: 'No'},{text: 'Yes'}
            ])} 
          >
          <Ionicons name="call" size={36} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.edit} onPress={() => setEditContact(true)}>
          <Feather name="edit" size={30} color="#9b9999" />
        </TouchableOpacity>
    </View>
  )
    }
  
}

const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 300,
      borderRadius: 150,
      marginTop: 20
    },
    text: {
        margin: 20,
        fontFamily: 'openSansRegular',
        fontSize: 32
    },
    call: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 100,
      backgroundColor: '#0ab326',
      marginTop: 40,
    },
    edit: {
      position: 'absolute',
      bottom: -60,
    },
    input: {
      width: '90%'
    }
})