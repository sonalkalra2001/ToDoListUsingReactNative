import {Pressable, StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';
function GoalItem(props) {
  const mydelete = () => {
    props.onDelete(props.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable onPress={mydelete} android_ripple={{color: '#dddddd'}}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
