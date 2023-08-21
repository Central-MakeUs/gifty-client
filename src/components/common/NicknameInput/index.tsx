import React from 'react';
import {useController, UseControllerProps} from 'react-hook-form';
import {Platform, TextInput, TextInputProps, Text, View} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';

type NicknameInput = 'default' | 'present' | 'caution' | 'disable';

export interface NicknameInputProps extends TextInputProps, UseControllerProps {
  variant: NicknameInput;
  defaultValue?: string;
  helperText?: string;
  rightIcon?: any;
}

const TEXT_COLOR = {
  default: `${theme.palette.text_alternative}`,
  present: `${theme.palette.text_strong}`,
  caution: `${theme.palette.text_strong}`,
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
 * @param helperText?: string 인풋 아래 텍스트
 * @param rightIcon?: 오른쪽 icon
 */
export const NicknameInput = ({
  variant,
  name,
  control,
  helperText,
  rightIcon,
  ...props
}: NicknameInputProps) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <Wrapper>
      <InputWrapper variant={variant} rightIcon={rightIcon}>
        <StyledInput
          variant={variant}
          textAlignVertical={Platform.OS === 'android' ? 'center' : 'auto'}
          placeholderTextColor={`${theme.palette.text_alternative}`}
          value={field.value}
          onChangeText={field.onChange}
          {...props}
        />
        {rightIcon}
      </InputWrapper>
      {helperText && <HelperText variant={variant}>{helperText}</HelperText>}
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  display: flex;
`;

const InputWrapper = styled(View)<{
  variant: NicknameInput;
  rightIcon: any;
}>`
  height: 52px;
  width: 100%;

  line-height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  background-color: ${theme.palette.background_secondary};
  border: 1px solid ${({variant}) => `${LINE_COLOR[variant]}`};
  border-radius: 99px;
  padding: ${({rightIcon}) =>
    rightIcon ? '12px 60px 12px 24px' : '12px 24px 12px 24px'};
`;

const StyledInput = styled(TextInput)<{
  variant: NicknameInput;
}>`
  width: 100%;
  height: 60px; // 안드로이드에서 텍스트 반으로 잘리는 현상 방지

  ${theme.typo.Label1};
  color: ${({variant}) => `${TEXT_COLOR[variant]}`};

  ${Platform.OS === 'ios' &&
  ` padding-bottom: 8px; /* iOS에서 하단 패딩을 조정하여 수직 가운데 정렬 */
`}
`;

const HelperText = styled(Text)<{
  variant: NicknameInput;
}>`
  margin: 4px 0px 0px 24px;

  ${theme.typo.Caption};
  color: ${({variant}) => `${SUB_TEXT_COLOR[variant]}`};
`;
