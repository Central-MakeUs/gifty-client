import React from 'react';
import {useController, UseControllerProps} from 'react-hook-form';
import {Platform, TextInput, TextInputProps, Text, View} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';

type InputVariant = 'default' | 'present' | 'caution' | 'disable';

export interface InputProps extends TextInputProps, UseControllerProps {
  variant: InputVariant;
  defaultValue?: string;
  label?: string;
  helperText?: string;
  isSmall?: boolean;
}

const TEXT_COLOR = {
  default: `${theme.palette.text_alternative}`,
  present: `${theme.palette.text_normal}`,
  caution: `${theme.palette.text_normal}`,
  disable: `${theme.palette.text_disable}`,
};

const SUB_TEXT_COLOR = {
  default: `${theme.palette.text_alternative}`,
  present: `${theme.palette.primary_normal}`,
  caution: `${theme.palette.status_alert}`,
  disable: `${theme.palette.text_disable}`,
};

const LINE_COLOR = {
  default: `${theme.palette.text_alternative}`,
  present: `${theme.palette.secondary_normal}`,
  caution: `${theme.palette.status_alert}`,
  disable: `${theme.palette.line_disable}`,
};

/**
 * @default: TextInputProps, UseControllerProps
 *
 * @param variant: 'default' | 'present' | 'caution' | 'disable';
 * @param label?: string;
 * @param helperText?: string 인풋 아래 텍스트
 * @param isSmall?: boolean; 병렬로 사용하는 input인 경우 true
 */
export const Input = ({
  variant,
  name,
  control,
  label,
  helperText,
  ...props
}: InputProps) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <Wrapper>
      {label && <Label variant={variant}>{label}</Label>}
      <InputWrapper variant={variant}>
        <StyledInput
          variant={variant}
          textAlignVertical={Platform.OS === 'android' ? 'center' : 'auto'}
          placeholderTextColor={`${theme.palette.text_alternative}`}
          value={field.value}
          onChangeText={field.onChange}
          {...props}
        />
      </InputWrapper>
      {helperText && <HelperText variant={variant}>{helperText}</HelperText>}
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  margin: 0px 16px;
  display: flex;
`;

const InputWrapper = styled(View)<{
  variant: InputVariant;
}>`
  height: 34px;
  width: 100%;

  line-height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-color: ${({variant}) => `${LINE_COLOR[variant]}`};
  border-bottom-width: 2px;
`;

const StyledInput = styled(TextInput)<{
  variant: InputVariant;
}>`
  width: 100%;
  height: 50px; // 안드로이드에서 텍스트 반으로 잘리는 현상 방지

  ${theme.typo.Label1};
  color: ${({variant}) => `${TEXT_COLOR[variant]}`};

  ${Platform.OS === 'ios' &&
  ` padding-bottom: 8px; /* iOS에서 하단 패딩을 조정하여 수직 가운데 정렬 */
`}

  margin-bottom: 4px;
`;

const Label = styled(Text)<{
  variant: InputVariant;
}>`
  ${theme.typo.Label4};
  color: ${({variant}) => `${SUB_TEXT_COLOR[variant]}`};
`;

const HelperText = styled(Text)<{
  variant: InputVariant;
}>`
  margin-top: 4px;

  ${theme.typo.Caption};
  color: ${({variant}) => `${SUB_TEXT_COLOR[variant]}`};
`;
