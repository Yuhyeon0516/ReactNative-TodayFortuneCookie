import { View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const LoadingView = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView autoPlay style={{ width: 150 }} source={require("../../assets/loading.json")} />
    </View>
  );
};

export default LoadingView;
