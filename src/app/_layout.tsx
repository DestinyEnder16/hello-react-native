import { Stack } from 'expo-router';
// NOTE: this is where the Global providers can be configured.

import { useFonts } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { TodoProvider } from '../context/TodoContext';
// 1. Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // IMPORTANT PROBLEM: Using of fonts is synchronous - we have to tell the app to wait until the fonts are loaded before displaying the main pages
  const [loaded, error] = useFonts({
    // NOTE: The fonts are loaded in the _layout.tsx file so that it can be accessible by all components easily
    'Open-Sans': require('../../assets/fonts/OpenSansFont.ttf'),
    ...Ionicons.font,
  });

  // SOLUTION: Using a splash screen

  useEffect(() => {
    if (loaded || error) {
      // NOTE: You can add a 2-second delay so you can actually see your work!
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // 3. Render nothing (keep splash screen up) while loading
  if (!loaded && !error) {
    return null;
  }

  return (
    <TodoProvider>
      <Stack screenOptions={{ headerShown: false }} />

      {/* IMPORTANT SOLUTION For my app, I used a light theme which affected the visibility of the status bar icons. To solve this I installed the expo-status bar plugin and add the following code */}
      <StatusBar barStyle={'dark-content'} />
    </TodoProvider>
  );
}
