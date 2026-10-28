import { StyleSheet, Text, View } from 'react-native';

export default function ImageBackgroundScreen() {
  return (
    <View style={styles.container}>
      <Text>Practica ImageBackground</Text>
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
