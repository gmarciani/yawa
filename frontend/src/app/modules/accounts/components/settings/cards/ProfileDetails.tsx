import React, {useEffect, useRef, useState} from 'react'
import {toAbsoluteApiUrl, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IProfileDetails} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useAuth} from '../../../../auth'
import {deleteUserProfilePicture, updateUserProfile, updateUserProfilePicture} from '../../../core/_requests'
import {UserProfileGenderEnum, UserProfileLanguageEnum} from '../../../../clients/yawa'

const profileDetailsSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required'),
  lastname: Yup.string().required('Lastname is required'),
  gender: Yup.string().required('Gender is required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  phone: Yup.string().required('Phone is required'),
  language: Yup.string().required('Language is required'),
  location: Yup.string().required('Location is required'),
})

const MAX_IMAGE_SIZE_MB = 2
const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * 1024 * 1024
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png']

const ProfileDetails: React.FC = () => {
  const {currentUser} = useAuth()
  const initialValues: IProfileDetails = {
    firstname: currentUser?.firstname || '',
    lastname: currentUser?.lastname || '',
    gender: currentUser?.gender || '',
    dateOfBirth: currentUser?.dateOfBirth || '',
    phone: currentUser?.phone || '',
    language: currentUser?.language || '',
    location: currentUser?.location || '',
    picture: currentUser?.picture || '/media/avatars/300-1.jpg',
  }
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [imageError, setImageError] = useState<string | null>(null)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const validateImage = (file: File): Promise<string | null> => {
    return new Promise((resolve) => {
      if (file.size > MAX_IMAGE_SIZE_BYTES) {
        return resolve(`Image must be less than ${MAX_IMAGE_SIZE_MB}MB`)
      }
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        return resolve(`Invalid file type. Only JPEG and PNG are allowed.`)
      }
    })
  }

  const handleImageUpload = async (file: File) => {
    console.log(`Uploading image: ${file.name}`)
    // const error = await validateImage(file)
    // if (error) {
    //   console.log(`Cannot upload image: ${error}`)
    //   setImageError(error)
    //   return
    // }
    // setImageError(null)
    // setUploading(true)

    console.log(`Image validated`)

    try {
      const pictureUrl = await updateUserProfilePicture(file)
      setProfileImageUrl(pictureUrl)
      updateData({picture: pictureUrl})
    } catch (err) {
      setImageError('Failed to upload image')
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  const handleImageDelete = async () => {
    try {
      await deleteUserProfilePicture()
      setProfileImageUrl(null)
      updateData({picture: ''})
    } catch (err) {
      setImageError(`Failed to delete picture: ${err}`)
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(async () => {
        data.firstname = values.firstname
        data.lastname = values.lastname
        data.gender = values.gender
        data.dateOfBirth = values.dateOfBirth
        data.phone = values.phone
        data.location = values.location
        data.language = values.language
        data.picture = values.picture
        await updateUserProfile(values)
        setData(data)
        setLoading(false)
      }, 1000)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Profile</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Picture</label>
              <div className='col-lg-8'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteApiUrl(data.picture)})`}}
                  ></div>
                  <label
                    className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                    data-kt-image-input-action='change'
                    htmlFor='avatar-upload'
                  >
                    <i className='bi bi-pencil-fill fs-7'></i>
                    <input
                      type='file'
                      id='avatar-upload'
                      name='avatar'
                      accept='image/png, image/jpeg'
                      style={{display: 'none'}}
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          console.log(`File to upload as user profile picture: ${file.name}`)
                          handleImageUpload(file)
                        }
                      }}
                    />
                  </label>
                  <span
                    className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                    data-kt-image-input-action='remove'
                    onClick={() => handleImageDelete()}
                  >
                    <i className='bi bi-x fs-2'></i>
                  </span>
                </div>
                {imageError && (
                  <div className='text-danger mt-2'>
                    <small>{imageError}</small>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Name</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='First name'
                      {...formik.getFieldProps('firstname')}
                    />
                    {formik.touched.firstname && formik.errors.firstname && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.firstname}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...formik.getFieldProps('lastname')}
                    />
                    {formik.touched.lastname && formik.errors.lastname && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lastname}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Gender</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('gender')}
                >
                  {Object.values(UserProfileGenderEnum).map(gender => (
                    <option key={gender} value={gender}>
                      {gender.charAt(0) + gender.slice(1).toLowerCase()}
                    </option>
                  ))}
                </select>
                {formik.touched.gender && formik.errors.gender && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.gender}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Date Of Birth</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Date Of Birth'
                  {...formik.getFieldProps('dateOfBirth')}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.dateOfBirth}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Phone</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Phone number'
                  {...formik.getFieldProps('phone')}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.phone}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Location</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Location'
                  {...formik.getFieldProps('location')}
                />
                {formik.touched.location && formik.errors.location && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.location}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Language</label>
              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('language')}
                >
                  {Object.values(UserProfileLanguageEnum).map(language => (
                    <option key={language} value={language}>
                      {language.charAt(0) + language.slice(1).toLowerCase()}
                    </option>
                  ))}
                </select>
                {formik.touched.language && formik.errors.language && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.language}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {ProfileDetails}
