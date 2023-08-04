import React from 'react';
import {Platform, TextInput, TextInputProps, View} from 'react-native';
import styled from 'styled-components';
import {SearchIcon} from '../../../assets/search/SearchIcon';
import {KeyOfPalette, KeyOfTypo, theme} from '../../../styles/theme';

export interface SearchBarProps extends TextInputProps {
  value?: string;
  width?: number | string;
  height?: number;
  leftIcon?: any;
  rightIcon?: any;
  errorMessage?: string;
  errorMessageColor?: KeyOfPalette;
  padding?: string;
  typo?: KeyOfTypo;
  setValue?: Function;
}

/**
 * @default: input (input 태그 속성 그대로)
 *
 * @param width?: number (기본값: 100%)
 * @param height?: number (기본값: 56px)
 * @param leftImage?: 왼쪽에 들어갈 수 있는 element
 * @param rightImage?: 오른쪽에 들어갈 수 있는 element
 * @param errorMessage?: string
 * @param messageColor?: KeyOfPalette
 */

export const SearchBar = React.forwardRef<TextInput, SearchBarProps>(
  ({value, height = 56, typo = 'Label1', ...props}: SearchBarProps, ref) => {
    return (
      <Wrapper>
        <InputWrapper width={props.width} height={height}>
          <StyledInput
            textAlignVertical={Platform.OS === 'android' ? 'center' : 'auto'}
            placeholderTextColor={`${theme.palette.text_alternative}`}
            value={value}
            ref={ref}
            onPressIn={props.onPressIn}
            onPressOut={props.onPressOut}
            typo={typo}
            {...props}
          />
          <SearchIcon
            color={
              value
                ? `${theme.palette.text_normal}`
                : `${theme.palette.text_alternative}`
            }
          />
        </InputWrapper>
      </Wrapper>
    );
  },
);

const Wrapper = styled(View)`
  margin: 0px 16px;
  background-color: ${theme.palette.fill_normal};
  display: flex;
  border-radius: 99px;
`;

const InputWrapper = styled(View)<{
  width?: number | string;
  height?: number;
  padding?: string;
}>`
  height: ${({height}) => (height ? `${height}px` : '40px')};
  width: ${({width}) => (width ? `${width}px` : '100%')};
  border-radius: 99px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 8px 56px 8px 16px;
`;

const StyledInput = styled(TextInput)<{
  typo: KeyOfTypo;
  value?: string;
}>`
  line-height: 100%;
  width: 100%;
  height: 100%;

  ${theme.typo.Body1};
  color: ${theme.palette.text_normal};

  ${Platform.OS === 'ios' &&
  ` padding-bottom: 4px; /* iOS에서 하단 패딩을 조정하여 수직 가운데 정렬 */
`}
`;
