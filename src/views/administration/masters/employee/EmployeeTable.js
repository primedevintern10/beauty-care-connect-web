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

import EmployeeModel from './EmployeeModel'
import APIURL from 'src/components/ApiConfig'

const EmployeeTable = () => {
  const [visible, setVisible] = useState(false)
  const [formType, setFormType] = useState('')
  const [employeeTableData, setEmployeeTableData] = useState([])
  const [employeeID, setEmployeeID] = useState('')
  const [employeeTableDataByID, setEmployeeTableDataByID] = useState(null)

  const fetchEmployee = async () => {
    try {
      await fetch(APIURL + 'employee', {
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
          setEmployeeTableData(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchEmployee()
  }, [])

  const handleEmployeeEdit = async (isvisible, type, employeeID = null) => {
    if (!employeeID) {
      console.error('Missing Employee ID for edit action')
      return
    }

    try {
      await fetch(APIURL + 'employee/' + employeeID, {
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
          setEmployeeTableDataByID(data)
          setVisible(isvisible)
          setFormType(type)
          setEmployeeID(employeeID)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleEmployeeAdd = (isvisible, type, employeeID = null) => {
    setEmployeeTableDataByID(null)
    setVisible(isvisible)
    setFormType(type)
    setEmployeeID(employeeID)
  }

  const handleEmployeeDelete = async (employeeID) => {
    if (!employeeID) {
      console.error('Missing Employee ID for delete action')
      return
    }

    try {
      await fetch(APIURL + 'employee/' + employeeID, {
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
          fetchEmployee()
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
    setEmployeeID('')
    setEmployeeTableDataByID(null)
    fetchEmployee()
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Employee</strong> <small></small>
              <CButton
                color="primary"
                variant="outline"
                size="sm"
                className="float-sm-end"
                onClick={() => handleEmployeeAdd(true, 'add')}
              >
                <CIcon icon={cilPlus} customClassName="" /> Add
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Employee Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Contact No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {employeeTableData.map((employee, index) => (
                    <CTableRow key={employee._id || employee.id || index}>
                      <CTableDataCell scope="row">{index + 1}</CTableDataCell>
                      <CTableDataCell>{employee.name}</CTableDataCell>
                      <CTableDataCell>{employee.contactNo}</CTableDataCell>
                      <CTableDataCell>
                        <p>
                          <span
                            className={`badge rounded-pill text-bg-${
                              employee.isEnabled === true ? 'success' : 'danger'
                            }`}
                          >
                            {employee.isEnabled === true ? 'Active' : 'Inactive'}
                          </span>
                        </p>
                      </CTableDataCell>
                      <CTableDataCell>
                        {!(employee._id || employee.id) && (
                          <small className="text-danger me-2">Invalid ID</small>
                        )}
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="warning"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            disabled={!(employee._id || employee.id)}
                            onClick={() => handleEmployeeEdit(true, 'edit', employee._id || employee.id)}
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
                            disabled={!(employee._id || employee.id)}
                            onClick={() => handleEmployeeDelete(employee._id || employee.id)}
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
      <EmployeeModel
        showModal={visible}
        closeMOdel={closeModal}
        dataModel={formType}
        employeeID={employeeID}
        employeeData={employeeTableDataByID}
      />
    </>
  )
}

export default EmployeeTable
