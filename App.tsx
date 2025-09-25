import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Navigation } from "src/navigation";
import { ReduxProvider } from "src/redux/reduxProvider";
import "./global.css";

// SplashScreen.setOptions({
//   fade: true,
//   duration: 2500,
// });

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("./assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ReduxProvider>
        <Navigation />
      </ReduxProvider>
    </>
  );
}
