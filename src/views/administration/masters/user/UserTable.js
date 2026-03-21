import React, { useState, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CPopover,
} from '@coreui/react'
import { cilPlus, cilPen, cilDelete } from '@coreui/icons'

import UserModel from './UserModel'
import APIURL from 'src/components/ApiConfig'

const UserTable = () => {
  const [visible, setVisible] = useState(false)
  const [formType, setFormType] = useState('')
  const [UserTableData, setUserTableData] = useState([])
  const [UserID, setUserID] = useState('')
  const [UserTableDataByID, setUserTableDataByID] = useState(null)

  const fetchUser = async () => {
    try {
      await fetch(APIURL + 'user', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(await response.text())
          }
          return response.json()
        })
        .then((data) => {
          console.log(data)
          setUserTableData(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const handleUserEdit = async (isvisible, type, UserID = null) => {
    if (!UserID) {
      console.error('Missing User ID for edit action')
      return
    }

    try {
      await fetch(APIURL + 'user/' + UserID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(await response.text())
          }
          return response.json()
        })
        .then((data) => {
          console.log(data)
          setUserTableDataByID(data)
          setVisible(isvisible)
          setFormType(type)
          setUserID(UserID)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleUserAdd = (isvisible, type, UserID = null) => {
    setUserTableDataByID(null)
    setVisible(isvisible)
    setFormType(type)
    setUserID(UserID)
  }

  const handleUserDelete = async (UserID) => {
    if (!UserID) {
      console.error('Missing User ID for delete action')
      return
    }

    try {
      await fetch(APIURL + 'user/' + UserID, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(async (response) => {
          const message = await response.text()
          if (!response.ok) {
            throw new Error(message || 'Delete failed')
          }
          return message
        })
        .then(() => {
          fetchUser()
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error submitting form:', error.message)
    }
  }

  const closeModal = () => {
    setVisible(false)
    setFormType('')
    setUserID('')
    setUserTableDataByID(null)
    fetchUser()
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>User</strong> <small></small>
              <CButton
                color="primary"
                variant="outline"
                size="sm"
                className="float-sm-end"
                onClick={() => handleUserAdd(true, 'add')}
              >
                <CIcon icon={cilPlus} customClassName="" /> Add
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {UserTableData.map((User, index) => (
                    <CTableRow key={User._id || User.id || index}>
                      <CTableDataCell scope="row">{index + 1}</CTableDataCell>
                      <CTableDataCell>{User.firstName + '' + User.lastName}</CTableDataCell>
                      <CTableDataCell>{User.CreatedDate}</CTableDataCell>
                      <CTableDataCell>
                        <p>
                          <span
                            className={`badge rounded-pill text-bg-${
                              User.Status === 1 ? 'success' : 'danger'
                            }`}
                          >
                            {User.Status === 1 ? 'Active' : 'Inactive'}
                          </span>
                        </p>
                      </CTableDataCell>
                      <CTableDataCell>
                        {!(User._id || User.id) && (
                          <small className="text-danger me-2">Invalid ID</small>
                        )}
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="warning"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            disabled={!(User._id || User.id)}
                            onClick={() => handleUserEdit(true, 'edit', User._id || User.id)}
                          >
                            <CIcon icon={cilPen} customClassName="" />
                          </CButton>
                        </CPopover>
                        <CPopover content="Delete" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="danger"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            disabled={!(User._id || User.id)}
                            onClick={() => handleUserDelete(User._id || User.id)}
                          >
                            <CIcon icon={cilDelete} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <UserModel
        showModal={visible}
        closeMOdel={closeModal}
        dataModel={formType}
        UserID={UserID}
        UserData={UserTableDataByID}
      />
    </>
  )
}

export default UserTable
