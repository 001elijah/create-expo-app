import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { scale } from '@/helpers/scale'
import { useGlobalStyle } from '@/hooks/useGlobalStyle'
import { useThemeStore } from '@/store/theme.store'

export type ButtonSize = 'large' | 'medium' | 'small'
export type ButtonVariant =
  | 'apple'
  | 'arrow'
  | 'facebook'
  | 'ghost'
  | 'google'
  | 'link'
  | 'outline'
  | 'primary'
  | 'secondary'

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
      case 'arrow':
        return {
          ...baseStyle,
          borderColor: activeColors.foreground,
          borderWidth: scale(1),
          marginBottom: 0,
          marginRight: scale(8),
          paddingHorizontal: scale(8),
          paddingVertical: scale(5),
          width: 'auto'
        }
      case 'facebook':
        return {
          ...baseStyle,
          backgroundColor: activeColors.facebook
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
      case 'arrow':
        return {
          ...basicStyles.FONT_VER_14,
          fontWeight: 'normal'
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
      ) : variant === 'arrow' ? (
        <View style={styles.textContainer}>
          <Text style={finalTextStyle}>{title}</Text>
          <MaterialCommunityIcons color={activeColors.foreground} name="arrow-top-right" size={scale(20)} />
        </View>
      ) : (
        <Text style={finalTextStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(10),
    width: '100%'
  },
  disabled: {
    opacity: 0.5
  },
  disabledText: {
    opacity: 0.7
  },
  large: {
    paddingHorizontal: scale(25),
    paddingVertical: scale(18)
  },
  medium: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(15)
  },
  small: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(10)
  },
  textContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }
})
