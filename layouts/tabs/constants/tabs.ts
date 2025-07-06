import { TabDefinition } from '@/types'

export const tabs: TabDefinition[] = [
  { iconName: 'list', isProtected: true, name: 'my-feed', title: 'My Feed' },
  { iconName: 'search', isProtected: false, name: 'discover', title: 'Discover' },
  { iconName: 'pricetag', isProtected: true, name: 'sell', title: 'Sell' },
  { iconName: 'chatbubbles', isProtected: true, name: 'messages', title: 'Messages' },
  { iconName: 'person', isProtected: true, name: 'profile', title: 'Profile' }
]
