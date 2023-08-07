/* eslint-disable react/react-in-jsx-scope */
import {css, styled} from 'styled-components';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import {theme, KeyOfTypo} from '../../../styles/theme/theme';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {useState} from 'react';

type ButtonVariant = 'default' | 'gradation' | 'sub';
type ButtonType = 'fill' | 'long';

interface LongButtonProps extends Omit<LinearGradientProps, 'colors'> {
  variant: ButtonVariant;
  type: ButtonType;
  height?: number;
  typo?: KeyOfTypo;
  disabled?: boolean;
  onPressIn?: ((event: GestureResponderEvent) => void) | undefined;
}

const TEXT_COLOR = {
  normal: {
    default: `${theme.palette.white}`,
    gradation: `${theme.palette.white}`,
    sub: `${theme.palette.primary_normal}`,
  },
  active: {
    default: `${theme.palette.white}`,
    gradation: `${theme.palette.white}`,
    sub: `${theme.palette.primary_strong}`,
  },
  disabled: `${theme.palette.white}`,
};

const BUTTON_COLOR = {
  normal: {
    default: [
      `${theme.palette.primary_normal}`,
      `${theme.palette.primary_normal}`,
    ],
    gradation: ['#00AAFF', '#0080FF'],
    sub: [
      `${theme.palette.primary_assistive}`,
      `${theme.palette.primary_assistive}`,
    ],
  },
  active: {
    default: [
      `${theme.palette.primary_strong}`,
      `${theme.palette.primary_strong}`,
    ],
    gradation: [
      `${theme.palette.secondary_normal}`,
      `${theme.palette.secondary_normal}`,
    ],
    sub: [
      `${theme.palette.primary_pressed}`,
      `${theme.palette.primary_pressed}`,
    ],
  },
  disabled: {
    default: [`${theme.palette.fill_disable}`, `${theme.palette.fill_disable}`],
    gradation: [
      `${theme.palette.fill_disable}`,
      `${theme.palette.fill_disable}`,
    ],
    sub: [`${theme.palette.fill_disable}`, `${theme.palette.fill_disable}`],
  },
};

/**
 * @default TouchableOpacityProps
 * @param variant 'default' | 'gradation' | 'sub';
 * @param type 'fill' | 'long';
 * @param height?: number;
 * @param typo?: keyOfTypo;
 * @param disabled?
 * @param onPressIn?: ((event: GestureResponderEvent) => void) | undefined;
 */
export const LongButton = ({
  children,
  variant,
  type,
  height,
  typo,
  disabled,
  onPressIn,
}: LongButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    onPressIn;
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <StyledTouchableOpacity
      activeOpacity={1}
      type={type}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <StyledLinearGradient
        colors={
          disabled
            ? [...BUTTON_COLOR.disabled[variant]]
            : isPressed
            ? [...BUTTON_COLOR.active[variant]]
            : [...BUTTON_COLOR.normal[variant]]
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        variant={variant}
        type={type}
        height={height}>
        <StyledText
          variant={variant}
          type={type}
          isPressed={isPressed}
          typo={typo}
          disabled={disabled}>
          {children}
        </StyledText>
      </StyledLinearGradient>
    </StyledTouchableOpacity>
  );
};

const StyledLinearGradient = styled(LinearGradient)<{
  variant: ButtonVariant;
  type: ButtonType;
  width?: number;
  height?: number;
}>`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${({height}) => (height ? `${height}px` : '52px')};

  border-radius: ${({type}) => (type === 'long' ? '8px' : '0px')};
`;

const StyledText = styled(Text)<{
  variant: ButtonVariant;
  type: ButtonType;
  isPressed: boolean;
  typo?: KeyOfTypo;
  disabled?: boolean;
}>`
  ${({typo}) => (typo ? `${theme.typo[typo]}` : `${theme.typo.Label1}`)};

  color: ${({variant}) => `${TEXT_COLOR.normal[variant]}`};

  padding: 8px 12px;

  ${({isPressed, variant}) =>
    isPressed
      ? css`
          color: ${TEXT_COLOR.active[variant]};
        `
      : css``};

  ${({disabled}) =>
    disabled
      ? css`
          color: ${TEXT_COLOR.disabled};
        `
      : css``};
`;

const StyledTouchableOpacity = styled(TouchableOpacity)<{
  type: ButtonType;
}>`
  align-items: flex-start;
  margin: ${({type}) => (type === 'long' ? '0px 16px 0px 16px' : '0px')};
`;
