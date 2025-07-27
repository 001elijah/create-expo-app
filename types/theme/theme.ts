import { IColorPalette } from './color'
import { IThemeImagePalette } from './image'
export interface IThemeState {
  activeColors: IColorPalette
  activeImages: IThemeImagePalette
  initializeSystemTheme: (systemTheme: TTheme) => void
  theme: TTheme
  toggleTheme: (newTheme: TTheme) => void
}

export type TTheme = 'dark' | 'light'
