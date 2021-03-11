import { Spinner3 as Spinner } from '@styled-icons/evil/Spinner3'

import * as S from './styles'

// eslint-disable-next-line prettier/prettier
export type LoadingColors = 'primary' | 'secondary' | 'mainBg' | 'lightBg' | 'white' | 'black' | 'lightGray' | 'gray' | 'darkGray' | 'red'

export type LoadingProps = {
  color: LoadingColors
  size?: string | number
}

const Loading = ({ color, size = 3.4 }: LoadingProps) => (
  <S.Wrapper id="loading" color={color} size={size}>
    <Spinner />
  </S.Wrapper>
)

export default Loading
