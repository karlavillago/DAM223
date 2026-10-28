import { StyleSheet, Text, View } from 'react-native';
export default function ActivityIndicatorScreen() {
  return (
    <View style={styles.container}>
      <Text>Practica ActivityIndicator</Text>
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
