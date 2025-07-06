import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

export const HeaderLeft = () => (
  <View style={{ flexDirection: 'row', marginLeft: 15 }}>
    <Ionicons color="black" name="menu" size={24} style={{ marginRight: 15 }} />
    <Ionicons color="blue" name="logo-react" size={24} />
  </View>
)
