import { StyleSheet, Text, View } from 'react-native'

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text>Discover</Text>
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
