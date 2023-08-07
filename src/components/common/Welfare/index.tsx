/* eslint-disable react/react-in-jsx-scope */
import {
  GestureResponderEvent,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme/theme';
import {Chips, ChipsVariant} from '../Chips';
import {Flex, Space, Txt} from '../Common';
import {LongButton} from '../LongButton';
import {WelfareCheckBox} from './CheckWelfare';
import {CalendarButton} from './CalendarButton';

type applicationType = '상시신청' | '방문신청' | '기간신청';

export interface WelfareProps {
  imgUrl?: string;
  institution: string;
  policy: string;
  description: string;
  applicationWay: applicationType[];
  disabled?: boolean;
  price: number;
  onApplyPress?: (event: GestureResponderEvent) => void;
  isSaved: boolean;
  onCalendarPress?: (event: GestureResponderEvent) => void;
  isCheck: boolean;
}

const CHIP_COLOR: Record<applicationType, ChipsVariant> = {
  상시신청: 'secondary',
  기간신청: 'secondary',
  방문신청: 'neutral',
};

/**
 * @param category: string;
 * @param setCategory: React.Dispatch<React.SetStateAction<string>>;
 */
export const Welfare = ({
  imgUrl,
  institution,
  policy,
  description,
  disabled,
  isCheck,
  applicationWay,
  price,
  onApplyPress,
  isSaved,
  onCalendarPress,
}: WelfareProps) => {
  return (
    <Wrapper>
      <Img
        source={{
          uri: `${imgUrl ? imgUrl : ''}`,
        }}
      />
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        flex={1}
        height={46}>
        <Flex direction="row" align="center" justify="space-between">
          <Flex
            direction="column"
            align="flex-start"
            justify="flex-start"
            flex={1}>
            <Txt
              typo="Chips"
              color={disabled ? 'text_disable' : 'text_alternative'}>
              {institution}
            </Txt>
            <Txt
              typo="Label1"
              color={disabled ? 'text_disable' : 'text_normal'}>
              {policy}
            </Txt>
          </Flex>
          <WelfareCheckBox isCheck={isCheck} />
        </Flex>
        <Space height={4} />
        <Flex align="flex-start" justify="flex-start" height={26} gap={4}>
          {applicationWay.map((element, index) => {
            return (
              <Chips key={index} variant={CHIP_COLOR[element]} text={element} />
            );
          })}
        </Flex>
        <Space height={8} />
        <Description
          numberOfLines={3}
          ellipsizeMode="tail"
          typo="Body2"
          color={disabled ? 'text_disable' : 'text_normal'}>
          {description}
        </Description>
        <Space height={8} />
        <Flex justify="flex-end">
          <TouchableOpacity onPress={onCalendarPress}>
            <CalendarButton isSaved={isSaved} disabled={disabled} />
          </TouchableOpacity>
          <LongButton
            variant="sub"
            type="long"
            height={36}
            typo={'Label3'}
            onPressIn={onApplyPress}
            disabled={disabled}>
            {disabled ? '이미 신청한 정책입니다' : `월 ${price}만원 신청하기`}
          </LongButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  height: 204px;
  padding: 8px 16px;

  flex-direction: row;
  gap: 16px;

  width: 100%;
`;

const Img = styled(Image)`
  width: 46px;
  height: 46px;
  border-radius: 100px;

  background-color: ${theme.palette.white};
`;

const Description = styled(Txt)`
  height: 60px;
`;
