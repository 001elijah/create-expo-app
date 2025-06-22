import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AuthScreen() {
  const router = useRouter()

  const handleTermsPress = () => {
    router.push({ params: { url: 'https://example.com/terms' }, pathname: '/webview' })
  }

  const handlePrivacyPress = () => {
    router.push({ params: { url: 'https://example.com/privacy' }, pathname: '/webview' })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.closeButton}>
          <AntDesign color="black" name="close" size={18} />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>[Company Logo]</Text>
        <Text style={styles.title}>Shop and sell on the world&#39;s largest fashion and streetwear community.</Text>
        <TouchableOpacity style={[styles.button, styles.signUpButton]}>
          <Text style={styles.signUpButtonText}>SIGN UP WITH EMAIL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Text style={styles.loginButtonText}>LOGIN WITH EMAIL</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={styles.loginButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
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
  appleButton: {
    backgroundColor: 'black',
    borderRadius: 5
  },
  button: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    width: '100%'
  },
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
  facebookButton: {
    backgroundColor: '#3b5998'
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
  googleButton: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1
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
  loginButton: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1
  },
  loginButtonText: {
    color: 'black',
    fontWeight: 'bold'
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20
  },
  safeArea: {
    backgroundColor: 'white',
    flex: 1
  },
  signUpButton: {
    backgroundColor: '#007bff'
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  }
})
