import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import { useCarousel } from '@/hooks/useCarousel'
import { ICarouselItem, TCarouselData } from '@/types'
import { CarouselDots } from './CarouselDots'
import { CarouselItem } from './CarouselItem'

const { width } = Dimensions.get('window')

interface CarouselProps {
  data: TCarouselData
  onItemPress?: (item: ICarouselItem) => void
}

export const Carousel = ({ data, onItemPress }: CarouselProps) => {
  const { activeIndex, flatListRef, handleScroll, handleScrollBeginDrag, handleScrollEndDrag } = useCarousel(data)

  const handleItemPress = (item: ICarouselItem) => {
    console.log('Carousel item clicked:', item.id)
    onItemPress?.(item)
  }

  const renderCarouselItem = ({ item }: { item: ICarouselItem }) => (
    <CarouselItem item={item} onPress={handleItemPress} />
  )

  return (
    <View style={styles.carouselWrapper}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        onScroll={handleScroll}
        onScrollBeginDrag={handleScrollBeginDrag}
        onScrollEndDrag={handleScrollEndDrag}
        pagingEnabled
        ref={flatListRef}
        renderItem={renderCarouselItem}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
      <CarouselDots activeIndex={activeIndex} data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselWrapper: {
    height: width * 0.9,
    position: 'relative',
    width: '100%'
  }
})
