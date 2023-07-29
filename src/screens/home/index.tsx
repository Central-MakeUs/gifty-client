import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components/common/Button';

export const HomeScreen = () => {
  return (
    <View>
      <Text>home</Text>
      <Button variant="primary" type="solid" size="default">
        프리텐다드
      </Button>
    </View>
  );
};
