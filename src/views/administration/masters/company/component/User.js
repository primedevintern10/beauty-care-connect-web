import React, { useState, useEffect } from 'react'
import { CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CRow } from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const User = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CRow>
        <CCol md={4}>
          <CFormLabel htmlFor="name">User Name</CFormLabel>
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
    </CForm>
  )
}

export default User
