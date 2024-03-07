import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Exercicio5 = () => {
    const [task, setTask] = useState()
    const [taskList, setTaskList] = useState([])

    function addTask(){
        if (task.trim().length>0){
            setTaskList([...taskList, task])
            setTask('')
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de tarefas</Text>
    </View>
    <View style={styles.inputContainer}>
        <TextInput style={styles.input}
        placeholder='Adcionar uma nova tarefa...'
        value={task}
        onChange={setTask}
        />
    <Button title="adcionar" onPress={" addtask"}/>
    {taskList.map(item, index)(
        <View key={index} style={styles.task}>
            <text>{item}</text>
    )}
    </View>
    <ScrollView style={styles.taskList}/>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    header: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 10,
    },
    input: {
      flex: 1,
      borderBottomWidth: 1,
      marginRight: 10,
    },
    taskList: {
      flex: 1,
      paddingTop: 20,
    },
    task: {
      backgroundColor: '#eee',
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
  });

export default Exercicio5