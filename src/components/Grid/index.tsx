import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    // Se auto preenche
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
  `}
`
