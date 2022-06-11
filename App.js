import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Demo from './Demo';
import CounterText from './components/CounterText';

export default function App() {
  let [count, setCount] = useState(0);

  function buttonPressed() {
    setCount(count + 1);
  }

  function buttonReset() {
    setCount(0);
  }

  function encourage() {
    if (count >= 10) {
      return "Keep going!";
    }
  }

  return (
    <View style={styles.container} onPress={buttonPressed}>
      <Demo></Demo>

      <CounterText color='lightgray' fontSize={20}>{count}</CounterText>
      <CounterText color='lightblue' fontSize={40}>{count}</CounterText>
      <CounterText color='blue' fontSize={60}>{count}</CounterText>
      <CounterText bottomMargin={50} color='navy' fontSize={80}>{count}</CounterText>
      
      <TouchableOpacity style={styles.button} onPress={buttonPressed}>
        <Text>Press me!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={buttonReset}>
        <Text>Reset!</Text>
      </TouchableOpacity>

      <Text style={styles.encouragingText}>{encourage()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encouragingText: {
    marginTop: 50,
    color: 'darkgrey'
  },
  button: {
    backgroundColor: 'hotpink',
  },
  buttonText: {
    color: 'white',
  },
});
