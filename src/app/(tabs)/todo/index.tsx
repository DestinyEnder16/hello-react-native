import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TodoList from '../../../components/TodoList';

export default function Index() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Feed the dog',
      desc: 'By 6pm, give Mia the crumbles',
    },
    {
      id: 2,
      title: 'Head to the shop',
      desc: 'Remember to sell off the eggs',
    },
  ]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#F8F9FA' }}>
        <View style={styles.container}>
          <Text style={styles.heading}>My Tasks</Text>

          <View style={{ flex: 1 }}>
            <TodoList todos={todos} />
          </View>

          <Pressable
            style={styles.addBtn}
            onPress={() => router.navigate('/todo/add')}
          >
            <Ionicons name="add-circle" size={32} color={'orange'} />
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'stretch',
    padding: 20,
  },
  addBtn: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Open-Sans',
    marginBottom: 24,
  },
});
