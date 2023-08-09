/* eslint-disable react/react-in-jsx-scope */
import {GestureResponderEvent, View} from 'react-native';
import {Flex, Txt} from '../Common';
import styled from 'styled-components';
import {Image} from 'react-native';
import {theme} from '../../../styles/theme';
import {LongButton} from '../LongButton';
import {TimeButton} from './TimeButton';

export type TimeType = 'none' | 'begin' | 'end';

export interface WelfareHomeProps {
  imgUrl: string;
  policy: string;
  policyType: string;
  timeType: TimeType;
  day?: string;
  onApplyPress?: (event: GestureResponderEvent) => void;
}

/**
 * @param imgUrl: string;
 * @param policy: string;
 * @param policyType: ApplyWayType;
 * @param isEdit?: boolean;
 * @param onApplyPress?: (event: GestureResponderEvent) => void;
 * @param onDeletePress?: (event: GestureResponderEvent) => void;
 */
export const WelfareHome = ({
  imgUrl,
  policy,
  policyType,
  timeType,
  day,
  onApplyPress,
}: WelfareHomeProps) => {
  return (
    <Wrapper justify="flex-start" gap={16}>
      <Img
        source={{
          uri: `${imgUrl ? imgUrl : ''}`,
        }}
      />
      <Flex justify="flex-start" flex={1}>
        <View>
          <Txt typo="Chips" color="text_alternative">
            {policyType}
          </Txt>
          <Txt typo="Label2" color="text_normal">
            {policy}
          </Txt>
        </View>
      </Flex>
      {timeType !== 'none' ? (
        <TimeButton timeType={timeType} day={day} />
      ) : (
        <LongButton
          onPressIn={onApplyPress}
          variant="sub"
          type="long"
          typo="Label3"
          height={36}
          isSubButton>
          신청하기
        </LongButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 100%;
  height: 58px;
  padding: 8px 16px;
`;

const Img = styled(Image)`
  width: 42px;
  height: 42px;

  background-color: ${theme.palette.fill_normal};
`;
