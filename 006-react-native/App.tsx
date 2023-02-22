import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.box1}>
      </View>
      <View style={styles.box2}>
        <Text>안녕 승현아!</Text>
      </View>
      <View style={styles.box3}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: "coral"
  },
  box2: {
    flex: 7,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    flex: 1,
    backgroundColor: "darkred"
  },
});
