import {FC} from 'react'
import {ToggleHelpDrawer} from './help-drawer/ToggleHelpDrawer'
import {HelpDrawer} from './help-drawer/HelpDrawer'
import {PurchaseButton} from './purchase/PurchaseButton'

const RightToolbar: FC = () => {
  const showHelperButton = process.env.REACT_APP_SUPPORT_SHOW_HELPER_BUTTON === 'true'
  const showPurchaseButton = process.env.REACT_APP_PURCHASE_SHOW_BUTTON === 'true'

  return (
    <>
      <div className='engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 end-0 transform-90 mt-20 gap-2'>
        { showHelperButton && <ToggleHelpDrawer /> }
        { showPurchaseButton && <PurchaseButton /> }
      </div>

      <HelpDrawer />
    </>
  )
}

export {RightToolbar}
