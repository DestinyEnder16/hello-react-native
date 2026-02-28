import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from './TodoItem';

interface todoProps {
  todos: any[];
}

export default function TodoList({ todos }: todoProps) {
  // [{"desc": "By 6pm, give Mia the crumbles", "id": 1, "title": "Feed the dog"}]
  if (todos.length === 0) {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Start Adding Tasks</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else {
    return (
      // <View>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flex: 1 }}>
              {/* <Text style={styles.text}></Text> */}
              {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'stretch',
    width: '100%',
  },

  btn: {
    backgroundColor: 'rgb(36, 28, 191)',
    padding: 15,
  },

  btnText: {
    color: 'ivory',
    fontSize: 24,
    fontFamily: 'Open-Sans',
  },
  text: {
    fontFamily: 'Open-Sans',
    // fontStyle: 'italic',
  },
});
