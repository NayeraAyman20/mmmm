import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';
// import testimg from './assets/test.png';
export default function Homescreen({ navigation }) {

    return (
        <View style={styles.container}>
            {/* <ImageBackground source={testimg} style={styles.backgroundimage}></ImageBackground> */}
            <View>
                <Text style={styles.title}>         Home </Text>
                <Text style={styles.miniTitle}>Login In To Your Existant Account </Text>
                <Text style={styles.miniTitle}>OR </Text>
                <Text style={styles.miniTitle}> Sign Up if you don't have an Account </Text>
            </View>

            <View style={styles.bu}>
                <Button
                    title="       LOGIN        "
                    onPress={()=> navigation.navigate('Signin')}
                    color="#666" />
                
            </View>

            <View style={styles.bu1}>
                <Button
                    title="      Signup      "
                    onPress={()=> navigation.navigate('Signup')}
                    color="#d88" />
                
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#c58',
    },
    miniTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
    },
    bu: {
        padding: 15,
        textAlign: 'center',
        borderRadius: 10,
        marginLeft: 0,
    },
    bu1: {
        padding: 40,
        textAlign: 'center',
        borderRadius: 19,
        marginTop: -50,
        marginLeft: 0,
    },

    backgroundimage: {

        width: 250,
        height: 200,

    }
});
