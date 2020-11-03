import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Abrir Menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Pesquisar" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Abrir Carrinho" />
        </S.IconWrapper>
      </S.MenuGroup>

      {/* Menu mobile */}
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fechar Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explorar</S.MenuLink>

          {/* Se tiver */}
          {!!username && (
            <>
              <S.MenuLink href="#">Minha Conta</S.MenuLink>
              <S.MenuLink href="#">Favoritos</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {/* Se não tiver */}
        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Entrar
            </Button>
            <span>ou</span>
            <S.CreateAccount href="#" title="Criar Conta">
              Criar Conta
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
