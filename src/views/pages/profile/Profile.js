import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'

const Profile = () => {
  const username = sessionStorage.getItem('username') || '-'
  const userId = sessionStorage.getItem('userID') || '-'
  const firstName = sessionStorage.getItem('userFName') || '-'
  const email = sessionStorage.getItem('userEmail') || '-'
  const role = sessionStorage.getItem('userGroupName') || sessionStorage.getItem('userGroupID') || '-'

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Profile</strong>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell>Username</CTableHeaderCell>
                  <CTableDataCell>{username}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableDataCell>{firstName}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell>Email</CTableHeaderCell>
                  <CTableDataCell>{email}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell>Role</CTableHeaderCell>
                  <CTableDataCell>{role}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell>User ID</CTableHeaderCell>
                  <CTableDataCell>{userId}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Profile
