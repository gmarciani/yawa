import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IProfileDetails} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useAuth} from '../../../../auth'

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  phone: Yup.string().required('Contact phone is required'),
  location: Yup.string().required('Location is required'),
  language: Yup.string().required('Language is required'),
})

const ProfileDetails: React.FC = () => {
  const {currentUser} = useAuth()
  const initialValues: IProfileDetails = {
    avatar: currentUser?.picture || '/media/avatars/300-1.jpg',
    fName: currentUser?.firstname || '',
    lName: currentUser?.lastname || '',
    phone: currentUser?.phone || '',
    location: currentUser?.location || '',
    language: currentUser?.language || '',
  }
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.fName = data.fName
        values.lName = data.lName
        values.avatar = data.avatar
        values.phone = data.phone
        values.location = data.location
        values.language = data.language
        const updatedData = Object.assign(data, values)
        setData(updatedData)
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
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
              <div className='col-lg-8'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                  ></div>
                </div>
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
                      {...formik.getFieldProps('fName')}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...formik.getFieldProps('lName')}
                    />
                    {formik.touched.lName && formik.errors.lName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lName}</div>
                      </div>
                    )}
                  </div>
                </div>
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
                  <option value=''>Select a Language...</option>
                  <option value='id'>Bahasa Indonesia - Indonesian</option>
                  <option value='msa'>Bahasa Melayu - Malay</option>
                  <option value='ca'>Català - Catalan</option>
                  <option value='cs'>Čeština - Czech</option>
                  <option value='da'>Dansk - Danish</option>
                  <option value='de'>Deutsch - German</option>
                  <option value='en'>English</option>
                  <option value='en-gb'>English UK - British English</option>
                  <option value='es'>Español - Spanish</option>
                  <option value='fil'>Filipino</option>
                  <option value='fr'>Français - French</option>
                  <option value='ga'>Gaeilge - Irish (beta)</option>
                  <option value='gl'>Galego - Galician (beta)</option>
                  <option value='hr'>Hrvatski - Croatian</option>
                  <option value='it'>Italiano - Italian</option>
                  <option value='hu'>Magyar - Hungarian</option>
                  <option value='nl'>Nederlands - Dutch</option>
                  <option value='no'>Norsk - Norwegian</option>
                  <option value='pl'>Polski - Polish</option>
                  <option value='pt'>Português - Portuguese</option>
                  <option value='ro'>Română - Romanian</option>
                  <option value='sk'>Slovenčina - Slovak</option>
                  <option value='fi'>Suomi - Finnish</option>
                  <option value='sv'>Svenska - Swedish</option>
                  <option value='vi'>Tiếng Việt - Vietnamese</option>
                  <option value='tr'>Türkçe - Turkish</option>
                  <option value='el'>Ελληνικά - Greek</option>
                  <option value='bg'>Български език - Bulgarian</option>
                  <option value='ru'>Русский - Russian</option>
                  <option value='sr'>Српски - Serbian</option>
                  <option value='uk'>Українська мова - Ukrainian</option>
                  <option value='he'>עִבְרִית - Hebrew</option>
                  <option value='ur'>اردو - Urdu (beta)</option>
                  <option value='ar'>العربية - Arabic</option>
                  <option value='fa'>فارسی - Persian</option>
                  <option value='mr'>मराठी - Marathi</option>
                  <option value='hi'>हिन्दी - Hindi</option>
                  <option value='bn'>বাংলা - Bangla</option>
                  <option value='gu'>ગુજરાતી - Gujarati</option>
                  <option value='ta'>தமிழ் - Tamil</option>
                  <option value='kn'>ಕನ್ನಡ - Kannada</option>
                  <option value='th'>ภาษาไทย - Thai</option>
                  <option value='ko'>한국어 - Korean</option>
                  <option value='ja'>日本語 - Japanese</option>
                  <option value='zh-cn'>简体中文 - Simplified Chinese</option>
                  <option value='zh-tw'>繁體中文 - Traditional Chinese</option>
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
