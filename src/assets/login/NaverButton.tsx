import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export const NaverButton = () => {
  return (
    <Svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <Rect width="52" height="52" rx="26" fill="#00C85A" />
      <Path
        d="M32 20.0386H28.1906V26.5639L23.6573 20.0386H20V31.9614H23.9046V25.6646L28.2787 31.9614H32V20.0386Z"
        fill="white"
      />
    </Svg>
  );
};
