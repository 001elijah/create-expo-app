import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useGlobalStyle } from '@/hooks/useGlobalStyle'
import { useThemeStore } from '@/store/theme.store'

export type ButtonSize = 'large' | 'medium' | 'small'
export type ButtonVariant = 'apple' | 'facebook' | 'ghost' | 'google' | 'link' | 'outline' | 'primary' | 'secondary'

interface PrimaryButtonProps {
  disabled?: boolean
  loading?: boolean
  onPress: () => void
  size?: ButtonSize
  style?: ViewStyle
  textStyle?: TextStyle
  title: string
  variant?: ButtonVariant
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  disabled = false,
  loading = false,
  onPress,
  size = 'medium',
  style,
  textStyle,
  title,
  variant = 'primary'
}) => {
  const basicStyles = useGlobalStyle()
  const { activeColors } = useThemeStore()

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      alignItems: 'center',
      justifyContent: 'center',
      ...styles.base,
      ...styles[size]
    }

    switch (variant) {
      case 'apple':
        return {
          ...baseStyle,
          backgroundColor: 'black',
          borderRadius: 5
        }
      case 'facebook':
        return {
          ...baseStyle,
          backgroundColor: '#3b5998'
        }
      case 'ghost':
        return {
          ...baseStyle,
          backgroundColor: activeColors.transparent
        }
      case 'google':
        return {
          ...baseStyle,
          backgroundColor: 'white',
          borderColor: activeColors.ring,
          borderWidth: 1
        }
      case 'link':
        return {
          backgroundColor: activeColors.transparent,
          width: 'auto'
        }
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: activeColors.transparent,
          borderColor: activeColors.ring,
          borderWidth: 1
        }
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: activeColors.accent
        }
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: activeColors.foreground,
          borderColor: activeColors.textSecondary,
          borderWidth: 1
        }
      default:
        return baseStyle
    }
  }

  const getTextStyle = (): TextStyle => {
    const baseTextStyle =
      variant === 'primary' ? { ...basicStyles.FONT_VER_14, color: activeColors.textContrast } : basicStyles.FONT_VER_14

    switch (variant) {
      case 'apple':
        return {
          ...basicStyles.FONT14,
          color: 'white',
          fontWeight: 'bold'
        }
      case 'facebook':
        return {
          ...basicStyles.FONT14,
          color: 'white',
          fontWeight: 'bold'
        }
      case 'ghost':
        return {
          ...baseTextStyle,
          color: activeColors.textPrimary
        }
      case 'google':
        return {
          ...basicStyles.FONT14,
          color: 'black',
          fontWeight: 'bold'
        }
      case 'link':
        return {
          ...basicStyles.FONT16,
          color: activeColors.link,
          textDecorationLine: 'underline'
        }
      case 'outline':
        return {
          ...baseTextStyle,
          color: activeColors.textPrimary
        }
      case 'primary':
        return {
          ...baseTextStyle,
          color: activeColors.textContrast
        }
      case 'secondary':
        return {
          ...baseTextStyle,
          color: activeColors.textPrimary
        }
      default:
        return baseTextStyle
    }
  }

  const getActivityIndicatorColor = () => {
    switch (variant) {
      case 'apple':
      case 'facebook':
        return 'white'
      case 'google':
        return 'black'
      case 'primary':
        return activeColors.textContrast
      default:
        return activeColors.textPrimary
    }
  }

  const buttonStyle = [getButtonStyle(), disabled && styles.disabled, style]

  const finalTextStyle = [getTextStyle(), disabled && styles.disabledText, textStyle]

  return (
    <TouchableOpacity activeOpacity={1} disabled={disabled || loading} onPress={onPress} style={buttonStyle}>
      {loading ? (
        <ActivityIndicator color={getActivityIndicatorColor()} size="small" />
      ) : (
        <Text style={finalTextStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    marginBottom: 10,
    width: '100%'
  },
  disabled: {
    opacity: 0.5
  },
  disabledText: {
    opacity: 0.7
  },
  large: {
    paddingHorizontal: 25,
    paddingVertical: 18
  },
  medium: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  small: {
    paddingHorizontal: 15,
    paddingVertical: 10
  }
})
