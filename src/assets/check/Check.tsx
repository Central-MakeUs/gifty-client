import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export const LineCheck = ({color}: {color?: string}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.6897 7.77586C18.0896 8.15675 18.105 8.78973 17.7241 9.18966L11.0575 16.1897C10.8687 16.3878 10.607 16.5 10.3333 16.5C10.0597 16.5 9.79794 16.3878 9.6092 16.1897L6.27586 12.6897C5.89498 12.2897 5.91042 11.6568 6.31035 11.2759C6.71028 10.895 7.34325 10.9104 7.72414 11.3103L10.3333 14.05L16.2759 7.81035C16.6567 7.41042 17.2897 7.39498 17.6897 7.77586Z"
        fill={color}
      />
    </Svg>
  );
};

export const EmptyCheckBox = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#E4E6E7" />
    </Svg>
  );
};

export const FillCheckBox = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Rect width="20" height="20" rx="4" fill="#0080FF" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6897 5.77586C16.0896 6.15675 16.105 6.78973 15.7241 7.18966L9.05747 14.1897C8.86873 14.3878 8.60701 14.5 8.33334 14.5C8.05966 14.5 7.79794 14.3878 7.6092 14.1897L4.27586 10.6897C3.89498 10.2897 3.91042 9.65675 4.31035 9.27586C4.71028 8.89498 5.34325 8.91042 5.72414 9.31035L8.33334 12.05L14.2759 5.81035C14.6567 5.41042 15.2897 5.39498 15.6897 5.77586Z"
        fill="white"
      />
    </Svg>
  );
};
