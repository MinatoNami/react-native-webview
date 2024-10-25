import { WebView } from "react-native-webview";

export default function RootLayout() {
  return (
    <WebView
      source={{
        uri: "https://www.d-dev.xyz/?channelId=dev6698844_49&type=3&goregister=0#/pages/tabBarPages/index/index",
      }}
    />
  );
}
