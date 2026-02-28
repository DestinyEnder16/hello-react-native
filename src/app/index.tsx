import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/*


return <Button title="Go to About" onPress={() => router.navigate('/about')} />;

*/

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

// Usage in your component:

export default function Index() {
  const router = useRouter();
  const greeting = getGreeting();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>{greeting} Destiny</Text>

        <Pressable style={styles.btn} onPress={() => router.navigate('/home')}>
          <Text style={styles.text}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: 20,
    backgroundColor: '#F8F9FA',
  },
  heading: {
    fontFamily: 'Open-Sans',
    fontSize: 24,
    // fontWeight: 'bold',
  },
  text: {
    fontFamily: 'Open-Sans',
    color: 'rgb(240, 233, 236)',
    fontWeight: 600,
  },

  btn: {
    backgroundColor: 'rgb(45, 50, 130)',
    padding: 20,
  },
});
