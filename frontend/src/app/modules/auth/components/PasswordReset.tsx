import {useEffect, useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useSearchParams} from 'react-router-dom'
import {useFormik} from 'formik'
import {resetPassword} from '../core/_requests'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'

const initialValues = {
  password: '',
  passwordConfirm: '',
}

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
})

export function PasswordReset() {
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)

  const token = searchParams.get('token') ?? ''

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        resetPassword(values.password, token)
          .then(response => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The password has been successfully reset')
          })
      }, 1000)
    },
  })

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_password_reset_form'
      onSubmit={formik.handleSubmit}
    >
      <div className='text-center mb-10'>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>Reset Password</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-500 fw-semibold fs-6'>
          Enter your new password
        </div>
        {/* end::Link */}
      </div>

      {/* begin::Title */}
      {hasErrors === true && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>
            {error}
          </div>
        </div>
      )}

      {hasErrors === false && (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>Password has been reset. Go back to
            <Link to='/auth/login' className='link-primary'> Login</Link>
          </div>
        </div>
      )}
      {/* end::Title */}

      {/* begin::Form group Password */}
      <div className='fv-row mb-8' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>Password</label>
          <div className='position-relative mb-3'>
            <input
              type='password'
              placeholder='Password'
              autoComplete='off'
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.password && formik.errors.password,
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          {/* begin::Meter */}
          <div
            className='d-flex align-items-center mb-3'
            data-kt-password-meter-control='highlight'
          >
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
          </div>
          {/* end::Meter */}
        </div>
        <div className='text-muted'>
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
      </div>
      {/* end::Form group Password */}

      {/* begin::Form group Confirm Password */}
      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
        <input
          type='password'
          placeholder='Password confirmation'
          autoComplete='off'
          {...formik.getFieldProps('passwordConfirm')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.passwordConfirm && formik.errors.passwordConfirm,
            },
            {
              'is-valid': formik.touched.passwordConfirm && !formik.errors.passwordConfirm,
            }
          )}
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.passwordConfirm}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group Confirm Password */}

      {/* begin::Form group Submit */}
      <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
        <button
          type='submit'
          id='kt_password_reset_submit'
          className='btn btn-primary me-4'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          <span className='indicator-label'>Submit</span>
          {loading && (
            <span className='indicator-progress'>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_password_reset_form_cancel_button'
            className='btn btn-light'
            disabled={formik.isSubmitting}
          >
            Login
          </button>
        </Link>
      </div>
      {/* end::Form group Submit */}
    </form>
  )
}
