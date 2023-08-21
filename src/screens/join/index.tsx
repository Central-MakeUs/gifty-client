/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {Flex, Layout, Space, Txt} from '../../components/common/Common';
import {StepTitle} from '../../components/join/StepTitle/StepTitle';
import {Input} from '../../components/common/Input';
import {useForm} from 'react-hook-form';
import {LongButton} from '../../components/common/LongButton';
import {Keyboard, KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';
import {Step1} from '../../components/join/Step1';
import {Step2} from '../../components/join/Step2';
import {Step3} from '../../components/join/Step3';
import {theme} from '../../styles/theme';
import {useNavigation} from '@react-navigation/native';

const JOIN_STAGE = {
  1: {
    step: 1,
    title: '기본 정보',
    ment: '나이와 사는 곳을 알려주세요!',
  },
  2: {
    step: 2,
    title: '소득 기재',
    ment: '소득을 알려주세요',
  },
  3: {
    step: 3,
    title: '상세 정보',
    ment: '학력과 직업을 입력해주세요',
  },
  4: {
    step: 4,
    title: '닉네임',
    ment: '사용하실 닉네임을 알려주세요!',
  },
  5: {
    step: 5,
    title: '약관 동의',
    ment: '회원님의 약관동의가 필요해요',
  },
};

export const JoinScreen = () => {
  const navigation = useNavigation();
  const [stage, setStage] = useState(JOIN_STAGE[1]);
  const {
    control,
    watch,
    formState: {isValid},
  } = useForm();

  return (
    <>
      <Layout style={{flex: 1}}>
        <StepTitle step={stage.step} title={stage.title} />
        <Space height={16} />
        <Txt typo="Label1" color="text_strong">
          {stage.ment}
        </Txt>
        <Space height={24} />
        {/* TODO colum-reverse flex-end 거꾸로 회원가입 */}
        <Flex direction="column" justify="flex-start" gap={16}>
          <Step1 control={control} />
          <Step2 control={control} income={watch('income')} />
          <Step3 control={control} />
        </Flex>
      </Layout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <LongButton
          variant="default"
          type="fill"
          height={52}
          disabled={!isValid} // TODO
          onPressIn={() => {
            Keyboard.dismiss();
            navigation.navigate('Nickname');
          }}>
          완료
        </LongButton>
      </KeyboardAvoidingView>
    </>
  );
};
