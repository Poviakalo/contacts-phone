import { View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React from 'react';
import axios from 'axios';

import { Contact } from '../components/Contact';
import { Feather, Ionicons } from '@expo/vector-icons';
import { AddNewContact } from '../components/AddNewContact';
import { useSelector, useDispatch } from 'react-redux';
import { showModal, init } from '../redux/contactSlice';
import { ActionsFromContact } from '../components/ActionsFromContact';
import { SearchContact } from '../components/SearchContact';

export const ContactsList = ({ navigation }) => {

  const dispatch = useDispatch();
  const contactsState = useSelector(state => state.contacts.list);
  

  React.useEffect(() => {
    axios.get('https://62cec65e826a88972d02c7c6.mockapi.io/contacts')
    .then(({data}) => {
      dispatch(init(data));
    })
    .catch(error => console.log("Error!!!", error))
    .finally(() => {console.log('сторінка завантажилась')})
  }, [])
  
  const [showModalNewContact, setShowModalNewContact] = React.useState(false); 
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  
  const showModalActionsFromContact = (index) => {
    dispatch(showModal(index))    
  }
  
 const routeToCardContact = (name, obj) => {
  navigation.navigate(name, obj)
 }
const searchContact = contactsState.filter(({name, tel}) => {
  if ( name.toLowerCase().includes(searchText.toLowerCase()) 
    || tel.toLowerCase().includes(searchText.toLowerCase())) {
      return true
  } else {
    return false
  }
})



  return (
      <View style={{flex: 1}}>
        {
        !activeSearch 
        ? <TouchableOpacity style={{margin:10}} onPress={() => setActiveSearch(true)}>
            <Feather name="search" size={24} color="#838383" /> 
          </TouchableOpacity> :
          <SearchContact hideSearch={(bool) => setActiveSearch(bool)} search={text => setSearchText(text)} />
        }
        <FlatList data={ searchContact } renderItem={({item, index}) => {    

        return (
          <TouchableOpacity 
            onPress={() => routeToCardContact('CardContact', {...item, index})}
            onLongPress={() => showModalActionsFromContact(index)}            
          >
            <Contact {...item} index={index} />
            { item.actionModal === true && <ActionsFromContact 
                {...item} 
                index={index} 
                routeToCardContact={(changeContact) => {
                  routeToCardContact('CardContact', {...item, index, changeContact})
                }}
            /> }
          </TouchableOpacity>
        )
      }} />

      <TouchableOpacity onPress={() => setShowModalNewContact(true)} style={styles.iconAddContact}>
        <Ionicons name="add-circle" size={65} color="orange" />        
      </TouchableOpacity>

      {
        showModalNewContact 
        &&  <Modal>
              <AddNewContact closeModal={() => setShowModalNewContact(false)} />
            </Modal>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  iconAddContact: {
    position: 'absolute',
    bottom: 20,
    left: '43%',
    
  }
})