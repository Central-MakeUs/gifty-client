/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';

/**
 * @param count: number;
 */
export const Badge = ({count}: {count: number}) => {
  return (
    <StyledBadge>
      <StyledText>{count}</StyledText>
    </StyledBadge>
  );
};

const StyledBadge = styled(View)`
  width: 24px;
  height: 24px;
  border-radius: 99px;

  justify-content: center;
  align-items: center;

  background-color: ${theme.palette.primary_normal};
`;

const StyledText = styled(Text)`
  color: ${theme.palette.white};
  ${theme.typo.Label3};
`;
