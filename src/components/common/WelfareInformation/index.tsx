import React from 'react';
import {GestureResponderEvent, Image, TouchableOpacity} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';
import {Flex, Txt} from '../Common';
import {TimeButton} from '../WelfareHome/TimeButton';

type WelfareInformationVariant = 'default' | 'delete';

interface WelfareInformationProps {
  variant: WelfareInformationVariant;
  imgUrl: string;
  policy: string;
  description: string;
  id?: number;
  date?: string;
  onDelete?: ((event: GestureResponderEvent) => void) | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

/**
 * @param variant: 'default' | 'delete';
 * @param policy: string;
 * @param description: string;
 * @param id?: number;
 * @param date?: string;
 * @param onDelete?: (event: GestureResponderEvent) => void;
 * * @param onDelete?: ((event: GestureResponderEvent) => void) | undefined;
 */
export const WelfareInformation = ({
  variant,
  imgUrl,
  policy,
  description,
  date,
  onDelete,
  onPress,
}: WelfareInformationProps) => {
  return (
    <Wrapper activeOpacity={1} onPress={onPress}>
      <Img source={{uri: `${imgUrl}`}} />
      <Flex
        direction="column"
        justify="flex-start"
        align="flex-start"
        flex={1}
        gap={8}>
        <Flex
          direction="row"
          justify="space-between"
          align="flex-start"
          height={28}>
          <Txt typo="Label1" color={'text_normal'}>
            {policy}
          </Txt>
          {variant === 'delete' ? (
            <DeleteButton activeOpacity={1} onPress={onDelete}>
              <Txt typo="Label4" color="white">
                삭제하기
              </Txt>
            </DeleteButton>
          ) : (
            <TimeButton timeType="end" day={date} />
          )}
        </Flex>
        <Txt
          numberOfLines={2}
          ellipsizeMode="tail"
          typo="Body2"
          color={'text_normal'}>
          {description}
        </Txt>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)`
  margin: 0px 16px;
  padding: 16px;

  border-radius: 16px;

  background-color: ${theme.palette.background_secondary};
  border: ${theme.palette.line_alternative};

  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const Img = styled(Image)`
  width: 28px;
  height: 28px;
  border-radius: 100px;

  overflow: hidden;

  background-color: ${theme.palette.white};
  border: 1px solid ${theme.palette.line_normal};
`;

const DeleteButton = styled(TouchableOpacity)`
  width: 58px;
  height: 26px;
  border-radius: 99px;

  background-color: ${theme.palette.status_alert};

  align-items: center;
  justify-content: center;
`;
