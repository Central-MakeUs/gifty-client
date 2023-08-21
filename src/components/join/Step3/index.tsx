/* eslint-disable react/react-in-jsx-scope */
import {Control, FieldValues} from 'react-hook-form';
import {Input} from '../../common/Input';
import {Flex} from '../../common/Common';

export const Step3 = ({
  control,
  disabled,
}: {
  control: Control<FieldValues, any>;
  disabled?: boolean;
}) => {
  return (
    <Flex gap={16} align="flex-start" height={68}>
      <Input
        control={control}
        name="education"
        label="학력"
        placeholder="학력"
        helperText="현재 학력을 선택해주세요"
        disabled={disabled}
        required
      />
      <Input
        control={control}
        name="job"
        label="직업"
        placeholder="직업"
        helperText="현재 직업을 선택해주세요"
        disabled={disabled}
        required
      />
    </Flex>
  );
};
