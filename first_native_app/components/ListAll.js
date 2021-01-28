
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, 
  TouchableOpacity
} from 'react-native';
import List from './List'

export default function ListAll() {
    const [list, setList] = useState([])
    const [keep, setKeep] = useState('')
    const inpRef = useRef()
    const handleAdd = () => {
     
      const newObj = {
        id: Math.random(),
        name: keep
      }
      setList([...list, newObj])
    }
    return (
          <>
     <View style = {styles.formNapis}>
       <Text style = {styles.napisGlowny}>Wpisz napis</Text>
       <TextInput value = {keep}  value = {keep} onChangeText = {(text) => setKeep(text)} style = {styles.formInput}/>
       <TouchableOpacity onPress = {handleAdd} style = {styles.formButton}><Text style = {styles.textInButton}>Dodaj</Text></TouchableOpacity>
     </View>
      <List list = {list} setList = {setList}/>
    </>
    )
}
const styles = StyleSheet.create({
  formNapis : {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
 
  },
  napisGlowny : {
    textAlign: 'center',
  },
  formInput :{
    backgroundColor: 'lightgrey',
    width: '90%',
    marginBottom: 5,
    marginTop: 5,

  },
  formButton : {
    width:  '80%',
    backgroundColor: 'royalblue',
    padding: 5,
    justifyContent: 'center',
    borderRadius: 9999
  },
  textInButton : {
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center'
  }
});