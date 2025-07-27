import { Stack } from 'expo-router'
import { ThemeProvider } from '@/providers/themeProvider'

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false, presentation: 'modal' }} />
        <Stack.Screen name="webview" options={{ headerShown: false, presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  )
}
