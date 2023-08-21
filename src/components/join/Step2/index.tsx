/* eslint-disable react/react-in-jsx-scope */
import {Control, FieldValues} from 'react-hook-form';
import {Input} from '../../common/Input';
import {Flex, Space, Txt} from '../../common/Common';
import {View} from 'react-native';

export const Step2 = ({
  control,
  disabled,
  income,
}: {
  control: Control<FieldValues, any>;
  disabled?: boolean;
  income: string;
}) => {
  return (
    <Flex height={66}>
      <Input
        keyboardType="numeric"
        control={control}
        name="income"
        label="작년 소득"
        placeholder="작년 소득"
        helperText="1년 기준으로 입력하세요"
        rightIcon={
          <View>
            <Txt
              typo="Label1"
              color={income ? 'text_strong' : 'text_alternative'}>
              만원
            </Txt>
            <Space height={4} />
          </View>
        }
        disabled={disabled}
        required
      />
    </Flex>
  );
};
