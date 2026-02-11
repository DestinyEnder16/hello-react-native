import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Add() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <View style={styles.titleContainer}>
              <TextInput
                style={styles.titleInput}
                placeholder="What needs to be done?"
                autoFocus={true} // Opens the keyboard automatically
              ></TextInput>
            </View>
            <View style={styles.field}>
              <TextInput
                style={styles.description}
                placeholder="Add some details..."
                placeholderTextColor="#A9A9A9"
                multiline={true} // Allows multiple lines
                numberOfLines={4} // Sets the initial visible height
                textAlignVertical="top" // Ensures text starts at the top (Android)
                returnKeyType="next" // Changes the keyboard "Enter" key to a "Next" icon
                // value={description}
                // onChangeText={setDescription}
              />
            </View>
          </View>

          <View>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Open-Sans',
    textAlign: 'center',
    paddingVertical: 30,
    maxWidth: 72,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 4,
  },
  titleInput: {
    fontSize: 28, // Large, impactful size
    fontWeight: '700', // Bold weight for visual hierarchy
    color: '#1A1A1A', // Near-black for high contrast
    paddingVertical: 12,
    borderBottomWidth: 1, // Only a bottom border for a "clean" feel
    fontFamily: 'Open-Sans',
    borderBottomColor: '#EEE', // Very light grey, barely there
  },
  description: {
    height: 144,
    padding: 10,
    fontFamily: 'Open-Sans',
  },
  label: {
    fontSize: 24,
    fontWeight: 500,
  },
  field: {
    marginBottom: 24,
    borderWidth: 1,
    borderRadius: 12,
  },
  btn: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Open-Sans',
  },
});
