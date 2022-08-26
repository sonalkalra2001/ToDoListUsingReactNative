import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goals.jpg')}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal!!!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="add goal" onPress={addGoalHandler} color="#F4BE2C"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#6A1B4D" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    backgroundColor: '#120E43',

    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    color: 'white',

    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
    marginTop: -250,
    borderRadius:350,

  },
});
