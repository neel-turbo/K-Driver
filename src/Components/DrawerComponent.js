import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../asserts/colors.js/colors';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';




function HomeScreen(props) {
    const [name, setName] = useState('');



    // *******************************logout user details*************************************

    useEffect( () => {
        fetch()
    }, []);

    const fetch = async() =>{
        try {
            const data = JSON.parse(await AsyncStorage.getItem('userToken'));
        if (data) {
            setName(data.driver.name);
        }
        } catch (error) {
            
        }
    }

    //..**************************************************************************************


    return (
        <View style={styles.container}>
            <View style={{ marginLeft: 20 }}>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', width: '80%', marginBottom: 15 }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            resizeMode: 'cover',
                            overflow: 'hidden',
                            borderRadius: 60 / 2,
                            borderColor: colors.buttonColor,
                            borderWidth: 2,
                        }}
                        source={require('../asserts/user.jpeg')}
                    />

                    <View>
                        <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10 }}>{name}</Text>
                        <Text style={{ color: '#fff', fontSize: 14, marginLeft: 10 }}>demo@gmail.com</Text>
                    </View>

                </View>

                <View style={{ height: 0.5, width: '100%', backgroundColor: '#fff' }}></View>


                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Change password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => navigation.navigate('documentUpload')}
                >
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Documentation</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Successful Ride </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Cancellation Ride</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Add Toll Receipt</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Payment details</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Tearms & Condition</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Helf & Support</Text>
                </TouchableOpacity>



                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto
                        color={colors.inActiveBorder}
                        size={20}
                        name={'key'}
                    />
                    <Text style={{ paddingVertical: 15, color: '#fff', fontSize: 16, marginLeft: 10 }}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3165cb"
    }
})
export default HomeScreen;
