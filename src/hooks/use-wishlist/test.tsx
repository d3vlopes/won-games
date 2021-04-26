import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'
import { useWishlist, WishlistProvider } from '.'
import { wishlistMock } from './mock'

describe('useWihslist', () => {
  it('should render wishlist items', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useWishlist, { wrapper })
  })
})
