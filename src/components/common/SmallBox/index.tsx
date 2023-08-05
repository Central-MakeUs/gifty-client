/* eslint-disable react/react-in-jsx-scope */
import {
  Text,
  View,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';

type SmallBoxVariant = 'on' | 'off' | 'disable';
type SmallBoxType = 'line' | 'fill' | 'text';

interface SmallBoxProps extends TouchableOpacityProps {
  variant: SmallBoxVariant;
  type: SmallBoxType;
  disabled?: boolean;
}

const BORDER_COLOR = {
  on: {
    line: `${theme.palette.primary_normal}`,
    fill: 'transparent',
    text: 'transparent',
  },
  off: {
    line: `${theme.palette.line_normal}`,
    fill: 'transparent',
    text: 'transparent',
  },
  disable: {
    line: `${theme.palette.text_disable}`,
    fill: 'transparent',
    text: 'transparent',
  },
};

const TEXT_COLOR = {
  on: {
    line: `${theme.palette.primary_normal}`,
    fill: `${theme.palette.white}`,
    text: `${theme.palette.primary_normal}`,
  },
  off: {
    line: `${theme.palette.text_alternative}`,
    fill: `${theme.palette.text_alternative}`,
    text: `${theme.palette.text_alternative}`,
  },
  disable: {
    line: `${theme.palette.text_disable}`,
    fill: `${theme.palette.white}`,
    text: `${theme.palette.text_disable}`,
  },
};

const BUTTON_COLOR = {
  on: {
    line: `${theme.palette.white}`,
    fill: `${theme.palette.primary_normal}`,
    text: 'transparent',
  },
  off: {
    line: `${theme.palette.white}`,
    fill: `${theme.palette.fill_normal}`,
    text: 'transparent',
  },
  disable: {
    line: `${theme.palette.white}`,
    fill: `${theme.palette.fill_disable}`,
    text: 'transparent',
  },
};

/**
 * @default TouchableOpacityProps
 *
 * @param variant: 'on' | 'off' | 'disable';
 * @param type: 'line' | 'fill' | 'text';
 * @param disabled?: boolean;
 */
export const SmallBox = ({
  variant,
  type,
  disabled,
  children,
  ...props
}: SmallBoxProps) => {
  return (
    <Container>
      <StyledSmallBox
        activeOpacity={1}
        variant={variant}
        type={type}
        disabled={disabled}
        {...props}>
        <StyledText variant={variant} type={type} disabled={disabled}>
          {children}
        </StyledText>
      </StyledSmallBox>
    </Container>
  );
};

const StyledSmallBox = styled(TouchableOpacity)<{
  variant: SmallBoxVariant;
  type: SmallBoxType;
  disabled?: boolean;
}>`
  height: 32px;
  border-radius: 99px;
  border: ${({variant, type}) => `1px solid ${BORDER_COLOR[variant][type]}`};

  justify-content: center;
  align-items: center;

  background-color: ${({variant, type}) => `${BUTTON_COLOR[variant][type]}`};
`;

const StyledText = styled(Text)<{
  variant: SmallBoxVariant;
  type: SmallBoxType;
  disabled?: boolean;
}>`
  color: ${({variant, type}) => `${TEXT_COLOR[variant][type]}`};
  ${theme.typo.Body2};

  margin: 6px 12px;
`;

const Container = styled(View)`
  align-items: flex-start;
`;
