import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyle from 'components/TextField/styles'
import * as ButtonStyle from 'components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyle.Wrapper} {
      margin: ${theme.spacings.xxsmall};
    }

    ${ButtonStyle.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
