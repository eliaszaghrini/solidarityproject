import React from 'react';
import {View} from 'react-native';
import { Link } from 'react-router-dom';
import colors from '../config/colors';

function NotFound(props) {
    return (
        <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
            <h1 style={{fontFamily:"futura-condensed-bold", alignSelf:"center"}}>404 - NOT FOUND!</h1>
            <Link to="/" style={{fontFamily:"futura-condensed-bold", alignSelf:"center",textDecoration:'none'}}>
                RETURN TO HOME
        </Link>
        </View>
    );
}

export default NotFound;