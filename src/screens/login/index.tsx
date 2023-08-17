/* eslint-disable @typescript-eslint/no-unused-vars */
import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styled} from 'styled-components';
import {AppleButton} from '../../assets/login/AppleButton';
import {KakaoButton} from '../../assets/login/KakaoButton';
import {LoginLogo} from '../../assets/login/LoginLogo';
import {Flex, Txt} from '../../components/common/Common';
import {theme} from '../../styles/theme';

export const LoginScreen = ({onLogin}: {onLogin: () => void}) => {
  const KakaoLogin = async () => {
    try {
      const result: KakaoOAuthToken = await login();
      console.log('Login Success', JSON.stringify(result));
    } catch (error: any) {
      if (error.code === 'E_CANCELLED_OPERATION') {
        console.log('Login Cancel', error.message);
      } else {
        console.log(`Login Fail(code:${error.code})`, error.message);
      }
    }
  };

  return (
    <View>
      <StyledLinearGradient
        colors={['#0080FF', '#00AAFF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Wrapper>
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
              <KakaoButton onPress={KakaoLogin} />
              <AppleButton onPress={onLogin} />
            </Flex>
          </Flex>
        </Wrapper>
      </StyledLinearGradient>
    </View>
  );
};

const StyledLinearGradient = styled(LinearGradient)``;

const Wrapper = styled(SafeAreaView)`
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
