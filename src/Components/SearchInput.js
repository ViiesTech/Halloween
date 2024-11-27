import {View, TextInput} from 'react-native';
import React from 'react';
import {Color} from '../assets/Utils/Colors';
import {styles} from '../Styles';

const SearchInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search Here..."
        placeholderTextColor={Color.searchInputPlaceHolder}
      />
    </View>
  );
};

export default SearchInput;
