/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';

type ChipsVariant = 'primary' | 'secondary' | 'neutral' | 'disable';

const BORDER_COLOR = {
  primary: `${theme.palette.primary_assistive}`,
  secondary: `${theme.palette.primary_assistive}`,
  neutral: `${theme.palette.line_normal}`,
  disable: `${theme.palette.line_disable}`,
};

const TEXT_COLOR = {
  primary: `${theme.palette.primary_normal}`,
  secondary: `${theme.palette.secondary_normal}`,
  neutral: `${theme.palette.text_alternative}`,
  disable: `${theme.palette.text_disable}`,
};

/**
 * @param count: number;
 */
export const Chips = ({
  variant,
  text,
}: {
  variant: ChipsVariant;
  text: string;
}) => {
  return (
    <Container>
      <StyledChips variant={variant}>
        <StyledText variant={variant}>{text}</StyledText>
      </StyledChips>
    </Container>
  );
};

const StyledChips = styled(View)<{
  variant: ChipsVariant;
}>`
  height: 26px;
  border-radius: 99px;
  border: ${({variant}) => `1px solid ${BORDER_COLOR[variant]}`};

  justify-content: center;
  align-items: center;

  background-color: transparent;
`;

const StyledText = styled(Text)<{
  variant: ChipsVariant;
}>`
  color: ${({variant}) => `${TEXT_COLOR[variant]}`};
  ${theme.typo.Label3};

  margin: 4px 8px;
`;

const Container = styled(View)`
  align-items: flex-start;
`;
