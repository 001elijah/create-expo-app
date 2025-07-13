import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICarouselItem } from '@/types'

const { width } = Dimensions.get('window')

interface CarouselItemProps {
  item: ICarouselItem
  onPress?: (item: ICarouselItem) => void
}

export const CarouselItem = ({ item, onPress }: CarouselItemProps) => {
  const handlePress = () => {
    onPress?.(item)
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress} style={styles.carouselItemContainer}>
      <ImageBackground source={item.image} style={styles.imageBackground}>
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)']} style={styles.gradientOverlay}>
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  carouselItemContainer: {
    alignItems: 'center',
    height: width * 0.9,
    justifyContent: 'center',
    width: width
  },
  gradientOverlay: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  imageBackground: {
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%'
  },
  itemSubtitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textContainer: {
    marginHorizontal: 5,
    paddingHorizontal: 5,
    paddingVertical: 60
  }
})
