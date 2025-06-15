import { ConfigContext, ExpoConfig } from '@expo/config'
import { version } from './package.json'

// Replace these with your EAS project ID and project slug.
// You can find them at https://expo.dev/accounts/[account]/projects/[project].
const EAS_PROJECT_ID = 'a5ab1ebd-181a-421a-9c55-2bb5ad8d78da'
const PROJECT_SLUG = 'create-expo-app'
const OWNER = '001elijah'

// App production config
const APP_NAME = 'create-expo-app'
const BUNDLE_IDENTIFIER = 'com.elijah001.createexpoapp'
const PACKAGE_NAME = 'com.elijah001.createexpoapp'
const ICON = './assets/icon.png'
const ADAPTIVE_ICON = './assets/adaptive-icon.png'
const SCHEME = 'app-scheme'

export default ({ config }: ConfigContext): ExpoConfig => {
  console.log('⚙️ Building app for environment:', process.env.APP_ENV)
  const { adaptiveIcon, bundleIdentifier, icon, name, packageName, scheme } = getDynamicAppConfig(
    (process.env.APP_ENV as 'development' | 'preview' | 'production') || 'development'
  )
  return {
    ...config,
    android: {
      adaptiveIcon: {
        backgroundColor: '#ffffff',
        foregroundImage: adaptiveIcon
      },
      edgeToEdgeEnabled: true,
      package: packageName
    },
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID
      }
    },
    icon: icon,
    ios: {
      bundleIdentifier: bundleIdentifier,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false
      },
      supportsTablet: true
    },
    name: name,
    newArchEnabled: true,
    orientation: 'portrait',
    owner: OWNER,
    runtimeVersion: {
      policy: 'appVersion'
    },
    scheme: scheme,
    slug: PROJECT_SLUG,
    splash: {
      backgroundColor: '#ffffff',
      image: './assets/splash-icon.png',
      resizeMode: 'contain'
    },
    updates: {
      url: 'https://u.expo.dev/a5ab1ebd-181a-421a-9c55-2bb5ad8d78da'
    },
    userInterfaceStyle: 'light',
    version,
    web: {
      favicon: './assets/favicon.png'
    }
  }
}

export const getDynamicAppConfig = (environment: 'development' | 'preview' | 'production') => {
  if (environment === 'production') {
    return {
      adaptiveIcon: ADAPTIVE_ICON,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      icon: ICON,
      name: APP_NAME,
      packageName: PACKAGE_NAME,
      scheme: SCHEME
    }
  }

  if (environment === 'preview') {
    return {
      adaptiveIcon: './assets/adaptive-icon-prev.png',
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      icon: './assets/icon-prev.png',
      name: `${APP_NAME} Preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      scheme: `${SCHEME}-prev`
    }
  }

  return {
    adaptiveIcon: './assets/adaptive-icon-dev.png',
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    icon: './assets/icon-dev.png',
    name: `${APP_NAME} Development`,
    packageName: `${PACKAGE_NAME}.dev`,
    scheme: `${SCHEME}-dev`
  }
}
