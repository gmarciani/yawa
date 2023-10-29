import {FC} from 'react'
import {ToggleHelpDrawer} from './help-drawer/ToggleHelpDrawer'
import {HelpDrawer} from './help-drawer/HelpDrawer'
import {PurchaseButton} from './purchase/PurchaseButton'

const RightToolbar: FC = () => {
  // const showPurchaseButton = String(process.env.REACT_APP_PURCHASE_SHOW_BUTTON).toLowerCase() === 'true'
  const showPurchaseButton = process.env.REACT_APP_PURCHASE_SHOW_BUTTON === 'true'
  // const showPurchaseButton = false

  return (
    <>
      <div className='engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 end-0 transform-90 mt-20 gap-2'>
        <ToggleHelpDrawer />
        { showPurchaseButton && <PurchaseButton /> }
      </div>

      <HelpDrawer />
    </>
  )
}

export {RightToolbar}
