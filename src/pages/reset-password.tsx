import Auth from 'templates/Auth'
import FormResetPassword from 'components/FormResetPassword'

export default function ResetPassword() {
  return (
    <Auth title="Recuperar nova senha">
      <FormResetPassword />
    </Auth>
  )
}
