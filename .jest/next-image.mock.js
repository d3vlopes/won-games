/* eslint-disable */
// Mock para substituir o nextImage nos testes
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest} = props
    return <img {...rest} />
  }
})
