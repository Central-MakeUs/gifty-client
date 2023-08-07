/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {styled} from 'styled-components';
import {theme} from '../../../styles/theme';

export interface PaginationProps {
  pageNum: number;
  nowPage: number;
}

/**
 *
 * @param pageNum: number;
 * @param nowPage: number;
 */
export const Pagination = ({pageNum, nowPage}: PaginationProps) => {
  return (
    <Wrapper>
      {Array.from({length: pageNum}).map((_, index) => (
        <Circle key={index} isNow={index === nowPage} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  flex-direction: row;
  gap: 20px;
`;

const Circle = styled(View)<{isNow: boolean}>`
  width: 8px;
  height: 8px;

  border-radius: 100px;

  background-color: ${({isNow}) =>
    isNow
      ? `${theme.palette.primary_normal}`
      : `${theme.palette.fill_disable}`};
`;
