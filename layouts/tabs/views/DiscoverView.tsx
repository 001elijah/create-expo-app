import { ScrollView, StyleSheet } from 'react-native'
import { Carousel, Trending, TrendingSearches } from '@/layouts/tabs'
import { ICarouselItem } from '@/types'
import { carouselData } from '../constants/carouselData'

export const DiscoverView = () => {
  const handleCarouselItemPress = (item: ICarouselItem) => {
    // Navigation will be handled here later
    console.log('Navigate to carousel item:', item.id)
  }

  return (
    <ScrollView style={styles.container}>
      <Carousel data={carouselData} onItemPress={handleCarouselItemPress} />
      <TrendingSearches />
      <Trending />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
