import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CRow,
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPopover,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilPen, cilDelete } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'
import countries from 'src/components/data/countries'
import currencies from 'src/components/data/currencies'

const User = () => {
  const CompanyTableData = []
  const [validated, setValidated] = useState(false)

  const [UserFormData, setUserFormData] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    username: '',
    nicPassport: '',
    email: '',
    contactNo: '',
    password: '',
    userGroup: {
      _id: '',
    },
    enabled: false,
  })

  const handleUserFormChange = (e) => {
    const { name, value } = e.target
    setUserFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    setUserFormData({
      _id: '',
      firstName: '',
      lastName: '',
      username: '',
      nicPassport: '',
      email: '',
      contactNo: '',
      password: '',
      userGroup: {
        _id: '',
      },
      enabled: false,
    })

    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setValidated(true)

      await fetch(APIURL + 'branch', {
        method: 'POST',
        body: JSON.stringify(UserFormData),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          // localStorage.setItem('lastcompanyID', data._id)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  return (
    <>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CRow className="mt-3">
          <CCol md={4}>
            <CFormLabel htmlFor="firstName">First Name</CFormLabel>
            <CFormInput
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              value={UserFormData.firstName}
              onChange={handleUserFormChange}
            />
            <CFormFeedback invalid>Please provide a first name.</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
            <CFormInput
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
              value={UserFormData.lastName}
              onChange={handleUserFormChange}
            />
            <CFormFeedback invalid>Please provide a last name.</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="nicPassport">NIC</CFormLabel>
            <CFormInput
              type="text"
              id="nicPassport"
              name="nicPassport"
              placeholder="NIC"
              required
              value={UserFormData.nicPassport}
              onChange={handleUserFormChange}
            />
            <CFormFeedback invalid>Please provide a nic.</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="email">E-mail</CFormLabel>
            <CFormInput
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              value={UserFormData.email}
              onChange={handleUserFormChange}
            />
            <CFormFeedback invalid>Please provide a vaild email.</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="contactNo">Contact Number</CFormLabel>
            <CFormInput
              type="text"
              id="contactNo"
              name="contactNo"
              placeholder="Contact Number"
              value={UserFormData.contactNo}
              onChange={handleUserFormChange}
            />
            {/* <CFormFeedback valid>Looks good!</CFormFeedback> */}
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="empStatus">Status</CFormLabel>
            <CFormSelect
              aria-label="Permission"
              id="status"
              name="status"
              placeholder="Status"
              required
              value={UserFormData.country}
              onChange={handleUserFormChange}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </CFormSelect>
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>
          <CCol xs={12} className="mt-3">
            <CButton color="primary" type="submit">
              Submit
            </CButton>
          </CCol>
        </CRow>
      </CForm>
      <CRow className="mt-3">
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>User</strong> <small>Details</small>
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
                    <CTableRow key={index}>
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
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="warning"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            // onClick={() => handleCompanyEdit(true, 'edit', Company._id)}
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
                            // onClick={() => handleCompanyDelete(Company._id)}
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
    </>
  )
}

export default User
