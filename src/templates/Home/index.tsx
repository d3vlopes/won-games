import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import { AnyAaaaRecord } from 'dns'

import * as S from './styles'

const Home = ({ heading }: any) => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        Novidades
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        {heading}
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Em Breve
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Jogos Gratuitos
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
