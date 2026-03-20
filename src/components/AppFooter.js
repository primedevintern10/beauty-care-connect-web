import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="mx-auto">
        <span>BeautyCare &copy; 2026</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
