import {Text, View} from 'react-native';
import {styled} from 'styled-components';
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