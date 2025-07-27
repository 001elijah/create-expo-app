import AntDesign from '@expo/vector-icons/AntDesign'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PrimaryButton } from '@/components'
import { images } from '@/constants/images'
import { scaleHeight, scaleImage, scaleVertical, scaleWidth } from '@/helpers/scale'

export default function AuthScreen() {
  const router = useRouter()

  const handleTermsPress = () => {
    router.push({ params: { url: 'https://example.com/terms' }, pathname: '/webview' })
  }

  const handlePrivacyPress = () => {
    router.push({ params: { url: 'https://example.com/privacy' }, pathname: '/webview' })
  }

  const handleSignUpPress = () => {
    router.push('/signup')
  }

  const handleLoginPress = () => {
    router.push('/login')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.closeButton}>
          <AntDesign color="black" name="close" size={18} />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={images.light.full_logo_hor}
          style={[scaleImage(310, 30, scaleVertical(30)), { marginBottom: scaleHeight(30) }]}
        />
        <Text style={styles.title}>Shop and sell on the world&#39;s largest fashion and streetwear community.</Text>
        <PrimaryButton onPress={handleSignUpPress} title="SIGN UP WITH EMAIL" variant="primary" />

        <PrimaryButton onPress={handleLoginPress} title="LOGIN WITH EMAIL" variant="outline" />
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>
        <PrimaryButton onPress={() => {}} title="Continue with Facebook" variant="facebook" />
        <PrimaryButton onPress={() => {}} title="Continue with Google" variant="google" />
        <PrimaryButton onPress={() => {}} title="Continue with Apple" variant="apple" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By creating an account, I accept [Company name]&#39;s{' '}
            <Text onPress={handleTermsPress} style={styles.link}>
              Terms of Service
            </Text>
            .
          </Text>
          <Text style={styles.footerText}>
            For [Company name]&#39;s,{' '}
            <Text onPress={handlePrivacyPress} style={styles.link}>
              Privacy Policy tap here
            </Text>
            .
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    width: 30
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20
  },
  divider: {
    backgroundColor: '#ccc',
    flex: 1,
    height: 1
  },
  dividerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%'
  },
  dividerText: {
    color: '#888',
    marginHorizontal: 10
  },
  footer: {
    paddingBottom: 20
  },
  footerText: {
    color: '#888',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center'
  },
  header: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? 15 : 10
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline'
  },
  safeArea: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  }
})
