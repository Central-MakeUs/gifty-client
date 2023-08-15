/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
import {Txt} from '../Common';
import {TimeType} from './index';

export const TimeButton = ({
  timeType,
  day,
}: {
  timeType: Omit<TimeType, 'none'>;
  day?: string;
}) => {
  return (
    <Wrapper timeType={timeType}>
      <Txt
        typo="Label4"
        color={timeType === 'begin' ? 'secondary_normal' : 'primary_normal'}>
        {`${day} ${timeType === 'begin' ? '부터' : '까지'}`}
      </Txt>
    </Wrapper>
  );
};

const Wrapper = styled(View)<{
  timeType: Omit<TimeType, 'none'>;
}>`
  background-color: ${({timeType}) =>
    timeType === 'begin'
      ? `${theme.palette.secondary_assistive}`
      : `${theme.palette.primary_assistive}`};

  padding: 4px 8px;
  height: 26px;
  border-radius: 99px;
`;
