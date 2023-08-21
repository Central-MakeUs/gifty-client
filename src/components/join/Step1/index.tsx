/* eslint-disable react/react-in-jsx-scope */
import {Control, FieldValues} from 'react-hook-form';
import {Flex} from '../../common/Common';
import {Input} from '../../common/Input';

export const Step1 = ({
  control,
  disabled,
}: {
  control: Control<FieldValues, any>;
  disabled?: boolean;
}) => {
  return (
    <>
      <Flex gap={16} align="flex-start" height={68}>
        <Input
          control={control}
          name="address1"
          label="지역"
          placeholder="시/도"
          helperText="등본상 거주지를 선택하세요"
          disabled={disabled}
          required
        />
        <Input
          control={control}
          name="address2"
          label="소속 지역"
          placeholder="시/군/구"
          helperText="등본상 거주지를 선택하세요"
          disabled={disabled}
          required
        />
      </Flex>
      <Input
        control={control}
        name="age"
        label="나이"
        placeholder="나이"
        helperText="만 나이를 입력하세요"
        keyboardType="numeric"
        disabled={disabled}
        required
      />
    </>
  );
};
