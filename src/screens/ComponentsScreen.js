import React from 'react'; // import whole library
import { Text, StyleSheet, View } from 'react-native'; // import several components

const ComponentsScreen = () => {
  // return <Text style={styles.textStyle}>This is WildSaoFeng</Text>;
  // Equal to:
  // return <Text style={{ fontSize: 60 }}>Nebula</Text>;

  const Astring = "WSF" ;
  return(
    <View>  
      <Text style={styles.textStyle}>This is WildSaoFeng</Text>
      <Text>Nice to meet you!</Text>
      <Text>{Astring}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;