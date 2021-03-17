import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

export const Background = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      ${theme.colors.bodyPrimary},
      ${theme.colors.bodySecondary}
    );
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
  `}
`
