import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Pressable, View } from 'react-native'
import { images } from '@/constants/images'
import { scaleHeight, scaleImage, scaleVertical } from '@/helpers/scale'

export const HeaderLeft = () => (
  <View style={{ flexDirection: 'row', marginLeft: 15 }}>
    <Pressable>
      <Ionicons color="black" name="menu" size={24} style={{ marginRight: 15 }} />
    </Pressable>
    <Pressable>
      <Image
        source={images.light.full_logo_hor}
        style={[scaleImage(100, 10, scaleVertical(10)), { marginVertical: scaleHeight(8) }]}
      />
    </Pressable>
  </View>
)
