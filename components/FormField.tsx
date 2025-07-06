import { StyleSheet, Text, TextInput, View } from 'react-native'
import { FormFieldProps } from '@/types'

export function FormField<T extends { [key: string]: string }>({ formik, label, name, ...props }: FormFieldProps<T>) {
  const { errors, handleBlur, handleChange, touched, values } = formik

  const hasError = touched[name] && errors[name] && values[name] !== ''

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        style={[styles.input, hasError ? styles.inputError : null]}
        value={values[name]}
        {...props}
      />
      {hasError && <Text style={styles.errorText}>{errors[name] as string}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginTop: 5
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
  }
})
