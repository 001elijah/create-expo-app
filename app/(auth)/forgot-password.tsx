import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { Formik } from 'formik'
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Yup from 'yup'

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required')
})

interface ForgotPasswordFormValues {
  email: string
}

export default function ForgotPasswordScreen() {
  const router = useRouter()

  const handleSend = (values: ForgotPasswordFormValues) => {
    console.log('Forgot password values:', values)
    // Handle forgot password logic here
    // After successful request, you might want to show a success message or navigate back
    router.back()
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.closeButton}>
          <AntDesign color="black" name="close" size={18} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Forgot password?</Text>
        <Text style={styles.description}>We&#39;ll email you with instructions on resetting your password.</Text>

        <Formik initialValues={{ email: '' }} onSubmit={handleSend} validationSchema={ForgotPasswordSchema}>
          {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  placeholder="Enter your email"
                  style={[
                    styles.input,
                    touched.email && errors.email && values.email !== '' ? styles.inputError : null
                  ]}
                  value={values.email}
                />
                {touched.email && errors.email && values.email !== '' && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.bottomContainer}>
                <View style={styles.dividerWithShadow} />
                <TouchableOpacity onPress={() => handleSubmit()} style={styles.sendButton}>
                  <Text style={styles.sendButtonText}>SEND</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: 'auto',
    paddingTop: 40
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
    backgroundColor: 'white',
    flex: 1,
    padding: 20
  },
  description: {
    color: '#666',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 30
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
    alignItems: 'flex-end',
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingHorizontal: 15,
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
  safeArea: {
    backgroundColor: 'white',
    flex: 1
  },
  sendButton: {
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    width: '100%'
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  }
})
