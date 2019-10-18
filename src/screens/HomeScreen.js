import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}}) => {
  
  console.log(props);

  return (
    <View>
      <Text style={styles.text}>
          HomeScreen

          Nebula!!!!!!!!

          I love React Native!

      </Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>  Go to List Demo  </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
