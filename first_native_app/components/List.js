import React from 'react'
import {
    StyleSheet,
   View,
   TouchableOpacity,
   Text, 
   Button,
   VirtualizedList,
   ScrollView
  
  } from 'react-native';
export default function List({list, setList}) {
    const handleRemove = (id) => {

        const newList = [...list].filter(item => item.id !== id)
        setList(newList)

    }
    const listAllJsx = list && list.map(item => <View key = {item.id} style = {styles.element}><Text style = {styles.elementText}>{item.name}</Text><Button title = 'usuń' style = {styles.buttonDel} onPress = {handleRemove.bind(this, item.id)}/></View>)

    
    return (
      <ScrollView style = {styles.itemsContainer}>
          {listAllJsx}
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    itemsContainer : {
    
        width: "100%",
        flexDirection: "column",
       
    
         
    },
    element: {
        marginTop: 20,
        width: '100%',
        backgroundColor: 'lightgrey',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
        

    },
    elementText : {
   
        width: "60%",
        fontSize: 20,
        color: 'black',
 
        height: '100%'
        
        

    },
    buttonDel : {
     
        width:'10%',
       height: "100%",
    
    }

});