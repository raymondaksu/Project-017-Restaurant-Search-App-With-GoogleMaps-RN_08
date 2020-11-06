  
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cityStyle } from '../styles';

const City = (props) => {
  return (
    <TouchableOpacity
      style={cityStyle.container}
      onPress={props.onSelect}
    >
      <Icon name="building-o" color="#424242" size={20} />
      <Text style={cityStyle.text}>{props.cityName}</Text>
    </TouchableOpacity>
  );
};

export {City};