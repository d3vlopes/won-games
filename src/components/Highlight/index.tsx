import Button from 'components/Button'
import * as S from './styles'

export type HiglightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: HiglightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
    <Button as="a" href={buttonLink}>
      {buttonLabel}
    </Button>
  </S.Wrapper>
)

export default Highlight
