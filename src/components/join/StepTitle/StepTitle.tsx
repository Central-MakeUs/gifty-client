import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';
import {Flex, Txt} from '../../common/Common';

export const StepTitle = ({step, title}: {step: number; title: string}) => {
  return (
    <Flex height={20} gap={4} justify="flex-start">
      <StepCircle>
        <Txt typo="Label4" color="white">
          {step}
        </Txt>
      </StepCircle>
      <Txt typo="Chips" color="primary_normal">
        {title}
      </Txt>
    </Flex>
  );
};

const StepCircle = styled(Flex)`
  width: 20px;
  height: 20px;
  border-radius: 100px;

  background-color: ${theme.palette.primary_normal};
`;
