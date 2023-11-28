import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Task {
  uuid: string;
  description: string;
  project: string;
  tags: Array<string>;
}

const Tasks: Task[] = [
  { uuid: '92f9d0ed-de9f-4786-8cb5-3b826eb5577e', description: 'mark out area to be dug using pegs', project: 'home.garden.ditch', tags: [] },
  { uuid: '1b14ff83-c571-4783-9116-b6b6a672c9c2', description: 'remove turf in marked area and move to safe place', project: 'home.garden.ditch', tags: ['tools_needed'] },
  { uuid: '7b93af00-4400-4048-ad9b-d3cf91bfe28c', description: 'dig  trench to 300mm inside marked area', project: 'home.garden.ditch', tags: ['tools_needed'] },
]
