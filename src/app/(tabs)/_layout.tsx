import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF', // Pure white tab bar
          borderTopWidth: 1,
          borderTopColor: '#F2F2F2',
          elevation: 0, // Removes Android shadow for a cleaner look
        },
        sceneStyle: {
          backgroundColor: '#1a7de0', // The slightly off-white background
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color="#007AFF" />
          ),
        }}
      />

      <Tabs.Screen
        name="todo"
        options={{
          title: 'Todo',
          tabBarIcon: ({ color }) => (
            <Ionicons name="checkmark-circle" size={24} color="#007AFF" />
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={'#007AFF'} />
          ),
        }}
      />
    </Tabs>
  );
}
