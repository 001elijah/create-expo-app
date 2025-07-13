import { Tabs } from 'expo-router'
import { useTabNavigation } from '@/hooks/useTabNavigation'
import { tabs } from '@/layouts/tabs'

export default function TabLayout() {
  const { createTabListeners, getScreenOptions, getTabConfig } = useTabNavigation()

  return (
    <Tabs screenOptions={getScreenOptions()}>
      {tabs.map(tab => (
        <Tabs.Screen key={tab.name} listeners={createTabListeners(tab)} name={tab.name} options={getTabConfig(tab)} />
      ))}
    </Tabs>
  )
}
