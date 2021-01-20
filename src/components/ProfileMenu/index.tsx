import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  FormatListBulleted,
  ExitToApp
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="Meu perfil">
        <AccountCircle size={24} />
        <span>Meu perfil</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="Meus cartões">
        <CreditCard size={24} />
        <span>Meus Cartões</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="Meus pedidos">
        <FormatListBulleted size={24} />
        <span>Meus pedidos</span>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link title="Sair">
        <ExitToApp size={24} />
        <span>Sair</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
