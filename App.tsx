import { useCallback, useEffect, useState } from "react";

import { NativeRouter, Route, Routes } from "react-router-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDeviceContext } from "twrnc";
import * as SplashScreen from "expo-splash-screen";

import { tw } from "./src/libs";

import { useFonts } from "./src/hooks";

import { Home, NotFound } from "./src/pages";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useDeviceContext(tw);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (!isReady) return;

    await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NativeRouter>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </SafeAreaProvider>
    </NativeRouter>
  );
}
