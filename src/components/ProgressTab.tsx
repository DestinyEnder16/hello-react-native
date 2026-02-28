import { StyleSheet, Text, View } from 'react-native';
import ProgressBar from './ProgressBar';

interface progressProps {
  numTodos: number;
  doneTodos: number;
}

export default function ProgressTab(props: progressProps) {
  const percent = +props.doneTodos / +props.numTodos;
  return (
    <View style={styles.container}>
      <ProgressBar percent={percent} />

      <View style={{ gap: 8 }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Open-Sans',
            fontSize: 16,
          }}
        >
          Task Progress
        </Text>
        <Text
          style={{
            color: '#d1d8df',
            fontFamily: 'Open-Sans',
            fontSize: 16,
          }}
        >
          {props.doneTodos} of {props.numTodos} tasks completed
        </Text>

        {props.doneTodos === props.numTodos && (
          <Text
            style={{
              color: '#d1d8df',
              fontFamily: 'Open-Sans',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            You are right on track!!
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d77c7',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 20,
  },
});
