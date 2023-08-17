import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

export const AppleButton = ({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <Rect width="52" height="52" rx="26" fill="black" />
        <Path
          d="M22.9419 21.0256C22.9419 21.0256 19.2419 21.3276 19.1663 25.9338C19.1663 25.9338 19.0908 29.4073 21.8092 32.3523C21.8092 32.3523 23.1684 33.8625 24.6032 32.9563C24.6032 32.9563 26.1134 32.1257 27.7746 32.8808C27.7746 32.8808 29.1338 33.7115 30.1155 32.8808C30.1155 32.8808 32.0788 31.2196 32.8339 28.9542C32.8339 28.9542 30.493 28.2746 30.5686 25.5562C30.5686 25.5562 30.4175 23.744 32.3808 22.6113C32.3808 22.6113 31.1281 20.9501 29.3755 21.0256C29.3755 21.0256 28.4542 20.9501 27.3216 21.4786C27.3216 21.4786 26.3399 22.0072 24.9807 21.4031C24.9807 21.4031 23.9991 20.9501 22.9419 21.0256Z"
          fill="white"
        />
        <Path
          d="M25.8113 21.1011C25.8113 21.1011 29.0583 20.9501 28.9828 17.25C28.9828 17.25 25.5093 17.7786 25.8113 21.1011Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};
