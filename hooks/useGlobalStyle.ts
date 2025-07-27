import { StyleSheet } from 'react-native'
import { scale, scaleHeight } from '@/helpers/scale'
import { useThemeStore } from '@/store/theme.store'

export const useGlobalStyle = () => {
  const { activeColors } = useThemeStore()

  return StyleSheet.create({
    FONT14: {
      fontFamily: 'Poppins_400Regular',
      fontSize: scale(15),
      fontStyle: 'normal',
      letterSpacing: scale(0.14),
      lineHeight: scale(24)
    },
    FONT16: {
      fontFamily: 'Poppins_400Regular',
      fontSize: scale(16),
      fontStyle: 'normal',
      letterSpacing: scale(0.16),
      lineHeight: scale(22)
    },
    FONT_ALARM: {
      color: activeColors.alarm
    },
    FONT_ERROR: {
      color: activeColors.error
    },
    FONT_PRIMARY: {
      color: activeColors.textPrimary
    },
    FONT_SECONDARY: {
      color: activeColors.textSecondary
    },
    FONT_VER_14: {
      color: activeColors.textPrimary,
      fontFamily: 'Menlo',
      fontSize: scaleHeight(15),
      fontWeight: 'bold',
      letterSpacing: scale(0.14),
      lineHeight: scaleHeight(24)
    },
    UNDERLINE: {
      textDecorationLine: 'underline'
    }
  })
}
