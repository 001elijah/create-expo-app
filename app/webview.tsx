import type { WebViewNavigation } from 'react-native-webview'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useRef, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview'

export default function WebViewScreen() {
  const router = useRouter()
  const { url } = useLocalSearchParams<{ url: string }>()
  const webViewRef = useRef<WebView>(null)
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    setCanGoBack(navState.canGoBack)
    setCanGoForward(navState.canGoForward)
  }

  const goBack = () => webViewRef.current?.goBack()
  const goForward = () => webViewRef.current?.goForward()
  const reload = () => webViewRef.current?.reload()

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.headerButton}>Close</Text>
        </TouchableOpacity>
        <View />
      </View>
      <WebView
        onNavigationStateChange={handleNavigationStateChange}
        ref={webViewRef}
        renderLoading={() => <ActivityIndicator size="large" style={styles.loader} />}
        source={{ uri: url || 'https://expo.dev' }}
        startInLoadingState={true}
      />
      <View style={styles.footer}>
        <View style={styles.footerNav}>
          <TouchableOpacity disabled={!canGoBack} onPress={goBack}>
            <Text style={[styles.footerButton, !canGoBack && styles.disabled]}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={!canGoForward} onPress={goForward}>
            <Text style={[styles.footerButton, !canGoForward && styles.disabled]}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerActions}>
          <TouchableOpacity onPress={reload}>
            <Text style={styles.footerButton}>↻</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  disabled: {
    color: '#ccc'
  },
  footer: {
    backgroundColor: 'white',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  footerActions: {
    flexDirection: 'row',
    gap: 20
  },
  footerButton: {
    color: '#007bff',
    fontSize: 22
  },
  footerNav: {
    flexDirection: 'row',
    gap: 20
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  headerButton: {
    color: '#007bff',
    fontSize: 16
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white'
  },
  safeArea: {
    backgroundColor: 'white',
    flex: 1
  }
})
