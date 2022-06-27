import React from "react";
import { View, ImageBackground } from "react-native";

const Privacypolicy = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <ImageBackground source="https://crowdbotics-slack-dev.s3.amazonaws.com/media/components/screens/privacy-policy_EzOCocN.png" resizeMode="contain" style={{
      flex: 1,
      justifyContent: "center",
      left: 11,
      top: 13
    }}>
        </ImageBackground>
      </View>;
};

export default Privacypolicy;