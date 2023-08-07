import {Text, View} from 'react-native';
import {css, styled} from 'styled-components';
import {KeyOfTypo, KeyOfPalette, theme} from '../../styles/theme/theme';

export const Txt = styled(Text)<{
  typo: KeyOfTypo;
  color?: KeyOfPalette;
}>`
  ${({typo}) => `${theme.typo[typo]}`};
  color: ${({color}) =>
    color ? `${theme.palette[color]}` : `${theme.palette.text_normal}`};
`;

export const Space = styled(View)<{
  height?: number;
  width?: number;
}>`
  height: ${({height}) => (height ? `${height}px` : '')};
  width: ${({width}) => (width ? `${width}px` : '')};
`;

export const Flex = styled(View)<{
  direction?: string;
  align?: string;
  justify?: string;
  gap?: number;
  height?: number;
  width?: number;
  flex?: number;
}>`
  ${({flex}) =>
    flex
      ? css`
          flex: 1;
        `
      : css``};

  flex-direction: ${({direction}) => (direction ? `${direction}` : 'row')};
  justify-content: ${({justify}) => (justify ? `${justify}` : 'center')};
  align-items: ${({align}) => (align ? `${align}` : 'center')};
  gap: ${({gap}) => (gap ? `${gap}px` : '0px')};

  height: ${({height}) => (height ? `${height}px` : '100%')};
  width: ${({width}) => (width ? `${width}px` : '100%')};
`;
