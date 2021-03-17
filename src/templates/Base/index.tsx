import Header from 'components/Header'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Background>
      <S.Wrapper>
        <Header />
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </S.Background>
  )
}

export default Base
