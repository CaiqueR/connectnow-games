import Base from 'templates/Base'
import * as C from 'templates/Games/styles'
import * as S from './styles'

function ContactTemplate() {
  return (
    <Base>
      <S.Wrapper>
        <S.Title>Get in touch</S.Title>
        <S.Description>
          Trysail transom furl Sea Legs scallywag Jack Ketch chandler mizzenmast
          reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs
          boom gunwalls booty jury mast fore.
        </S.Description>

        <S.CardContact>
          <S.CardTitle>Filter Results</S.CardTitle>

          <S.Row>
            <S.Col>
              <S.Label isRequired>Name</S.Label>
              <S.Input />
            </S.Col>

            <S.Col>
              <S.Label isRequired>Email Address</S.Label>
              <S.Input />
            </S.Col>
          </S.Row>

          <S.Label isRequired>Message</S.Label>
          <S.TextContent rows={6} />

          <S.CardButton>Send</S.CardButton>
        </S.CardContact>
      </S.Wrapper>
    </Base>
  )
}

export default ContactTemplate
