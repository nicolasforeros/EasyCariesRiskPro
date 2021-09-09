import React from 'react';
import { Image } from 'react-native';
import icon from '../../../assets/icon.png';

const Logo = () => {
    return(
        <Image source={icon} style={{ flex: 1, width: 400, resizeMode:"contain" }}/> 
    );
}

export default Logo;