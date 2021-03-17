import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
`

export const Open = styled.span`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.input};
    font-size: ${theme.font.sizes.small};
    height: ${theme.spacings.medium};
  `}
`
export const OpenText = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxxsmall};
  `}
`

export const Arrow = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    display: flex;
    align-items: center;
    padding: 0 ${theme.spacings.xsmall};
    height: 100%;
    background: ${theme.colors.button};
  `}
`

type DropdownProps = {
  isOpen?: boolean
}
export const Content = styled.ul<DropdownProps>`
  ${({ theme, isOpen = false }) => css`
    position: absolute;
    transform: scale(0);
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    width: 100%;

    z-index: 12;

    transition: all 0.2s;
    transform-origin: top center;

    ${isOpen &&
    css`
      transform: scale(1);
    `}
  `}
`

export const ContentItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.input};

    padding: ${theme.spacings.xxsmall};
    transition: all 0.2s;

    font-size: ${theme.font.sizes.small};

    &:hover {
      background-color: ${darken(0.1, theme.colors.input)};
    }
  `}
`
