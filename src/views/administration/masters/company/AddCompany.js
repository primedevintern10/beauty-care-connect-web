import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'

const Company = () => {
  return (
    <CRow>
      <CCol md={4}>
        <CFormLabel htmlFor="name">Company Name</CFormLabel>
        <CFormInput type="text" id="name" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="registrationNo">Registration No</CFormLabel>
        <CFormInput type="text" id="registrationNo" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="name">Owner Name</CFormLabel>
        <CFormInput type="text" id="name" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="email">Email</CFormLabel>
        <CFormInput type="text" id="email" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="webUrl">Web Url</CFormLabel>
        <CFormInput type="text" id="webUrl" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="country">Country</CFormLabel>
        <CFormInput type="text" id="country" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="currency">Currency</CFormLabel>
        <CFormInput type="text" id="currency" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
    </CRow>
  )
}

const Branch = () => {
  return (
    <CRow>
      <CCol md={4}>
        <CFormLabel htmlFor="name">Branch Name</CFormLabel>
        <CFormInput type="text" id="name" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="contactNo">Contact No</CFormLabel>
        <CFormInput type="text" id="contactNo" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="addressNo">Address</CFormLabel>
        <CFormInput type="text" id="addressNo" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="street">Street</CFormLabel>
        <CFormInput type="text" id="street" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="city">City</CFormLabel>
        <CFormInput type="text" id="city" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="contactNo">Country</CFormLabel>
        <CFormInput type="text" id="contactNo" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="postalCode">Postal Code</CFormLabel>
        <CFormInput type="text" id="postalCode" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="email">Email</CFormLabel>
        <CFormInput type="text" id="email" defaultValue="" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
    </CRow>
  )
}

const AddCompanyForm = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  const steps = ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad']
  return (
    <CRow>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Company</strong> <small>Details</small>
            </CCardHeader>
            <CCardBody>{Company()}</CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Branch</strong> <small>Details</small>
            </CCardHeader>
            <CCardBody>{Branch()}</CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" variant="outline" type="reset" className="me-1">
            Clear
          </CButton>
          <CButton color="success" type="submit">
            Save
          </CButton>
        </CCol>
      </CForm>
    </CRow>
  )
}

export default AddCompanyForm
