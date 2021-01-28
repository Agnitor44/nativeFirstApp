import React, { useRef, useEffect, useState } from 'react';
import { Animated,  Text, View, StyleSheet, Modal,TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import * as Animatable from 'react-native-animatable';

export default function AnimatedStuff() {

    const [num, setNum] = useState(null)
    const [aniData, setAniData] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const goAway = (d, s) => {
    
        if(d === 'SWIPE_LEFT') {
            setNum('slideOutLeft')
            setAniData('l')
        }
        else if(d === 'SWIPE_RIGHT'){
            setNum('slideOutRight')
            setAniData('p')
        }
        else return   
    }


    return (
        <Animated.ScrollView >
            <View style = {styles.Cont}>
          
            <Animatable.View  onAnimationEnd = {() => setNum(aniData === 'p' ? "slideInRight" : "slideInLeft")}  animation= {num} style = {styles.card}><GestureRecognizer onSwipe = {(direction, state) => goAway(direction, state)}><LinearGradient colors={['royalblue', 'rgb(0, 107, 234)']} style={styles.linearGradient}><Text>Kartka</Text></LinearGradient></GestureRecognizer></Animatable.View>
        
            </View>
           {aniData ? aniData === 'p' ? <Text style = {styles.res}>Swiped right</Text> : <Text  style = {styles.res}>Swiped left</Text> : null}
           <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>built by react-native-animatable</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style = {{alignItems: 'center'}}>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>?</Text>
      </TouchableHighlight>
      </View>
        </Animated.ScrollView>
      


    )
}
const styles = StyleSheet.create({
 
    Cont : {
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    linearGradient: {
        height: '100%',
        borderRadius: 10,
    },
    card : {
        backgroundColor: 'royalblue',
        width: '90%',
        height: 200,
        borderRadius: 10,
        marginTop: 100
    },
    res : {
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 30
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "royalblue",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 60
        
       

      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
    
        textAlign: "center"
      }
});