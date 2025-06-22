import { Ionicons } from '@expo/vector-icons'
import { Tabs, useRouter } from 'expo-router'
import { Pressable, View } from 'react-native'
import { useAuth } from '../../hooks/useAuth'

export default function TabLayout() {
  const { checkAuthAndRun } = useAuth()
  const router = useRouter()

  const protectedRoutes = ['my-feed', 'sell', 'messages', 'profile']

  const handleProtectedTabPress = (e: any, route: string) => {
    e.preventDefault()
    checkAuthAndRun(() => router.push(`/${route}` as any))
  }

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <View style={{ flexDirection: 'row', marginLeft: 15 }}>
            <Ionicons color="black" name="menu" size={24} style={{ marginRight: 15 }} />
            <Ionicons color="blue" name="logo-react" size={24} />
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 15 }}>
            <Pressable>
              <Ionicons color="black" name="search" size={24} style={{ marginRight: 15 }} />
            </Pressable>
            <Pressable>
              <Ionicons color="black" name="heart" size={24} />
            </Pressable>
          </View>
        ),
        headerTitle: ''
      }}
    >
      <Tabs.Screen
        listeners={{ tabPress: e => handleProtectedTabPress(e, 'my-feed') }}
        name="my-feed"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="list" size={size} />,
          title: 'My Feed'
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="search" size={size} />,
          title: 'Discover'
        }}
      />
      <Tabs.Screen
        listeners={{ tabPress: e => handleProtectedTabPress(e, 'sell') }}
        name="sell"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="pricetag" size={size} />,
          title: 'Sell'
        }}
      />
      <Tabs.Screen
        listeners={{ tabPress: e => handleProtectedTabPress(e, 'messages') }}
        name="messages"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="chatbubbles" size={size} />,
          title: 'Messages'
        }}
      />
      <Tabs.Screen
        listeners={{ tabPress: e => handleProtectedTabPress(e, 'profile') }}
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="person" size={size} />,
          title: 'Profile'
        }}
      />
    </Tabs>
  )
}
