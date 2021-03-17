import styled, { css } from 'styled-components'
import { media } from 'styles/global'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 400px) minmax(850px, 1fr);

  ${media.lessThan('tablet')`
    grid-template-columns: auto;
    padding: ${({ theme }) => theme.spacings.small};
  `}
`

export const Card = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.card};
    display: flex;
    flex-direction: column;
    max-width: 300px;
    height: auto;
    max-height: 400px;
    padding: ${theme.spacings.xsmall};

    ${media.lessThan('tablet')`
      max-width: 100%;
      margin-bottom: ${theme.spacings.xxlarge};
    `}
  `}
`

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxxsmall};
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

    ${media.lessThan('tablet')`
      margin-bottom: unset;
    `}

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
    margin-top: ${theme.spacings.xsmall};
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

    ${media.lessThan('tablet')`
      margin-left: ${theme.spacings.xxsmall};
    `}
  `}
`

export const GameList = styled.ul``

export const GameItem = styled.li`
  ${({ theme }) => css`
    height: calc(${theme.spacings.large} * 3.5);
    display: grid;
    grid-template-columns: minmax(130px, 1fr) 6fr 1fr;

    & + li {
      margin-top: ${theme.spacings.xsmall};
    }
    background: ${theme.colors.card};

    ${media.lessThan('mobile')`
      height: calc(${theme.spacings.large} * 8);
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      position: relative;

      & + li {
        margin-top: ${theme.spacings.large};
      }
    `}
  `}
`

export const LoadMore = styled(CardButton)`
  display: block;
  width: 100%;
  max-width: 100% !important;
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
`

export const Image = styled.div`
  height: 100%;
  width: 100%;
  background: black;

  ${media.lessThan('mobile')`
    grid-column: 1/3;
    position: relative;
  `}
`

export const GameDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.xxxsmall}
    ${({ theme }) => theme.spacings.small};
  overflow: hidden;

  ${media.lessThan('mobile')`
    grid-column: 1/3;
  `}
`

export const GameTitle = styled.h2``

export const GameReleaseDate = styled.span`
  opacity: 0.7;
`

export const GameAbout = styled.p`
  ${({ theme }) => css`
    opacity: 0.7;
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    text-align: justify;
  `}
`

export const GameRating = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    ${media.lessThan('mobile')`
      position: absolute;
      top:${theme.spacings.medium};
      right:${theme.spacings.medium};
    `}

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;

      content: '';
      background-color: ${theme.colors.button};
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }
  `}
`

export const Rating = styled.span`
  ${({ theme }) => css`
    z-index: 1;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `}
`

export const LoadingContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacings.xsmall};
  display: flex;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
`

export const Row = styled.div`
  display: flex;
`

export const FiltersContainer = styled(Row)`
  ${({ theme }) => css`
    flex-direction: column;
    width: 100%;

    ${media.lessThan('tablet')`
      flex-direction: row;
      margin-top: ${theme.spacings.xxsmall};
    `}

    ${media.lessThan('mobile')`
      flex-direction: column;
    `}
  `}
`

export const Col = styled(Row)`
  ${({ theme }) => css`
    flex-direction: column;
    width: 100%;

    ${media.lessThan('tablet')`
      &:nth-child(2){
        margin-left: ${theme.spacings.xxsmall};
      }
    `}

    ${media.lessThan('mobile')`
      &:nth-child(2){
        margin-left: unset;
        margin-top: ${theme.spacings.xxsmall};
      }
    `}
  `}
`
