import React from 'react';
import {Text, View} from 'react-native';
import {useState} from 'react';
import {CategoryMenu} from '../../components/common/CategoryMenu/index';

export const HomeScreen = () => {
  const [menu, setMenu] = useState('전체');
  const menuList = [
    '전체',
    '취업',
    '창업',
    '주거·금융',
    '생활·복지',
    '사회 참여',
  ];
  return (
    <View>
      <Text>home</Text>
      <CategoryMenu menu={menu} setMenu={setMenu} menuList={menuList} />
    </View>
  );
};
