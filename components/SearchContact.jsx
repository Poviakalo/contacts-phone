import { StyleSheet, Modal, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, AntDesign  } from '@expo/vector-icons';
import OutsideView from 'react-native-detect-press-outside';

export const SearchContact = ({ hideSearch, search }) => {
    const [changeInput, setChangeInput] = React.useState('');    
    const clearInput = () => {
        setChangeInput('')
    }
    const searchRef = React.useRef();
    const textInput = (text) => {
        setChangeInput(text)
        search(text)
    }
        
    return (    
        <Modal transparent>
            <OutsideView childRef={searchRef} onPressOutside={() => hideSearch(false)} style={{flex:1}}>
                <View ref={searchRef} style={styles.searchBlock}>                
                    <TouchableOpacity style={styles.searchIcon} onPress={()=>{}}>
                        <Feather name="search" size={24} color="#cce" /> 
                    </TouchableOpacity>  
                    <TextInput
                        style={styles.input} 
                        autoFocus
                        onChangeText={textInput}
                        value={changeInput}
                    /> 
                    <TouchableOpacity style={styles.closeIcon} onPress={clearInput}>
                        <AntDesign name="closecircleo" size={20} color="#cce" />
                    </TouchableOpacity>
                </View>  
            </OutsideView>           
        </Modal> 
    )
    
}


const styles = StyleSheet.create({
    searchBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff'    
    },
    input: {
        borderColor: '#cce',
        borderBottomWidth:1,
        flex:1,
        fontSize: 18,
        paddingLeft: 20
    },
    searchIcon: {
        margin: 10
    },
    closeIcon: {
        margin: 10
    }
})