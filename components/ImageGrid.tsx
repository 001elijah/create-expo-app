import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native'
import { PrimaryButton } from '@/components/PrimaryButton'

interface ImageGridProps {
  images: { uri: string }[]
  onImagePress: () => void
}

export const ImageGrid = ({ images, onImagePress }: ImageGridProps) => {
  // Assuming an images array always has at least 5 items for this layout
  const firstTwoImages = images.slice(0, 2)
  const lastThreeImages = images.slice(2, 5) // Take up to 5 for the "View More" button on the last image

  return (
    <View>
      {/* Container for the first two larger images */}
      <View style={styles.firstTwoImagesRow}>
        {firstTwoImages.map((image, index) => (
          <TouchableOpacity activeOpacity={1} key={index} onPress={onImagePress} style={styles.largeImageWrapper}>
            <ImageBackground source={image.uri as ImageSourcePropType} style={styles.imageBackground} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Container for the last three square images */}
      <View style={styles.lastThreeImagesRow}>
        {lastThreeImages.map((image, index) => (
          <TouchableOpacity activeOpacity={1} key={index} onPress={onImagePress} style={styles.squareImageWrapper}>
            {/* +2 to maintain unique keys */}
            <ImageBackground source={image.uri as ImageSourcePropType} style={styles.imageBackground}>
              {/* The "View More" button goes on the last image (which is index 4 in the original array) */}
              {index + 2 === 4 && ( // Check against original index 4
                <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']} style={styles.gradientOverlay}>
                  <PrimaryButton onPress={onImagePress} size="small" title={'+ VIEW MORE'} variant="ghost" />
                </LinearGradient>
              )}
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  firstTwoImagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2
  },
  gradientOverlay: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  imageBackground: {
    flex: 1
  },
  largeImageWrapper: {
    aspectRatio: 0.75,
    width: '49.5%'
  },
  lastThreeImagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  squareImageWrapper: {
    aspectRatio: 1,
    width: '32.5%'
  }
})
