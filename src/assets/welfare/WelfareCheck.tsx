import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export const EmptyWelfareCheckBox = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.6897 11.7759C22.0896 12.1567 22.105 12.7897 21.7241 13.1897L15.0575 20.1897C14.8687 20.3878 14.607 20.5 14.3333 20.5C14.0597 20.5 13.7979 20.3878 13.6092 20.1897L10.2759 16.6897C9.89498 16.2897 9.91042 15.6568 10.3103 15.2759C10.7103 14.895 11.3433 14.9104 11.7241 15.3103L14.3333 18.05L20.2759 11.8103C20.6567 11.4104 21.2897 11.395 21.6897 11.7759Z"
        fill="#D7D9DA"
      />
      <Rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E4E6E7" />
    </Svg>
  );
};

export const FillWelfareCheckBox = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Rect width="32" height="32" rx="8" fill="#0080FF" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.6897 11.7759C22.0896 12.1567 22.105 12.7897 21.7241 13.1897L15.0575 20.1897C14.8687 20.3878 14.607 20.5 14.3333 20.5C14.0597 20.5 13.7979 20.3878 13.6092 20.1897L10.2759 16.6897C9.89498 16.2897 9.91042 15.6568 10.3103 15.2759C10.7103 14.895 11.3433 14.9104 11.7241 15.3103L14.3333 18.05L20.2759 11.8103C20.6567 11.4104 21.2897 11.395 21.6897 11.7759Z"
        fill="white"
      />
    </Svg>
  );
};
