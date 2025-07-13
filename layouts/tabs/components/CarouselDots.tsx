import { StyleSheet, View } from 'react-native'
import { TCarouselData } from '@/types'

interface CarouselDotsProps {
  activeIndex: number
  data: TCarouselData
}

export const CarouselDots = ({ activeIndex, data }: CarouselDotsProps) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, { backgroundColor: index === activeIndex ? 'white' : 'rgba(255,255,255,0.5)' }]}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    borderRadius: 4,
    height: 8,
    marginHorizontal: 4,
    width: 8
  },
  paginationContainer: {
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  }
})
