import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      Meu perfil
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Nome"
        label="Nome"
        initialValue="John Doe"
      />

      <TextField
        name="email"
        type="email"
        placeholder="Email"
        initialValue="johndoe@gmail.com"
        disabled
        label="Email"
      />

      <TextField
        name="password"
        type="password"
        placeholder="Sua senha atual"
        label="Senha"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="Nova senha"
        label="Nova senha"
      />

      <Button size="large">Salvar</Button>
    </S.Form>
  </>
)

export default FormProfile
