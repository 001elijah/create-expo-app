
import { create } from 'zustand'
import { images } from '@/constants/images'
import { colors } from '@/constants/theme'
import { IThemeState, TTheme } from '@/types'

export const useThemeStore = create<IThemeState>(set => ({
  activeColors: colors['light'], // Will be updated when system theme is detected
  activeImages: images['light'], // Will be updated when system theme is detected
  // New method to initialize with system theme
  initializeSystemTheme: (systemTheme: TTheme) =>
    set(state => ({
      ...state,
      activeColors: colors[systemTheme],
      activeImages: images[systemTheme],
      theme: systemTheme
    })),
  theme: 'light', // Will be updated when system theme is detected
  toggleTheme: (newTheme: TTheme) =>
    set(state => {
      return {
        ...state,
        activeColors: colors[newTheme],
        activeImages: images[newTheme],
        theme: newTheme
      }
    })
}))
