/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {GestureResponderEvent, Platform, View} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';
import {Button} from '../Button';
import {Txt} from '../Common';
import {getStatusBarHeight} from 'react-native-status-bar-height';

type ModalType = 'default' | 'secondary' | 'negative';

interface ModalProps {
  isOpen: boolean;
  description: string;
  title: string;
  type: ModalType;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export const Modal = ({
  isOpen,
  description,
  title,
  type,
  onPress,
}: ModalProps) => {
  const statusBarHeight = getStatusBarHeight();

  return (
    <>
      {isOpen && (
        <Container>
          <ModalWrapper
            isOpen={isOpen}
            style={{
              top: Platform.OS === 'ios' ? statusBarHeight : 0,
            }}>
            <View style={{alignItems: 'center'}}>
              <Txt typo="Label4" color="text_alternative">
                {description}
              </Txt>
              <Txt typo="Label2" color="text_strong">
                {title}
              </Txt>
            </View>
            <View style={{flexDirection: 'row', gap: 8}}>
              <Button variant="sub" type="line" size="small">
                취소
              </Button>
              <Button
                onPress={onPress}
                variant={
                  type === 'negative'
                    ? 'alert'
                    : type === 'default'
                    ? 'primary'
                    : 'secondary'
                }
                type="solid"
                size="small">
                {type === 'negative' ? '삭제' : '확인'}
              </Button>
            </View>
          </ModalWrapper>
        </Container>
      )}
    </>
  );
};

const Container = styled(View)`
  position: absolute;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled(View)<{
  isOpen: boolean;
}>`
  width: 280px;
  padding: 24px 40px;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 16px;
  border: 1px solid ${theme.palette.line_normal};
  background-color: ${theme.palette.white};
`;
