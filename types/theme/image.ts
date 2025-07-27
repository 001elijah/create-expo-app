import { ImageSourcePropType } from 'react-native'

export interface IImages {
  dark: IThemeImagePalette
  light: IThemeImagePalette
}

export interface IThemeImagePalette {
  full_logo_hor: ImageSourcePropType
}
