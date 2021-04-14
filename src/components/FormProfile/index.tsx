import Link from 'next/link'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      Meu perfil
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Nome de usuário"
        label="Nome de usuário"
        initialValue={username}
      />

      <TextField
        name="email"
        type="email"
        placeholder="Email"
        initialValue={email}
        disabled
        label="Email"
      />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Resetar senha
          </Button>
        </Link>
        <Button size="medium">Salvar</Button>
      </S.ButtonContainer>
    </S.Form>
  </>
)

export default FormProfile
