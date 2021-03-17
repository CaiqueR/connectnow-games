import styled, { css } from 'styled-components'
import { media } from 'styles/global'
import { Card } from 'templates/Games/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 600px;
    margin: 0 auto;

    margin-top: ${theme.spacings.large};

    ${media.lessThan('mobile')`
    padding: ${theme.spacings.xsmall};

  `}
  `}
`

export const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
`

export const CardContact = styled(Card)`
  max-width: 100%;
  margin-top: ${({ theme }) => theme.spacings.large};
`

export const Row = styled.div`
  display: flex;

  ${media.lessThan('tablet')`
    flex-direction: column;
  `}
`

export const Col = styled(Row)`
  flex-direction: column;
  width: 100%;

  & + div {
    margin-left: ${({ theme }) => theme.spacings.medium};
  }

  ${media.lessThan('tablet')`
  margin-left: unset !important;
  `}
`

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`

type LabelProps = {
  isRequired?: boolean
}
export const Label = styled.label<LabelProps>`
  ${({ theme, isRequired = false }) => css`
    font-weight: bold;
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxxsmall};

    ${isRequired &&
    css`
      &::after {
        color: ${theme.colors.required};
        content: ' *';
      }
    `}
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    border-radius: 2px;
    background-color: ${theme.colors.input};
    color: ${theme.colors.heading};
    border: none;
    padding: ${theme.spacings.xxxsmall};
    margin-bottom: ${theme.spacings.medium};

    &::placeholder {
      color: ${theme.colors.heading};
    }

    &:focus {
      outline: 1px solid white;
    }
  `}
`

export const CardButton = styled.button`
  ${({ theme }) => css`
    align-self: flex-end;
    max-width: 80px;
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.small};
    font-weight: bold;
    color: ${theme.colors.heading};
    border: none;
    outline: none;
    background-color: ${theme.colors.button};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  `}
`

export const TextContent = styled.textarea`
  ${({ theme }) => css`
    border-radius: 2px;
    background-color: ${theme.colors.input};
    color: ${theme.colors.heading};
    border: none;
    padding: ${theme.spacings.xxxsmall};
    margin-bottom: ${theme.spacings.xsmall};
    resize: none;

    &::placeholder {
      color: ${theme.colors.heading};
    }

    &:focus {
      outline: 1px solid white;
    }
  `}
`
