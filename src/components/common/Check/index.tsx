import {TouchableOpacity} from 'react-native';
import {styled} from 'styled-components';
import {LineCheck} from '../../../assets/check/Check';
import {theme} from '../../../styles/theme';

/**
 * @param isCheck: boolean;
 * @param setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
 */
export const Check = ({
  isCheck,
  setIsCheck,
}: {
  isCheck: boolean;
  setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper activeOpacity={1} onPress={() => setIsCheck(!isCheck)}>
      {isCheck ? (
        <LineCheck color={`${theme.palette.primary_normal}`} />
      ) : (
        <LineCheck color={`${theme.palette.text_assistive}`} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)`
  align-items: flex-start;
`;
