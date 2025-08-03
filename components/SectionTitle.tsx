import { StyleSheet, Text } from 'react-native'
import { scale } from '@/helpers/scale'
import { useGlobalStyle } from '@/hooks/useGlobalStyle'
import { useThemeStore } from '@/store/theme.store'

interface SectionTitleProps {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  const { activeColors } = useThemeStore()
  const basicStyles = useGlobalStyle()
  return <Text style={[basicStyles.FONT16, styles.heading, { color: activeColors.textPrimary }]}>{title}</Text>
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginBottom: scale(15),
    marginLeft: scale(15)
  }
})
