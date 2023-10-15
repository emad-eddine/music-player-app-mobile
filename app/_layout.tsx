import { Stack } from "expo-router"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync()


export default function Layout() {

    const [fontsLoaded] = useFonts({
    'OS_Black': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OS_Medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'OS_Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OS_Light': require('./assets/fonts/OpenSans-Light.ttf'),
  });


   const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>

    </Stack>
  )
}