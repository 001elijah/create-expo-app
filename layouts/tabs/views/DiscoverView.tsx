import { StyleSheet, View } from 'react-native'
import { Carousel, TrendingSearches } from '@/layouts/tabs'
import { ICarouselItem } from '@/types'
import { carouselData } from '../constants/carouselData'

export const DiscoverView = () => {
  const handleCarouselItemPress = (item: ICarouselItem) => {
    // Navigation will be handled here later
    console.log('Navigate to carousel item:', item.id)
  }

  return (
    <View style={styles.container}>
      <Carousel data={carouselData} onItemPress={handleCarouselItemPress} />
      <TrendingSearches />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
