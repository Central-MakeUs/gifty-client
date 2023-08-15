/* eslint-disable react/react-in-jsx-scope */
import {GestureResponderEvent, View, TouchableOpacity} from 'react-native';
import {Flex, Space, Txt} from '../Common';
import styled from 'styled-components';
import {Image} from 'react-native';
import {theme} from '../../../styles/theme';
import {LongButton} from '../LongButton';

type ApplyWayType = '즉시 신청' | '현장 신청';

export interface CalendarMemoProps {
  date: number;
  day: string;
  imgUrl: string;
  policy: string;
  policyType: ApplyWayType;
  isEdit?: boolean;
  onApplyPress?: (event: GestureResponderEvent) => void;
  onDeletePress?: (event: GestureResponderEvent) => void;
}

/**
 * @param date: number;
 * @param day: string;
 * @param imgUrl: string;
 * @param policy: string;
 * @param policyType: ApplyWayType;
 * @param isEdit?: boolean;
 * @param onApplyPress?: (event: GestureResponderEvent) => void;
 * @param onDeletePress?: (event: GestureResponderEvent) => void;
 */
export const CalendarMemo = ({
  date,
  day,
  imgUrl,
  policy,
  policyType,
  isEdit,
  onApplyPress,
  onDeletePress,
}: CalendarMemoProps) => {
  return (
    <Wrapper justify="flex-start" gap={16}>
      <Flex direction="column" justify="flex-start" align="center" width={42}>
        <Space height={1} />
        <Txt typo="Title2" color="text_normal">
          {date}
        </Txt>
        <Txt typo="Caption" color="text_normal">
          {day}
        </Txt>
        <Space height={3} />
      </Flex>
      <Flex justify="flex-start" gap={8} flex={1}>
        <Img
          source={{
            uri: `${imgUrl ? imgUrl : ''}`,
          }}
        />
        <View>
          <Txt typo="Label2" color="text_normal">
            {policy}
          </Txt>
          <Txt typo="Chips" color="text_alternative">
            {policyType}
          </Txt>
        </View>
      </Flex>
      {isEdit ? (
        <DeleteButton activeOpacity={1} onPress={onDeletePress}>
          <Txt typo="Label3" color="white">
            삭제하기
          </Txt>
        </DeleteButton>
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
  height: 42px;
`;

const Img = styled(Image)`
  width: 42px;
  height: 42px;
  border-radius: 100px;

  background-color: ${theme.palette.white};
`;

const DeleteButton = styled(TouchableOpacity)`
  height: 36px;
  border-radius: 8px;
  background-color: ${theme.palette.status_alert};

  padding: 8px 12px;
`;
