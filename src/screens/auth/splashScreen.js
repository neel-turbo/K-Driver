import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {logoHeight, logoWidth} from '../../utils/comon';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default splashScreen = ({navigation, route}) => {


  useEffect(async () => {
    const { token } = JSON.parse(await AsyncStorage.getItem('userToken'))
    if(token){
      setTimeout(() => {
        navigation.navigate('documentUpload');
      }, 1000);
    }else{
      setTimeout(() => {
        navigation.navigate('signIn');
      }, 1000);
    }

    console.log('react native--->', token)
  }, [])



  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('signIn');
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#66CEE9', '#2F5ED2']}
        style={styles.linearGradient}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Image
            style={{resizeMode: 'center', height: logoHeight, width: logoWidth}}
            source={require('../../asserts/logo.png')}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <Text style={{fontSize: 20, color: 'white'}}>
            Make Ride Easy For You
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
