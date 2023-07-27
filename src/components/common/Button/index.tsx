/* eslint-disable react/react-in-jsx-scope */
import {css, styled} from 'styled-components';
import {theme} from '../../../styles/theme';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {useState} from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'sub' | 'alert';
type ButtonType = 'solid' | 'line';
type ButtonSize = 'large' | 'default' | 'small';

interface ButtonProps extends TouchableOpacityProps {
  variant: ButtonVariant;
  type: ButtonType;
  size: ButtonSize;
  width?: number;
  height?: number;
  leftElement?: any;
  rightElement?: any;
  disabled?: boolean;
}

const TEXT_COLOR = {
  solid: {
    normal: {
      primary: `${theme.palette.white}`,
      secondary: `${theme.palette.white}`,
      sub: `${theme.palette.text_alternative}`,
      alert: `${theme.palette.white}`,
    },
    active: {
      primary: `${theme.palette.white}`,
      secondary: `${theme.palette.white}`,
      sub: `${theme.palette.text_alternative}`,
      alert: `${theme.palette.white}`,
    },
    disabled: `${theme.palette.white}`,
  },
  line: {
    normal: {
      primary: `${theme.palette.primary_normal}`,
      secondary: `${theme.palette.secondary_normal}`,
      sub: `${theme.palette.text_alternative}`,
      alert: '',
    },
    active: {
      primary: `${theme.palette.primary_strong}`,
      secondary: `${theme.palette.secondary_strong}`,
      sub: `${theme.palette.text_alternative}`,
      alert: '',
    },
    disabled: `${theme.palette.line_disable}`,
  },
};

const LINE_COLOR = {
  normal: {
    primary: `${theme.palette.primary_normal}`,
    secondary: `${theme.palette.secondary_normal}`,
    sub: `${theme.palette.text_assistive}`,
    alert: '',
  },
  active: {
    primary: `${theme.palette.primary_strong}`,
    secondary: `${theme.palette.secondary_strong}`,
    sub: `${theme.palette.text_alternative}`,
    alert: '',
  },
  disabled: `${theme.palette.line_disable}`,
};

const BUTTON_COLOR = {
  solid: {
    normal: {
      primary: `${theme.palette.primary_normal}`,
      secondary: `${theme.palette.secondary_normal}`,
      sub: `${theme.palette.fill_normal}`,
      alert: `${theme.palette.status_alert}`,
    },
    active: {
      primary: `${theme.palette.primary_strong}`,
      secondary: `${theme.palette.secondary_strong}`,
      sub: `${theme.palette.fill_strong}`,
      alert: `${theme.palette.status_alert}`,
    },
    disabled: {
      primary: `${theme.palette.fill_disable}`,
      secondary: `${theme.palette.fill_disable}`,
      sub: `${theme.palette.fill_disable}`,
      alert: `${theme.palette.fill_disable}`,
    },
  },
  line: {
    normal: {
      primary: 'transparent',
      secondary: 'transparent',
      sub: 'transparent',
      alert: 'transparent',
    },
    active: {
      primary: `${theme.palette.primary_pressed}`,
      secondary: `${theme.palette.secondary_pressed}`,
      sub: `${theme.palette.fill_pressed}`,
      alert: `${theme.palette.status_alert}`,
    },
    disabled: {
      primary: 'transparent',
      secondary: 'transparent',
      sub: 'transparent',
      alert: 'transparent',
    },
  },
};

const BUTTON_TYPO = {
  small: theme.typo.Body1,
  default: theme.typo.Body1,
  large: theme.typo.Body1,
};

/**
 * @default button: (button 태그 속성 그대로)
 *
 * @param varient 버튼 종류 'default' | 'glass' | 'white' | 'admin' | 'admin_stroke' | 'admin_navy'
 * @param webWidth? web 버튼 너비
 * @param mobileWidth? mobile 버튼 너비 (default 100%)
 */
export const NewButton = ({
  children,
  variant,
  type,
  size,
  width,
  height,
  leftElement,
  rightElement,
  disabled,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Container>
      <StyledButton
        activeOpacity={1}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        isPressed={isPressed}
        variant={variant}
        type={type}
        size={size}
        width={width}
        height={height}
        disabled={disabled}
        {...props}>
        {leftElement}
        <StyledText
          variant={variant}
          type={type}
          size={size}
          isPressed={isPressed}
          disabled={disabled}>
          {children}
        </StyledText>
        {rightElement}
      </StyledButton>
    </Container>
  );
};

const StyledButton = styled(TouchableOpacity)<{
  isPressed: boolean;
  variant: ButtonVariant;
  type: ButtonType;
  size: ButtonSize;
  width?: number;
  height?: number;
  disabled?: boolean;
}>`
  gap: 8px;
  padding: 12px 24px;

  width: ${({width}) => (width ? `${width}px` : 'auto')};
  height: ${({height}) => (height ? `${height}px` : 'auto')};

  background-color: ${({variant, type}) =>
    `${BUTTON_COLOR[type].normal[variant]}`};

  border-color: ${({variant}) => `${LINE_COLOR.normal[variant]}`};
  border-width: 1px;

  border-radius: 99px;

  ${({isPressed, variant, type}) =>
    isPressed
      ? css`
          background-color: ${BUTTON_COLOR[type].active[variant]};
        `
      : css``};

  ${({disabled, variant, type}) =>
    disabled
      ? css`
          background-color: ${BUTTON_COLOR[type].disabled[variant]};
          border-color: ${type === 'solid'
            ? 'transparent'
            : `${LINE_COLOR.normal[variant]}`};
        `
      : css``};
`;

const StyledText = styled(Text)<{
  variant: ButtonVariant;
  type: ButtonType;
  size: ButtonSize;
  isPressed: boolean;
  disabled?: boolean;
}>`
  ${BUTTON_TYPO.default};
  color: ${({variant, type}) => `${TEXT_COLOR[type].normal[variant]}`};

  ${({isPressed, variant, type}) =>
    isPressed
      ? css`
          color: ${TEXT_COLOR[type].active[variant]};
        `
      : css``};

  ${({disabled, type}) =>
    disabled
      ? css`
          color: ${TEXT_COLOR[type].disabled};
        `
      : css``};
`;

const Container = styled(View)`
  align-items: flex-start;
`;
