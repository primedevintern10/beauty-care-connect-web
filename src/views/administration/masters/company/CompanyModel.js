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
            <AddCompanyForm CompanyData={null} dataModel={modelProps.dataModel} />
          ) : (
            <EditCompanyForm
              CompanyData={modelProps.CompanyData}
              dataModel={modelProps.dataModel}
            />
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
