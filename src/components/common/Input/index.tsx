import React, {useEffect} from 'react';
import {useController, UseControllerProps} from 'react-hook-form';
import {Platform, TextInput, TextInputProps, Text, View} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
import {Flex} from '../Common';
import {useState} from 'react';

type InputVariant = 'default' | 'present' | 'caution' | 'disable';

export interface InputProps extends TextInputProps, UseControllerProps {
  defaultValue?: string;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  isError?: boolean;
  required?: boolean;
  rightIcon?: any;
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
 * @param label?: string;
 * @param helperText?: string 인풋 아래 텍스트
 */
export const Input = ({
  name,
  control,
  label,
  helperText,
  disabled,
  isError,
  required,
  rightIcon,
  ...props
}: InputProps) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
    rules: {required},
  });
  const [variant, setVariant] = useState<InputVariant>('default');

  useEffect(() => {
    if (isError) {
      setVariant('caution');
    }
  }, [isError]);

  useEffect(() => {
    if (disabled) {
      setVariant('disable');
    }
  }, [disabled]);

  return (
    <Wrapper>
      <Flex direction="column" align="flex-start" justify="flex-start" flex={1}>
        {label && <Label variant={variant}>{label}</Label>}
        <InputWrapper variant={variant}>
          <StyledInput
            variant={variant}
            onFocus={() => setVariant('present')}
            onBlur={() => setVariant('default')}
            textAlignVertical={Platform.OS === 'android' ? 'center' : 'auto'}
            placeholderTextColor={
              variant !== 'disable'
                ? `${theme.palette.text_alternative}`
                : `${theme.palette.text_disable}`
            }
            value={field.value}
            onChangeText={field.onChange}
            editable={!disabled}
            {...props}
          />
          {rightIcon}
        </InputWrapper>
        {helperText && variant !== 'default' && variant !== 'disable' && (
          <HelperText variant={variant}>{helperText}</HelperText>
        )}
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  align-items: flex-start;
  max-height: 64px;
  flex: 1;
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
  flex: 1;

  ${Platform.OS === 'ios' &&
  ` padding-bottom: 8px; /* iOS에서 하단 패딩을 조정하여 수직 가운데 정렬 */
`}
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
