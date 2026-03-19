import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import Company from './components/Company'
import Branch from './components/Branch'
import User from './components/User'

const AddCompanyForm = (modelProps) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Company</strong> <small>Setup</small>
          </CCardHeader>
          <CCardBody>{Company(modelProps)}</CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Branch</strong> <small>Setup</small>
          </CCardHeader>
          <CCardBody>{Branch(modelProps)}</CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>User</strong> <small>Setup</small>
          </CCardHeader>
          <CCardBody>{User(modelProps)}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddCompanyForm
