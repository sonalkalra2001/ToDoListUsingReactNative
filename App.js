import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  StatusBar,
  SafeAreaView,
  
} from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setModalIsVisible(false);
  }
  function deleteGoalHandler(id) {
    console.log(id);

    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter((x, idx) => idx !== id),
    );
  }

  return (
   
    <>
    <StatusBar style="light" / >
    <SafeAreaView style={styles.appContainer}>
        <View style={styles.button}>
        <Button
        
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
    </View>
   
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={courseItem => {
            return (
              <GoalItem
                text={courseItem.item}
                onDelete={deleteGoalHandler}
                id={courseItem.index}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return index;
          }}
        />
      </View>
    </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:"#66AD47",
  },

  goalsContainer: {
    flex: 5,
   

  },
  button:{
    marginBottom:50,

  },

  
});

export default App;
