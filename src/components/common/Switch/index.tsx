/* eslint-disable react/react-in-jsx-scope */
import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';

// TODO 토글 애니메이션 적용

interface SwitchProps extends TouchableOpacityProps {
  switchState: boolean;
  setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * @default TouchableOpacityProps
 *
 * @param switchState: boolean;
 * @param setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;
 */
export const Switch = ({switchState, setSwitchState}: SwitchProps) => {
  return (
    <StyledSwitch
      activeOpacity={1}
      switchState={switchState}
      onPress={() => setSwitchState(!switchState)}>
      <Circle />
    </StyledSwitch>
  );
};

const StyledSwitch = styled(TouchableOpacity)<{
  switchState: boolean;
}>`
  width: 36px;
  height: 22px;
  border-radius: 99px;

  justify-content: center;
  align-items: ${({switchState}) => (switchState ? 'flex-end' : 'flex-start')};

  background-color: ${({switchState}) =>
    switchState
      ? `${theme.palette.primary_normal}`
      : `${theme.palette.fill_disable}`};
`;

const Circle = styled(View)`
  width: 18px;
  height: 18px;
  border-radius: 100px;

  background-color: ${theme.palette.white};

  margin: 2px;
`;
