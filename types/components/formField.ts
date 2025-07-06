import { FormikProps } from 'formik'
import { TextInputProps } from 'react-native'

export interface FormFieldProps<T> extends TextInputProps {
  formik: FormikProps<T>
  label: string
  name: Extract<keyof T, string>
}
