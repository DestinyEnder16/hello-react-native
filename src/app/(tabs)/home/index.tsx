import ProgressTab from '@/src/components/ProgressTab';
import { useTodos } from '@/src/context/TodoContext';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const hours = new Date().getHours();
let greeting = '';
if (hours < 12) {
  greeting = 'Good morning';
} else if (hours > 12 && hours < 16) {
  greeting = 'Good afternoon';
} else {
  greeting = 'Good evening';
}
export default function Index() {
  const { todos } = useTodos();
  const numTodos = todos.length;

  // Assuming 'todos' is your array of objects
  interface Todo {
    id: string;
    title: string;
    done: boolean;
    // Add other fields if necessary
  }

  const doneCount: number = (todos as Todo[]).filter(
    (todo: Todo) => todo.done === true
  ).length;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.greetingText}>{greeting}, Destiny</Text>
        </View>

        <ProgressTab numTodos={numTodos} doneTodos={doneCount} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
    height: '100%',
    padding: 20,
  },
  greetingText: {
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Open-Sans',
    lineHeight: 42,
  },
});
