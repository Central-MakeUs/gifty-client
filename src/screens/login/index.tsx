import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styled} from 'styled-components';
import {AppleButton} from '../../assets/login/AppleButton';
import {KakaoButton} from '../../assets/login/KakaoButton';
import {LoginLogo} from '../../assets/login/LoginLogo';
import {Flex, Txt} from '../../components/common/Common';
import {theme} from '../../styles/theme';

export const LoginScreen = ({onLogin}: {onLogin: () => void}) => {
  return (
    <View>
      <StyledLinearGradient
        colors={['#0080FF', '#00AAFF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <LoginLogo />

        <Flex direction="column" gap={16} height={88}>
          <LineWrapper gap={8} height={20}>
            <Line />
            <Txt typo="Body2" color="white">
              SNS 계정으로 간단하게 가입하기
            </Txt>
            <Line />
          </LineWrapper>
          <Flex gap={16} height={52}>
            <KakaoButton onPress={onLogin} />
            <AppleButton onPress={onLogin} />
          </Flex>
        </Flex>
      </StyledLinearGradient>
    </View>
  );
};

const StyledLinearGradient = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  gap: 320px;

  width: 100%;
  height: 100%;
`;

const LineWrapper = styled(Flex)`
  padding: 0px 32px;
`;

const Line = styled(View)`
  height: 1px;
  width: 100%;

  flex: 1;

  border-radius: 99px;
  background-color: ${theme.palette.white};
`;
