import * as S from './styles'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

function Header() {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.Navigation>
        <S.List>
          <S.ListItem onClick={() => router.push('/')}>
            <S.TitleItem bgName="VIDEO" isActive={router.pathname === '/'}>
              Video Games
            </S.TitleItem>
          </S.ListItem>
          <S.ListItem>
            <Link href="/contact">
              <S.TitleItem
                onClick={() => router.push('/contact')}
                bgName="CONTACT"
                isActive={router.pathname === '/contact'}
              >
                Contact
              </S.TitleItem>
            </Link>
          </S.ListItem>
        </S.List>
      </S.Navigation>
    </S.Wrapper>
  )
}

export default Header
