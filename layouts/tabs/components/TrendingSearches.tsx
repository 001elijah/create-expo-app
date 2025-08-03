import { ScrollView, StyleSheet, View } from 'react-native'
import { PrimaryButton, SectionTitle } from '@/components'
import { scale } from '@/helpers/scale'

export const TrendingSearches: React.FC = () => {
  const trendingSearches = [
    'shop all',
    'chrome hearts',
    'rick owens',
    'acronym',
    'balenciaga',
    'maison margiela gats',
    'stone island alligator',
    'acronym sacai',
    'stone island lucido',
    'off white katsu',
    'acronym s24'
  ]

  return (
    <View style={styles.container}>
      <SectionTitle title="Trending Searches" />
      <ScrollView contentContainerStyle={styles.buttonsContainer} horizontal showsHorizontalScrollIndicator={false}>
        {trendingSearches.map((term, index) => (
          <PrimaryButton
            key={index}
            onPress={() => console.log(`Searching for: ${term}`)}
            size="small"
            title={term.toUpperCase()}
            variant="arrow"
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingHorizontal: scale(15)
  },
  container: {
    marginTop: 20
  }
})
