import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../../styles/styles';
import {useNetInfo} from "@react-native-community/netinfo";

const TestButton = () => {

    const netInfo = useNetInfo();

    const testConnection = () => {
        netInfo.isConnected ? alert("Estas Conectado a internet") : alert("No estas conectado a internet");
    };

    return (
        <TouchableOpacity
            onPress={testConnection}
            style={styles.button}
        >
                <Text style={{ color: '#fff' }}>Continuar</Text>
        </TouchableOpacity>
    );
}

export default TestButton;