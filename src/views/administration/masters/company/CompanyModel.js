import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

import AddCompanyForm from './AddCompany'
import EditCompanyForm from './EditCompany'

const CompanyModel = (modelProps) => {
  return (
    <>
      <CModal visible={modelProps.showModal} onClose={modelProps.closeModel} size="xl">
        <CModalHeader>
          <CModalTitle>{modelProps.dataModel === 'add' ? 'Add' : 'Edit'} Company</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modelProps.dataModel === 'add' ? (
            <AddCompanyForm />
          ) : (
            <EditCompanyForm CompanyData={modelProps.CompanyData} />
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={modelProps.closeModel}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default CompanyModel
