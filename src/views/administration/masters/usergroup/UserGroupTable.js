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

import UserGroupModel from './UserGroupModel'
import APIURL from 'src/components/ApiConfig'

const UserGroupTable = () => {
  const [visible, setVisible] = useState(false)
  const [formType, setFormType] = useState('')
  const [userGroupTableData, setUserGroupTableData] = useState([])
  const [userGroupID, setUserGroupID] = useState('')
  const [userGroupTableDataByID, setUserGroupTableDataByID] = useState([])

  const fetchUserGroup = async () => {
    try {
      await fetch(APIURL + 'userGroup', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          setUserGroupTableData(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchUserGroup()
  }, [])

  const handleUserGroupEdit = async (isvisible, type, userGroupID = null) => {
    try {
      await fetch(APIURL + 'userGroup/' + userGroupID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setUserGroupTableDataByID(data)
          setVisible(isvisible)
          setFormType(type)
          setUserGroupID(userGroupID)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleUserGroupAdd = (isvisible, type, userGroupID = null) => {
    setVisible(isvisible)
    setFormType(type)
    setUserGroupID(userGroupID)
  }

  const handleUserGroupDelete = async (userGroupID) => {
    try {
      await fetch(APIURL + 'userGroup/' + userGroupID, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>User Group</strong> <small></small>
              <CButton
                color="primary"
                variant="outline"
                size="sm"
                className="float-sm-end"
                onClick={() => handleUserGroupAdd(true, 'add')}
              >
                <CIcon icon={cilPlus} customClassName="" /> Add
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">User Group</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Permission</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {userGroupTableData.map((userGroup, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell scope="row">{index + 1}</CTableDataCell>
                      <CTableDataCell>{userGroup.name}</CTableDataCell>
                      <CTableDataCell>{userGroup.permission[0]}</CTableDataCell>
                      <CTableDataCell>
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="warning"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            onClick={() => handleUserGroupEdit(true, 'edit', userGroup._id)}
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
                            onClick={() => handleUserGroupDelete(userGroup._id)}
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
      <UserGroupModel
        showModal={visible}
        closeMOdel={() => setVisible(false)}
        dataModel={formType}
        UserGroupID={userGroupID}
        UserGroupData={userGroupTableDataByID}
      />
    </>
  )
}

export default UserGroupTable
