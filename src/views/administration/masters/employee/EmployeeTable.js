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
  const [employeeTableDataByID, setEmployeeTableDataByID] = useState([])

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        await fetch(APIURL + 'employee', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
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
    fetchEmployee()
  }, [])

  const handleEmployeeEdit = async (isvisible, type, employeeID = null) => {
    try {
      await fetch(APIURL + 'user/' + employeeID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
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
    setVisible(isvisible)
    setFormType(type)
    setEmployeeID(employeeID)
  }

  const handleEmployeeDelete = async (event, employeeID) => {
    event.preventDefault()
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
                    <CTableRow key={index}>
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
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="warning"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            onClick={() => handleEmployeeEdit(true, 'edit', employee._id)}
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
                            onClick={() => handleEmployeeDelete(employee._id)}
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
        closeMOdel={() => setVisible(false)}
        dataModel={formType}
        employeeID={employeeID}
        employeeData={employeeTableDataByID}
      />
    </>
  )
}

export default EmployeeTable
