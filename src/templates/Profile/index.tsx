import { useRouter } from 'next/router'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'

import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  // Retorna o caminho da página
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Meu perfil
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
