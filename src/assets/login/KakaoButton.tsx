import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

export const KakaoButton = ({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <Rect width="52" height="52" rx="26" fill="#FFE600" />
        <Path
          d="M25.9996 18.8296C21.5816 18.8296 18 21.582 18 24.978C18 27.1743 19.4996 29.0998 21.7534 30.1873L21.0538 32.9856C21.0211 33.116 21.1645 33.2186 21.2773 33.1465L24.5743 31.0274C25.0373 31.0915 25.5134 31.1264 26.0004 31.1264C30.4184 31.1264 34 28.374 34 24.978C34 21.582 30.4184 18.8296 25.9996 18.8296Z"
          fill="black"
        />
      </Svg>
    </TouchableOpacity>
  );
};
