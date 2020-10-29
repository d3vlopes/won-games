import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

// Pega as chaves de um type/interface
type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    /* Se a propriedade for passada */
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)};
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)};
  `}
`
