import { StyleSheet, Text, View } from 'react-native'

export default function SellScreen() {
  return (
    <View style={styles.container}>
      <Text>Sell</Text>
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
