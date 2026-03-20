import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span>BuautyCare</span>
        <span className="ms-1">&copy; 2026 APN Technologies.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <span>APN Technologies</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
