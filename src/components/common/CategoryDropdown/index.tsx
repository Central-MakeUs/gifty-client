/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity, View} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';
import {Txt} from '../Common';
import {SmallBox} from '../SmallBox';
import {useState} from 'react';
import {DownArrow, UpArrow} from '../../../assets/dropdown/Arrow';

export interface CategoryDropdownProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * @param category: string;
 * @param setCategory: React.Dispatch<React.SetStateAction<string>>;
 */
export const CategoryDropdown = ({
  category,
  setCategory,
}: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <DropdownWrapper>
        <StyledTouchableOpacity
          activeOpacity={1}
          onPress={() => setIsOpen(!isOpen)}>
          <Txt typo="Body2" color={isOpen ? 'text_normal' : 'text_alternative'}>
            {category}
          </Txt>
          {isOpen ? <UpArrow /> : <DownArrow />}
        </StyledTouchableOpacity>
      </DropdownWrapper>

      {isOpen && (
        <BoxArea>
          <SmallBox
            variant={category === '수혜금액' ? 'on' : 'off'}
            type={category === '수혜금액' ? 'fill' : 'line'}
            onPress={() => setCategory('수혜금액')}>
            수혜금액
          </SmallBox>
          <SmallBox
            variant={category === '마감순' ? 'on' : 'off'}
            type={category === '마감순' ? 'fill' : 'line'}
            onPress={() => setCategory('마감순')}>
            마감순
          </SmallBox>
        </BoxArea>
      )}
    </View>
  );
};

const DropdownWrapper = styled(View)`
  align-items: flex-end;
  margin-right: 16px;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${theme.palette.fill_normal};

  padding: 6px 12px;
  border-radius: 99px;

  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const BoxArea = styled(View)`
  height: 56px;
  margin-top: 8px;
  padding-left: 16px;

  background-color: ${theme.palette.background_primary};

  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
