import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
}

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => (
  // Retorna true ou false
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {icon}
    {/* Se for children faz isso */}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
