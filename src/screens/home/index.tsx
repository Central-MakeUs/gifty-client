import React from 'react';
import {Text, View} from 'react-native';
import {Chips} from '../../components/common/Chips';

export const HomeScreen = () => {
  return (
    <View>
      <Text>home</Text>
      <Chips variant="primary" text="안녕" />
      <Chips variant="secondary" text="좀 더 긴 텍스트" />
      <Chips variant="neutral" text="정책 유형" />
      <Chips variant="disable" text="정책 유형" />
    </View>
  );
};
