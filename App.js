import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "./src/hook/useTranslation";
import Button from "./src/components/Button";
import { useCookie } from "./src/hook/useCookie";

export default function App() {
  const { t, locale, setLocale } = useTranslation();
  const { cookieKey } = useCookie();

  if (!locale) return null;

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
