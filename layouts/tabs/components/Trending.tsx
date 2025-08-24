import { StyleSheet, View } from 'react-native'
import { ImageGrid, SectionSubTitle, SectionTitle } from '@/components'
import { trendingApparelData } from '@/layouts/tabs/constants/trendingData'

export const Trending = () => {
  return (
    <View style={styles.container}>
      <SectionSubTitle subtitle="VINTAGE, CHROME HEARTS + MORE" />
      <SectionTitle title="Trending: Apparel" />
      <ImageGrid images={trendingApparelData} onImagePress={() => console.log('click')} />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 50
  },
  container: {
    marginTop: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  }
})
