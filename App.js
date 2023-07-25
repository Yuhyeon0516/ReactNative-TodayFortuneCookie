import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "./src/hook/useTranslation";
import Button from "./src/components/Button";
import { useCookie } from "./src/hook/useCookie";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import LoadingView from "./src/components/LoadingView";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { t, locale, setLocale } = useTranslation();
  const { cookieKey } = useCookie();
  const [isLoaded, setIsLoaded] = useState(false);

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
    <View style={styles.container}>
      <Text>{t(cookieKey)}</Text>

      <View style={styles.buttonsContainer}>
        <Button onPress={() => setLocale("en")} isSlected={locale === "en"} text="EN" />
        <Button onPress={() => setLocale("es")} isSlected={locale === "es"} text="ES" />
        <Button onPress={() => setLocale("ja")} isSlected={locale === "ja"} text="JA" />
        <Button onPress={() => setLocale("ko")} isSlected={locale === "ko"} text="KO" />
        <Button onPress={() => setLocale("zh")} isSlected={locale === "zh"} text="ZH" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
