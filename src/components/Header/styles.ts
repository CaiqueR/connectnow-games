import styled, { css } from 'styled-components'
import { media } from 'styles/global'

export const Wrapper = styled.header`
  grid-area: header;
  ${({ theme }) => css`
    height: ${theme.spacings.xxxlarge};
  `}
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`

export const List = styled.ul`
  display: flex;

  ${media.lessThan('tablet')`
    margin-top: 20px;
    margin-left: 20px;
    flex-direction:column;
  `}
`
export const ListItem = styled.li`
  ${({ theme }) => css`
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    padding: ${theme.spacings.xxsmall} 0;
    color: ${theme.colors.heading};
    & + li {
      margin-left: ${theme.spacings.xxxlarge2};
    }

    ${media.lessThan('tablet')`
      margin-left: unset !important;
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`

export const Teste = styled.span`
  display: none;
  position: absolute;
  top: -30px;
  left: -50px;
  font-size: 7rem;
  z-index: 0;
  opacity: 0.5;
`

type TitleItemProps = {
  bgName: string
  isActive?: boolean
}
export const TitleItem = styled.h1<TitleItemProps>`
  ${({ theme, bgName, isActive = false }) => css`
    position: relative;
    z-index: 10;

    &:first-child {
      margin-left: 40px;
    }
    ${isActive &&
    css`
      &::before {
        content: '${bgName}';
        color: #172841;
        font-size: 5rem;
        position: absolute;
        top: -30px;
        left: -40px;
        z-index: -1;
      }
    `}
  `}
`
