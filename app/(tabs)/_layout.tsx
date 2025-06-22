import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { View } from 'react-native'

export default function TabLayout() {
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
            <Ionicons color="black" name="search" size={24} style={{ marginRight: 15 }} />
            <Ionicons color="black" name="heart" size={24} />
          </View>
        ),
        headerTitle: ''
      }}
    >
      <Tabs.Screen
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
        name="sell"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="pricetag" size={size} />,
          title: 'Sell'
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="chatbubbles" size={size} />,
          title: 'Messages'
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="person" size={size} />,
          title: 'Profile'
        }}
      />
    </Tabs>
  )
}
