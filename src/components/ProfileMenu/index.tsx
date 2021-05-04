import Link from 'next/link'
import {
  AccountCircle,
  FormatListBulleted,
  ExitToApp
} from '@styled-icons/material-outlined'

import * as S from './styles'
import { signOut } from 'next-auth/client'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="Meu perfil">
        <AccountCircle size={24} />
        <span>Meu perfil</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="Meus pedidos">
        <FormatListBulleted size={24} />
        <span>Meus pedidos</span>
      </S.Link>
    </Link>

    <S.Link role="button" onClick={() => signOut()} title="Sair">
      <ExitToApp size={24} />
      <span>Sair</span>
    </S.Link>
  </S.Nav>
)

export default ProfileMenu
