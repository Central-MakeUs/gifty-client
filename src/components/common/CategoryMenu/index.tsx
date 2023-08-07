/* eslint-disable react/react-in-jsx-scope */
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';
import {Txt} from '../Common';

export interface CategoryMenuProps {
  menu: string;
  setMenu: React.Dispatch<React.SetStateAction<string>>;
  menuList: string[];
}

/**
 * @param menu: string;
 * @param setMenu: React.Dispatch<React.SetStateAction<string>>;
 * @param menuList: string[];
 */
export const CategoryMenu = ({menu, setMenu, menuList}: CategoryMenuProps) => {
  return (
    <Wrapper>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {menuList.map(element => {
          return (
            <Menu
              activeOpacity={1}
              isSelected={menu === element}
              onPress={() => setMenu(element)}>
              <Txt
                typo="Label2"
                color={menu === element ? 'white' : 'text_assistive'}>
                {element}
              </Txt>
            </Menu>
          );
        })}
      </ScrollView>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  height: 48px;
  margin-left: 16px;

  flex-direction: row;
  gap: 12px;
`;

const Menu = styled(TouchableOpacity)<{
  isSelected: boolean;
}>`
  background-color: ${({isSelected}) =>
    isSelected ? `${theme.palette.text_normal}` : 'transparent'};

  padding: 8px 16px;

  height: 40px;
  border-radius: 99px;
`;
