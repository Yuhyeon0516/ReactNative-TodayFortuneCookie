import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useTranslation } from "./src/hook/useTranslation";
import Button from "./src/components/Button";
import { useCookie } from "./src/hook/useCookie";
import LoadingView from "./src/components/LoadingView";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { t, locale, setLocale, format } = useTranslation();
  const { cookieKey } = useCookie();
  const [isLoaded, setIsLoaded] = useState(false);

  const y = new Date().getFullYear();
  const m = new Date().getMonth() + 1;
  const d = new Date().getDate();
  const todayText = format(t("today_is"), y, m, d);

  const locales = ["en", "es", "ja", "ko", "zh"];

  useEffect(() => {
    if (cookieKey) {
      setIsLoaded(true);
    }
  }, [cookieKey]);

  useEffect(() => {
    if (locale !== null) {
      SplashScreen.hideAsync();
    }
  }, [locale]);

  if (!isLoaded) return <LoadingView />;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <LottieView autoPlay source={require("./assets/background.json")} resizeMode="cover" style={{ position: "absolute", zIndex: -1 }} />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.topContainer}>
            <Text style={styles.todayText}>{todayText}</Text>
            <Text style={styles.cookieText}>{t(cookieKey)}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.buttonsContainer}>
              {locales.map((loc, index) => (
                <Button key={loc} onPress={() => setLocale(loc)} isSlected={locale === loc} text={loc.toUpperCase()} />
              ))}
            </View>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  todayText: {
    position: "absolute",
    top: 70,
    fontSize: 13,
    color: "#bbbbbb",
  },
  cookieText: {
    fontSize: 22,
    color: "#eeeeee",
    textAlign: "center",
    marginHorizontal: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 25,
  },
});
