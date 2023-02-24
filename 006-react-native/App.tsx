import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [working, setWorking] = useState(false);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const changeTxt = (payload: string) => setText(payload);
  const addToDo = () => {
    if (!text) return;
    setText("");
    alert(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : "#444" }}
          >
            WORK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{ ...styles.btnText, color: !working ? "white" : "#444" }}
          >
            TRAVEL
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        returnKeyType="done"
        onSubmitEditing={addToDo}
        placeholder={working ? "Add a To Do" : "Where do U wanna go?"}
        onChangeText={changeTxt}
        style={styles.input}
      ></TextInput>

      <ScrollView>
        <Text style={styles.test}>안녕</Text>
        <Text style={styles.test}>반가워</Text>
        <Text style={styles.test}>내</Text>
        <Text style={styles.test}>이름은</Text>
        <Text style={styles.test}>ㅇㅇㅇ이야</Text>
        <Text style={styles.test}>ㅇㅇㅇ</Text>
        <Text style={styles.test}>안녕!</Text>
        <Text style={styles.test}>스크롤 테스트</Text>
        <Text style={styles.test}>스크롤 테스트</Text>
        <Text style={styles.test}>스크롤 테스트</Text>
        <Text style={styles.test}>스크롤 테스트</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  btnText: {
    color: "white",
    fontSize: 32,
  },
  input: {
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "white",
  },
  test: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    marginTop: 10,
    padding: 20,
    color: "white",
  },
});
