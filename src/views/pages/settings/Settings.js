import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CFormCheck, CFormLabel, CRow } from '@coreui/react'

const Settings = () => {
  const [rememberFilters, setRememberFilters] = useState(
    sessionStorage.getItem('rememberFilters') === 'true',
  )

  const handleRememberFilters = (event) => {
    const checked = event.target.checked
    setRememberFilters(checked)
    sessionStorage.setItem('rememberFilters', String(checked))
  }

  const handleClearSession = () => {
    sessionStorage.clear()
    window.location.href = '/'
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Settings</strong>
          </CCardHeader>
          <CCardBody>
            <div className="mb-3">
              <CFormLabel className="d-block">Preferences</CFormLabel>
              <CFormCheck
                id="rememberFilters"
                label="Remember table filters in this session"
                checked={rememberFilters}
                onChange={handleRememberFilters}
              />
            </div>
            <CButton color="danger" variant="outline" onClick={handleClearSession}>
              Logout and clear session
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Settings
