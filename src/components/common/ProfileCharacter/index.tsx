/* eslint-disable react/react-in-jsx-scope */
import {Image, View} from 'react-native';
import FNew from '../../../../assets/images/character/f-new.jpg';
import FNo from '../../../../assets/images/character/f-no.jpg';
import FSave from '../../../../assets/images/character/f-save.jpg';
import FSmart from '../../../../assets/images/character/f-smart.jpg';
import MNew from '../../../../assets/images/character/m-new.jpg';
import MNo from '../../../../assets/images/character/m-no.jpg';
import MSave from '../../../../assets/images/character/m-save.jpg';
import MSmart from '../../../../assets/images/character/m-smart.jpg';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';

type ProfileCharacterVariant =
  | 'f-new'
  | 'f-no'
  | 'f-save'
  | 'f-smart'
  | 'm-new'
  | 'm-no'
  | 'm-save'
  | 'm-smart';

interface ProfileCharacterProps {
  variant: ProfileCharacterVariant;
}

const IMAGE_SOURCE = {
  'f-new': FNew,
  'f-no': FNo,
  'f-save': FSave,
  'f-smart': FSmart,
  'm-new': MNew,
  'm-no': MNo,
  'm-save': MSave,
  'm-smart': MSmart,
};

/**
 * @param variant 'f-new' | 'f-no' | 'f-save' | 'f-smart'| 'm-new' | 'm-no' | 'm-save' | 'm-smart';
 */
export const ProfileCharacter = ({variant}: ProfileCharacterProps) => {
  return (
    <View>
      <ProfileImage source={IMAGE_SOURCE[variant]} />
    </View>
  );
};

const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;

  border-radius: 99px;
  border: 1px solid ${theme.palette.line_normal};
`;
