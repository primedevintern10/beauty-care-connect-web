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

const Branch = (modelProps) => {
  const CompanyTableData = []
  const [validated, setValidated] = useState(false)

  const [SendBranchFormData, setSendBranchFormData] = useState({
    get_id: '',
    name: '',
    contactNo: '',
    address: {
      no: '',
      street: '',
      city: '',
      country: '',
      postalCode: '',
    },
    email: '',
    company: {
      get_id: '',
    },
  })

  const [BranchFormData, setBranchFormData] = useState({
    get_id: '',
    name: '',
    contactNo: '',
    no: '',
    street: '',
    city: '',
    country: '',
    postalCode: '',
    email: '',
  })

  const [BranchData, setBranchData] = useState([])

  const handleBranchFormChange = (e) => {
    const { name, value } = e.target
    setBranchFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleBranchSubmit = async (event) => {
    const BranchDetails = {
      _id: '',
      name: BranchFormData.name,
      contactNo: BranchFormData.contactNo,
      address: {
        no: BranchFormData.no,
        street: BranchFormData.street,
        city: BranchFormData.city,
        country: BranchFormData.country,
        postalCode: BranchFormData.postalCode,
      },
      email: BranchFormData.email,
      company: {
        _id: localStorage.getItem('lastcompanyID'),
      },
    }

    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setValidated(true)

      await fetch(APIURL + 'branch', {
        method: 'POST',
        body: JSON.stringify(BranchDetails),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          localStorage.setItem('lastBranchID', data._id)
        })
        .catch((err) => {
          console.log(err.message)
        })
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
    fetchBranch()
  }, [])

  return (
    <>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleBranchSubmit}
      >
        <CRow className="mt-3">
          <CCol md={4}>
            <CFormLabel htmlFor="name">Branch Name</CFormLabel>
            <CFormInput
              type="text"
              id="name"
              name="name"
              required
              placeholder="Branch Name"
              value={BranchFormData.name}
              onChange={handleBranchFormChange}
            />
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="contactNo">Contact No</CFormLabel>
            <CFormInput
              type="text"
              id="contactNo"
              name="contactNo"
              required
              placeholder="Contact No"
              value={BranchFormData.contactNo}
              onChange={handleBranchFormChange}
            />
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="no">NO</CFormLabel>
            <CFormInput
              type="text"
              id="no"
              name="no"
              placeholder="No"
              value={BranchFormData.no}
              onChange={handleBranchFormChange}
            />
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="street">Street</CFormLabel>
            <CFormInput
              type="text"
              id="street"
              name="street"
              placeholder="Street"
              value={BranchFormData.street}
              onChange={handleBranchFormChange}
            />
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="city">City</CFormLabel>
            <CFormInput
              type="text"
              id="city"
              name="city"
              required
              placeholder="City"
              value={BranchFormData.city}
              onChange={handleBranchFormChange}
            />
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="country">Country</CFormLabel>
            <CFormSelect
              aria-label="Permission"
              id="country"
              name="country"
              placeholder="Country"
              required
              value={BranchFormData.country}
              onChange={handleBranchFormChange}
            >
              <option>select permission</option>
              {countries.map((country, index) => (
                <option key={'Branch_' + index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </CFormSelect>
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="postalCode">Postal Code</CFormLabel>
            <CFormInput
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Postal Code"
              value={BranchFormData.postalCode}
              onChange={handleBranchFormChange}
            />
            <CFormFeedback valid>Looks good!</CFormFeedback>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="email">Email</CFormLabel>
            <CFormInput
              type="text"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={BranchFormData.email}
              onChange={handleBranchFormChange}
            />
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
              <strong>Branch</strong> <small>Details</small>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Branch Name</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {BranchData.map((Branch, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell scope="row">{index + 1}</CTableDataCell>
                      <CTableDataCell>{Branch.name}</CTableDataCell>
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

export default Branch
