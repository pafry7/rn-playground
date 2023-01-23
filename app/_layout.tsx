import { Slot } from "expo-router";
import { Suspense } from "react";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { useFonts } from "expo-font";

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  return !loaded ? null : (
    <TamaguiProvider config={config}>
      <Suspense>
        <Slot />
      </Suspense>
    </TamaguiProvider>
  );
}
