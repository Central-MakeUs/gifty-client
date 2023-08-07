import {TouchableOpacity} from 'react-native';
import {styled} from 'styled-components';
import {
  EmptyWelfareCheckBox,
  FillWelfareCheckBox,
} from '../../../assets/welfare/WelfareCheck';

/**
 * @param isCheck: boolean;
 */
export const WelfareCheckBox = ({isCheck}: {isCheck: boolean}) => {
  return (
    <Wrapper activeOpacity={1}>
      {isCheck ? <FillWelfareCheckBox /> : <EmptyWelfareCheckBox />}
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)`
  align-items: flex-start;
`;
