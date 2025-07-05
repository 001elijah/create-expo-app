import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false, presentation: 'modal' }} />
        <Stack.Screen name="webview" options={{ headerShown: false, presentation: 'modal' }} />
      </Stack>
    </>
  )
}
