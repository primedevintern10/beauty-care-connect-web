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

import CompanyModel from './CompanyModel'
import APIURL from 'src/components/ApiConfig'

const CompanyTable = () => {
  const [visible, setVisible] = useState(false)
  const [formType, setFormType] = useState('')
  const [CompanyTableData, setCompanyTableData] = useState([])
  const [CompanyID, setCompanyID] = useState('')
  const [CompanyTableDataByID, setCompanyTableDataByID] = useState(null)

  const fetchCompany = async () => {
    try {
      await fetch(APIURL + 'company', {
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
          setCompanyTableData(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchCompany()
  }, [])

  const closeMode = async () => {
    setVisible(false)
    setFormType('')
    setCompanyID('')
    setCompanyTableDataByID(null)
    fetchCompany()
  }

  const handleCompanyEdit = async (isvisible, type, CompanyID = null) => {
    if (!CompanyID) {
      console.error('Missing Company ID for edit action')
      return
    }

    try {
      await fetch(APIURL + 'company/' + CompanyID, {
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
          setCompanyTableDataByID(data)
          setVisible(isvisible)
          setFormType(type)
          setCompanyID(CompanyID)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleCompanyAdd = (isvisible, type, CompanyID = null) => {
    setCompanyTableDataByID(null)
    setVisible(isvisible)
    setFormType(type)
    setCompanyID(CompanyID)
  }

  const handleCompanyDelete = async (CompanyID) => {
    if (!CompanyID) {
      console.error('Missing Company ID for delete action')
      return
    }

    try {
      await fetch(APIURL + 'company/' + CompanyID, {
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
        .then((data) => {
          console.log(data)
          fetchCompany()
        })
        .catch((err) => {
          console.log(err.message)
          fetchCompany()
        })
      // fetchCompany()
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error.message)
    }
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Company</strong> <small></small>
              <CButton
                color="primary"
                variant="outline"
                size="sm"
                className="float-sm-end"
                onClick={() => handleCompanyAdd(true, 'add')}
              >
                <CIcon icon={cilPlus} customClassName="" /> Add
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Company Name</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {CompanyTableData.map((Company, index) => (
                    <CTableRow key={Company._id || Company.id || index}>
                      <CTableDataCell scope="row">{index + 1}</CTableDataCell>
                      <CTableDataCell>{Company.name}</CTableDataCell>
                      {/* <CTableDataCell>{Company.CreatedDate}</CTableDataCell>
                      <CTableDataCell>
                        <p>
                          <span
                            className={`badge rounded-pill text-bg-${
                              Company.Status === 1 ? 'success' : 'danger'
                            }`}
                          >
                            {Company.Status === 1 ? 'Active' : 'Inactive'}
                          </span>
                        </p>
                      </CTableDataCell> */}
                      <CTableDataCell>
                        {!(Company._id || Company.id) && (
                          <small className="text-danger me-2">Invalid ID</small>
                        )}
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="warning"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            disabled={!(Company._id || Company.id)}
                            onClick={() => handleCompanyEdit(true, 'edit', Company._id || Company.id)}
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
                            disabled={!(Company._id || Company.id)}
                            onClick={() => handleCompanyDelete(Company._id || Company.id)}
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
      <CompanyModel
        showModal={visible}
        closeModel={() => closeMode()}
        dataModel={formType}
        CompanyID={CompanyID}
        CompanyData={CompanyTableDataByID}
      />
    </>
  )
}

export default CompanyTable
