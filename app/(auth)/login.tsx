import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { Formik } from 'formik'
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Yup from 'yup'
import { FormField, PrimaryButton } from '@/components'
import { LoginFormValues } from '@/types'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
})

export default function LoginScreen() {
  const router = useRouter()

  const handleLogin = (values: LoginFormValues) => {
    console.log('Login values:', values)
    // Handle login logic here
  }

  const handleForgotPassword = () => {
    router.push('/forgot-password')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <AntDesign color="black" name="left" size={24} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Log in</Text>

        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleLogin} validationSchema={LoginSchema}>
          {formikProps => (
            <View style={styles.form}>
              <FormField
                formik={formikProps}
                keyboardType="email-address"
                label="Email"
                name="email"
                placeholder="Enter your email"
              />

              <FormField
                formik={formikProps}
                label="Password"
                name="password"
                placeholder="Enter your password"
                secureTextEntry
              />

              <PrimaryButton onPress={handleForgotPassword} title="Forgot password?" variant="link" />

              <View style={styles.bottomContainer}>
                <View style={styles.dividerWithShadow} />
                <PrimaryButton onPress={() => formikProps.handleSubmit()} title="NEXT" variant="primary" />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    width: 40
  },
  bottomContainer: {
    marginTop: 'auto',
    paddingTop: 40
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20
  },
  dividerWithShadow: {
    backgroundColor: '#e0e0e0',
    height: 1,
    marginBottom: 20,
    marginHorizontal: -20,
    ...Platform.select({
      android: {
        borderWidth: 0,
        elevation: 0
      },
      ios: {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
          height: -1,
          width: 0
        },
        shadowOpacity: 0.1,
        shadowRadius: 2
      }
    }),
    width: 'auto'
  },
  form: {
    flex: 1
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? 15 : 10
  },
  nextButton: {
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    width: '100%'
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  safeArea: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20
  }
})
