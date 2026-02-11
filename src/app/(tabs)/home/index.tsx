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
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.greetingText}>{greeting}, Destiny</Text>
        </View>
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
