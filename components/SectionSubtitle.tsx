import { StyleSheet, Text } from 'react-native'
import { scale } from '@/helpers/scale'
import { useGlobalStyle } from '@/hooks/useGlobalStyle'
import { useThemeStore } from '@/store/theme.store'

interface SectionTitleProps {
  subtitle: string
}

export const SectionSubTitle = ({ subtitle }: SectionTitleProps) => {
  const { activeColors } = useThemeStore()
  const basicStyles = useGlobalStyle()
  return (
    <Text style={[basicStyles.FONT_VER_14, styles.subtitle, { color: activeColors.textSecondary }]}>{subtitle}</Text>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    marginLeft: scale(15)
  }
})
