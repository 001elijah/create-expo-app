import { StyleSheet, Text, View } from 'react-native'

export default function MyFeedScreen() {
  return (
    <View style={styles.container}>
      <Text>My Feed</Text>
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
