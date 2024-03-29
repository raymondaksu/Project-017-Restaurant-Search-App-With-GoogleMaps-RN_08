import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {searchbarStyle} from '../styles';

const SearchBar = (props) => {
  return (
    <View style={searchbarStyle.container}>
      <Icon name="search" size={18} color="gray" />
      <TextInput
        style={searchbarStyle.input}
        placeholder="Search a city.."
        onChangeText={value => props.onSearch(value)}
      />
    </View>
  );
};

export {SearchBar};