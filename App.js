import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "./src/hook/useTranslation";

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t("cookie_1")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
