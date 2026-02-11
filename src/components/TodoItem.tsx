import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface todoProps {
  todo: {
    title: string;
    desc: string;
  };
  //   id: number;
}

export default function TodoItem({ todo }: todoProps) {
  const [showDesc, setShowDesc] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.todo}>
      <View>
        <BouncyCheckbox
          isChecked={isChecked}
          onPress={() => setIsChecked((prev) => !prev)}
        />
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => setShowDesc((prev) => !prev)}>
          <Text
            style={[
              styles.title,
              isChecked
                ? { textDecorationLine: 'line-through', color: '#A9A9A9' }
                : { textDecorationLine: 'none' },
            ]}
          >
            {todo.title}
          </Text>
        </TouchableOpacity>
        {showDesc && (
          <Text
            style={[
              styles.desc,
              isChecked && {
                textDecorationLine: 'line-through',
                color: '#b4b1b1',
              },
            ]}
          >
            {todo.desc}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 12,

    // box shadow
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,

    // --- iOS SHADOWS (The "Glow" Look) ---
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4, // Pushes shadow down to create "lift"
    },
    shadowOpacity: 0.05, // Keep this very low (5%) for a subtle feel
    shadowRadius: 12, // A high radius creates that soft gradient

    // --- ANDROID SHADOW (The "Elevation" Look) ---
    elevation: 4, // Simulates physical height on Android
  },
  title: {
    fontFamily: 'Open-Sans',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'none',
  },
  desc: {
    marginTop: 4,
    fontWeight: 600,
    fontFamily: 'Open-Sans',
  },
});
