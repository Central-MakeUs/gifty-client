import {TouchableOpacity} from 'react-native';
import {styled} from 'styled-components';
import {EmptyCheckBox, FillCheckBox} from '../../../assets/check/Check';

/**
 * @param isCheck: boolean;
 * @param setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
 */
export const CheckBox = ({
  isCheck,
  setIsCheck,
}: {
  isCheck: boolean;
  setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper activeOpacity={1} onPress={() => setIsCheck(!isCheck)}>
      {isCheck ? <FillCheckBox /> : <EmptyCheckBox />}
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)`
  align-items: flex-start;
`;
