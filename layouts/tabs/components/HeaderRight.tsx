import { Ionicons } from '@expo/vector-icons'
import { Pressable, View } from 'react-native'

export const HeaderRight = () => (
  <View style={{ flexDirection: 'row', marginRight: 15 }}>
    <Pressable>
      <Ionicons color="black" name="search" size={24} style={{ marginRight: 15 }} />
    </Pressable>
    <Pressable>
      <Ionicons color="black" name="heart" size={24} />
    </Pressable>
  </View>
)
