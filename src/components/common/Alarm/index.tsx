/* eslint-disable react/react-in-jsx-scope */
import {Image, View} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
import {Flex, Txt} from '../Common';
import Begin from '../../../../assets/images/asset/as-alr.png';
import End from '../../../../assets/images/asset/as-exc.png';
import Logo from '../../../../assets/images/asset/as-logo.png';

type AlarmType = 'begin' | 'end' | 'activity';

interface AlarmProps {
  policy: string;
  description: string;
  alarmType: AlarmType;
  isRead?: boolean;
}

const ALARM_IMG = {
  begin: Begin,
  end: End,
  activity: Logo,
};

export const Alarm = ({policy, description, alarmType, isRead}: AlarmProps) => {
  return (
    <Wrapper>
      <Img source={ALARM_IMG[alarmType]} />
      <Flex direction="column" justify="flex-start" align="flex-start" flex={1}>
        <Txt typo="Label2" color={isRead ? 'text_assistive' : 'text_normal'}>
          {policy}
        </Txt>
        <Txt
          numberOfLines={2}
          typo="Body1"
          color={isRead ? 'text_assistive' : 'text_normal'}>
          {description}
        </Txt>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  margin: 0px 16px;
  padding: 24px 16px;

  border-radius: 16px;

  background-color: ${theme.palette.background_secondary};
  border: ${theme.palette.line_alternative};

  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const Img = styled(Image)`
  width: 32px;
  height: 32px;

  overflow: hidden;

  background-color: ${theme.palette.background_secondary};
`;
