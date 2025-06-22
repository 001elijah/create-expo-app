import { StyleSheet, Text, View } from 'react-native'

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
