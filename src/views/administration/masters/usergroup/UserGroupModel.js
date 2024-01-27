import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

import AddUserGroup from './AddUserGroup'
import EditUserGroup from './EditUserGroup'

const UserGroupModel = (modelProps) => {
  return (
    <>
      <CModal visible={modelProps.showModal} onClose={modelProps.closeMOdel}>
        <CModalHeader>
          <CModalTitle>{modelProps.dataModel === 'add' ? 'Add' : 'Edit'} User Group</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modelProps.dataModel === 'add' ? (
            <AddUserGroup />
          ) : (
            <EditUserGroup UserGroupData={modelProps.UserGroupData} />
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

export default UserGroupModel
