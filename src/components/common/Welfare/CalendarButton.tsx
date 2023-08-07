import {TouchableOpacity} from 'react-native';
import {styled} from 'styled-components';
import {
  Calendar,
  DisabledCalendar,
  FillCalendar,
} from '../../../assets/welfare/Calendar';

/**
 * @param isSaved: boolean;
 * @param disabled?: boolean;
 */
export const CalendarButton = ({
  isSaved,
  disabled,
}: {
  isSaved: boolean;
  disabled?: boolean;
}) => {
  return (
    <Wrapper activeOpacity={1}>
      {isSaved && !disabled ? (
        <FillCalendar />
      ) : isSaved && disabled ? (
        <DisabledCalendar />
      ) : !isSaved && disabled ? null : (
        <Calendar />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)`
  align-items: flex-start;
`;
