import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

import AddCategoryForm from './AddUser'
import EditCategoryForm from './EditUser'

const UserModel = (modelProps) => {
  return (
    <>
      <CModal visible={modelProps.showModal} onClose={modelProps.closeMOdel}>
        <CModalHeader>
          <CModalTitle>{modelProps.dataModel === 'add' ? 'Add' : 'Edit'} User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modelProps.dataModel === 'add' ? (
            <AddCategoryForm />
          ) : (
            <EditCategoryForm UserData={modelProps.UserData} />
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

export default UserModel
