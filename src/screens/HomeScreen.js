import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import styles from '../styles/styles';
import StartMessage from '../components/molecules/startMessage';
import TestButton from '../components/atoms/testConnectionButton';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{height:"70%", justifyContent:"flex-start", alignItems:"center"}}>
                <StartMessage/>
            </View>

           <TestButton />

            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen;