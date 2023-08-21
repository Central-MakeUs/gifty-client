/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard} from 'react-native';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Flex, Layout, Space, Txt} from '../../components/common/Common';
import {LongButton} from '../../components/common/LongButton';
import {NicknameInput} from '../../components/common/NicknameInput';
import {StepTitle} from '../../components/join/StepTitle/StepTitle';

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

export const AgreeScreen = () => {
  const navigation = useNavigation();
  const [stage, setStage] = useState(JOIN_STAGE[5]);
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
        <Flex direction="column" justify="flex-start" gap={16}>
          {/* TODO NicknameInput variant 자동으로 바뀌도록 */}
          <NicknameInput
            variant="present"
            control={control}
            name="income"
            placeholder="닉네임"
            helperText="8글자 이내의 닉네임을 입력해주세요"
          />
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
            // navigation.navigate('Nickname');
          }}>
          완료
        </LongButton>
      </KeyboardAvoidingView>
    </>
  );
};
