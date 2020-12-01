import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Heading>Seus jogos favoritos em um único lugar</Heading>
      <S.Subtitle>
        <strong>WON</strong> é a melhor e mais completa plataforma de jogos.
      </S.Subtitle>

      <S.Footer>Won Games 2020 © Todos os direitos reservados.</S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo color="black" size="large" />
      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
