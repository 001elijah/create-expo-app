import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { HeaderLeft, HeaderRight } from '@/layouts/tabs'
import { TabDefinition } from '@/types/tabs/navigation'
import { useAuth } from './useAuth'

/**
 * Hook for tab navigation utilities
 */
export const useTabNavigation = () => {
  const { checkAuthAndRun } = useAuth()
  const router = useRouter()

  /**
   * Creates a protected tab press handler
   */
  const handleProtectedTabPress = (e: any, route: string) => {
    e.preventDefault()
    checkAuthAndRun(() => router.push(`/${route}` as any))
  }

  /**
   * Filters tabs based on authentication status
   */
  const filterTabsByAuth = (tabs: TabDefinition[], isAuthenticated: boolean) => {
    return tabs.filter(tab => !tab.isProtected || isAuthenticated)
  }

  /**
   * Gets tab configuration for a specific tab
   */
  const getTabConfig = (tab: TabDefinition) => ({
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <Ionicons color={color} name={tab.iconName} size={size} />
    ),
    title: tab.title
  })

  /**
   * Creates listeners object for protected tabs
   */
  const createTabListeners = (tab: TabDefinition) => {
    return tab.isProtected
      ? {
          tabPress: (e: any) => handleProtectedTabPress(e, tab.name)
        }
      : undefined
  }

  /**
   * Gets screen options for tabs
   */
  const getScreenOptions = () => ({
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight />,
    headerTitle: ''
  })

  return {
    createTabListeners,
    filterTabsByAuth,
    getScreenOptions,
    getTabConfig,
    handleProtectedTabPress
  }
}
