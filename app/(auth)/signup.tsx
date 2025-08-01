import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { Formik } from 'formik'
import { useState } from 'react'
import { Platform, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Yup from 'yup'
import { FormField, PrimaryButton } from '@/components'
import { SignUpFormValues } from '@/types'

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
})

export default function SignUpScreen() {
  const router = useRouter()
  const [emailSignUp, setEmailSignUp] = useState(false)

  const handleSignUp = (values: SignUpFormValues) => {
    console.log('Sign up values:', values, 'Email signup:', emailSignUp)
    // Handle sign up logic here
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <AntDesign color="black" name="left" size={24} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign up</Text>

        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSignUp} validationSchema={SignUpSchema}>
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

              <View style={styles.toggleContainer}>
                <Switch
                  onValueChange={setEmailSignUp}
                  thumbColor={emailSignUp ? '#ffffff' : '#ffffff'}
                  trackColor={{ false: '#e0e0e0', true: 'black' }}
                  value={emailSignUp}
                />
                <Text style={styles.toggleText}>
                  Sign up for email to access sales, exclusive drops & more from [Company name]. You can unsubscribe at
                  any time.
                </Text>
              </View>

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
  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginTop: 5
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
  input: {
    borderColor: 'black',
    borderRadius: 0,
    borderWidth: 1,
    fontSize: 16,
    marginTop: 8,
    padding: 15
  },
  inputContainer: {
    marginBottom: 20
  },
  inputError: {
    borderColor: '#ff0000'
  },
  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
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
  },
  toggleContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
    paddingRight: 10
  },
  toggleText: {
    color: 'black',
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 12
  }
})
