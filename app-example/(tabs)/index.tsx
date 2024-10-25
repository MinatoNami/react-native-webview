import { WebView } from "react-native-webview";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <WebView
      source={{
        uri: "https://www.d-dev.xyz/?channelId=dev6698844_49&type=3&goregister=0#/pages/tabBarPages/index/index",
      }}
    />
  );
}
