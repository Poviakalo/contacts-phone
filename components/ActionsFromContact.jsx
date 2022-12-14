import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert } from 'react-native'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, removeContact } from '../redux/contactSlice';
import OutsideView from 'react-native-detect-press-outside';

export const ActionsFromContact = ({ name, index, routeToCardContact}) => {
    const dispatch = useDispatch();

    const closePopup = (index) => {
        dispatch(closeModal(index))
    }    
    const openCard = (index, bool) => {
        routeToCardContact(bool)
        closePopup(index)
    }
    const deleteContact = (name, index) => {
        Alert.alert('Увага!',`Ви дійсно бажаєте видалити ${name}?`, [
            {text: 'Відмінити', onPress: () => dispatch(closeModal(index))},
            {text: 'Підтвердити', onPress:() => dispatch(removeContact(name))}
        ])
    }   
    const searchRef = React.useRef()
    return ( 
        <Modal transparent={true}>
            <OutsideView childRef={searchRef} onPressOutside={() => closePopup(index)} style={styles.popup} >
                <View ref={searchRef} style={styles.wrapper}>
                    <TouchableOpacity onPress={() => openCard(index)}>
                        <Text style={styles.text}>Перегляд</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openCard(index, true)}>
                        <Text style={styles.text}>Змінити</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteContact(name, index)}>
                        <Text style={styles.text}>Видалити</Text>
                    </TouchableOpacity>      
                </View>
            </OutsideView>
        </Modal>   
    )        
}


const styles = StyleSheet.create({
    popup:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.2)'
    },
    wrapper: {
        width: 150,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'openSansBold',
        fontSize: 18
    }
    
})