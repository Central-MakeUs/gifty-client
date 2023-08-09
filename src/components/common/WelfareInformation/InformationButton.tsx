/* eslint-disable react/react-in-jsx-scope */
import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';
import {Txt} from '../Common';
import {KeyOfPalette} from '../../../styles/theme/theme';

type InformationButtonVariant = 'default' | 'delete';

interface InformationButtonProps extends TouchableOpacityProps {
  variant: InformationButtonVariant;
}

const BUTTON_COLOR = {
  default: `${theme.palette.primary_assistive}`,
  delete: `${theme.palette.status_alert}`,
};

const TEXT_COLOR: Record<InformationButtonVariant, KeyOfPalette> = {
  default: 'primary_normal',
  delete: 'white',
};

export const InformationButton = ({
  variant,
  children,
}: InformationButtonProps) => {
  return (
    <Container>
      <StyledButton variant={variant}>
        <Txt typo="Label4" color={TEXT_COLOR[variant]}>
          {children}
        </Txt>
      </StyledButton>
    </Container>
  );
};

const Container = styled(View)`
  align-items: flex-start;
`;

const StyledButton = styled(TouchableOpacity)<{
  variant: InformationButtonVariant;
}>`
  padding: 4px 8px;
  border-radius: 100px;

  background-color: ${({variant}) => `${BUTTON_COLOR[variant]}`};
`;
