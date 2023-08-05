import React from 'react';
import {useController, UseControllerProps} from 'react-hook-form';
import {Platform, TextInput, TextInputProps, View} from 'react-native';
import styled from 'styled-components';
import {SearchIcon} from '../../../assets/search/SearchIcon';
import {theme} from '../../../styles/theme';

export interface SearchBarProps extends TextInputProps, UseControllerProps {
  defaultValue?: string; //ADD DEFAULT VALUE TO PROPS
}

/**
 * @default: TextInputProps, UseControllerProps
 *
 * @param control
 * @param name
 */

export const SearchBar = ({name, control, ...props}: SearchBarProps) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <Wrapper>
      <InputWrapper>
        <StyledInput
          textAlignVertical={Platform.OS === 'android' ? 'center' : 'auto'}
          placeholderTextColor={`${theme.palette.text_alternative}`}
          value={field.value}
          onChangeText={field.onChange}
          {...props}
        />
        <SearchIcon
          color={
            field.value
              ? `${theme.palette.text_normal}`
              : `${theme.palette.text_alternative}`
          }
        />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  margin: 0px 16px;
  background-color: ${theme.palette.fill_normal};
  display: flex;
  border-radius: 99px;
`;

const InputWrapper = styled(View)`
  height: 40px;
  width: 100%;
  border-radius: 99px;

  line-height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 8px 56px 8px 16px;
`;

const StyledInput = styled(TextInput)`
  line-height: 100%;
  width: 100%;
  height: 40px;

  ${theme.typo.Body1};
  color: ${theme.palette.text_normal};

  ${Platform.OS === 'ios' &&
  ` padding-bottom: 8px; /* iOS에서 하단 패딩을 조정하여 수직 가운데 정렬 */
`}
`;
