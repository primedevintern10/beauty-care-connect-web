import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

import AddCategoryForm from './AddEmployee'
import EditCategoryForm from './EditEmployee'

const EmployeeModel = (modelProps) => {
  return (
    <>
      <CModal visible={modelProps.showModal} onClose={modelProps.closeMOdel}>
        <CModalHeader>
          <CModalTitle>{modelProps.dataModel === 'add' ? 'Add' : 'Edit'} Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modelProps.dataModel === 'add' ? (
            <AddCategoryForm />
          ) : (
            <EditCategoryForm employeeData={modelProps.employeeData} />
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={modelProps.closeMOdel}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default EmployeeModel
