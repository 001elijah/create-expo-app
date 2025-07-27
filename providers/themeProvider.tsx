import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { useThemeStore } from '@/store/theme.store'
import { TTheme } from '@/types'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme()
  const { initializeSystemTheme } = useThemeStore()

  useEffect(() => {
    // Convert system color scheme to our theme type
    const systemTheme: TTheme = systemColorScheme === 'dark' ? 'dark' : 'light'

    // Initialize the store with system theme
    initializeSystemTheme(systemTheme)
  }, [systemColorScheme, initializeSystemTheme])

  return <>{children}</>
}
