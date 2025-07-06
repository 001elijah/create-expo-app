import { Ionicons } from '@expo/vector-icons'
import { ComponentProps } from 'react'

export type TabDefinition = {
  iconName: ComponentProps<typeof Ionicons>['name']
  isProtected: boolean
  name: 'discover' | 'messages' | 'my-feed' | 'profile' | 'sell'
  title: string
}
