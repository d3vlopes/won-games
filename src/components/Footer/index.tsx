import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contato
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        <a href="tel:+5137151234">(51) 3715-1234</a>
      </S.Column>

      <S.Column aria-labelledby="redes-socias">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Siga-nos
        </Heading>

        <nav id="redes-socias">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav id="recursos">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contato">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Endereço
        </Heading>
        <span>Loren Ipsum dolor sit.</span>
        <span>Loren Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 © Todos os direitos reservados.</S.Copyright>
  </S.Wrapper>
)

export default Footer
