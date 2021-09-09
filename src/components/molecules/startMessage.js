import React from "react";
import { View } from "react-native";
import Logo from "../atoms/logoImage";
import Problem from "../atoms/problemText";


const StartMessage = () => {
    return(
        <>
            <View style={{height:"20%", margin:10}}>
                <Logo />
            </View>
            <View style={{width:"100%"}}>
                <Problem />
            </View>
        </>
    );
}

export default StartMessage;