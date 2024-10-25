import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <WebView
      source={{
        uri: "https://www.google.com",
      }}
    />
  );
}
