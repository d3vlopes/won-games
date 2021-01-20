import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  FormatListBulleted,
  ExitToApp
} from '@styled-icons/material-outlined'

import * as S from './styles'

const ProfileMenu = () => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link>
        <AccountCircle size={24} />
        <span>Meu perfil</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link>
        <CreditCard size={24} />
        <span>Meus Cartões</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link>
        <FormatListBulleted size={24} />
        <span>Meus pedidos</span>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link>
        <ExitToApp size={24} />
        <span>Sair</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu