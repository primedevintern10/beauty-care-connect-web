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

const User = (modelProps) => {
  const CompanyTableData = []
  const [validated, setValidated] = useState(false)

  const [userGroupData, setUserGroupData] = useState([])
  const [BranchData, setBranchData] = useState([])

  const [UserData, setUserData] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    username: '',
    nicPassport: '',
    email: '',
    contactNo: '',
    password: '',
    userGroup: '',
    enabled: false,
    branch: '',
  })

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

  const [EmployeeFormData, setEmployeeFormData] = useState({
    _id: '',
    nic: '',
    name: '',
    nickName: '',
    email: '',
    contactNo: '',
    isEnabled: true,
    type: '',
    branch: [
      {
        _id: '',
      },
    ],
  })

  const handleUserFormChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const userSubmit = async (UserDetails) => {
    await fetch(APIURL + 'auth/register', {
      method: 'POST',
      body: JSON.stringify(UserDetails),
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

  const EmployeeSubmit = async (EmployeeDetails) => {
    // console.log(EmployeeDetails)
    await fetch(APIURL + 'employee', {
      method: 'POST',
      body: JSON.stringify(EmployeeDetails),
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

  const handleSubmit = async (event) => {
    const EmployeeDetails = {
      nic: UserData.nicPassport,
      name: UserData.firstName + UserData.lastName,
      nickName: UserData.firstName,
      email: UserData.email,
      contactNo: UserData.contactNo,
      isEnabled: true,
      type: UserData.userGroup,
      branch: [
        {
          _id: UserData.branch,
        },
      ],
    }

    const UserDetails = {
      firstName: UserData.firstName,
      lastName: UserData.lastName,
      username: UserData.email,
      nicPassport: UserData.nicPassport,
      email: UserData.email,
      contactNo: UserData.contactNo,
      password: UserData.password,
      userGroup: {
        _id: UserData.userGroup,
      },
      enabled: true,
    }

    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setValidated(true)
      EmployeeSubmit(EmployeeDetails)
      userSubmit(UserDetails)
    }
  }

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
          console.log(data)
          setUserGroupData(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const fetchBranch = async () => {
    try {
      await fetch(APIURL + 'branch/by-company/' + modelProps.CompanyData._id, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setBranchData(data)
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
    fetchBranch()
  }, [])

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
              value={UserData.firstName}
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
              value={UserData.lastName}
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
              value={UserData.nicPassport}
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
              value={UserData.email}
              onChange={handleUserFormChange}
            />
            <CFormFeedback invalid>Please provide a vaild email.</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="password">Password</CFormLabel>
            <CFormInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={UserData.password}
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
              value={UserData.contactNo}
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
              value={UserData.country}
              onChange={handleUserFormChange}
            >
              <option value={true}>Enabled</option>
              <option value={false}>Disable</option>
            </CFormSelect>
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="userGroup">User Group</CFormLabel>
            <CFormSelect
              aria-label="userGroup"
              id="userGroup"
              name="userGroup"
              placeholder="userGroup"
              value={UserData.userGroup}
              required
              onChange={handleUserFormChange}
            >
              <option>Select User Group</option>
              {userGroupData.map((userGroup, index) => (
                <option key={'Company_' + index} value={userGroup._id}>
                  {userGroup.name}
                </option>
              ))}
            </CFormSelect>
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="branch">Branch</CFormLabel>
            <CFormSelect
              aria-label="branch"
              id="branch"
              name="branch"
              placeholder="branch"
              value={UserData.branch}
              required
              onChange={handleUserFormChange}
            >
              <option>Select Branch</option>
              {BranchData.map((branch, index) => (
                <option key={'Company_' + index} value={branch._id}>
                  {branch.name}
                </option>
              ))}
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
