import {css} from 'styled-components';

export const typo = {
  Headline: css`
    font-family: Pretendard;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  `,
  Title1: css`
    font-family: Pretendard;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
  `,
  Title2: css`
    font-family: Pretendard;
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
  `,
  Label1: css`
    font-family: Pretendard;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  `,
  Label2: css`
    font-family: Pretendard;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  `,
  Label3: css`
    font-family: Pretendard;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  `,
  Label4: css`
    font-family: Pretendard;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  `,
  Body1: css`
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  `,
  Body2: css`
    font-family: Pretendard;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  Chips: css`
    font-family: Pretendard;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
  `,
  Caption: css`
    font-family: Pretendard;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
  `,
} as const;
