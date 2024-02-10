import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

import AddServiceForm from './AddService'
import EditServiceForm from './EditService'

const ServiceModel = (modelProps) => {
  return (
    <>
      <CModal visible={modelProps.showModal} onClose={modelProps.closeModel}>
        <CModalHeader>
          <CModalTitle>{modelProps.dataModel === 'add' ? 'Add' : 'Edit'} Service</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modelProps.dataModel === 'add' ? (
            <AddServiceForm />
          ) : (
            <EditServiceForm ServiceData={modelProps.serviceData} />
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

export default ServiceModel
