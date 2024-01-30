import React, { useState, useEffect } from 'react'
import { CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CRow } from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const Company = () => {
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
    </CForm>
  )
}

export default Company
