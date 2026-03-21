import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CRow,
} from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const AddClientForm = () => {
  const [validated, setValidated] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [clientFormData, setClientFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
  })

  const handleFirstNameChange = (e) => {
    setClientFormData((prevData) => ({
      ...prevData,
      firstName: e.target.value,
    }))
  }

  const handleLastNameChange = (e) => {
    setClientFormData((prevData) => ({
      ...prevData,
      lastName: e.target.value,
    }))
  }

  const handlePhoneChange = (e) => {
    setClientFormData((prevData) => ({
      ...prevData,
      phoneNumber: e.target.value,
    }))
  }

  const handleEmailChange = (e) => {
    setClientFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }))
  }

  const handleAddressChange = (e) => {
    setClientFormData((prevData) => ({
      ...prevData,
      address: e.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      try {
        setValidated(true)
        setSubmitError('')

        const token = sessionStorage.getItem('accessToken')
        const headers = {
          'Content-type': 'application/json; charset=UTF-8',
        }

        if (token) {
          headers.Authorization = 'Bearer ' + token
        }

        const response = await fetch(APIURL + 'client', {
          method: 'POST',
          body: JSON.stringify(clientFormData),
          headers,
        })

        if (response.ok) {
          window.location.href = '/client'
        } else if (response.status === 401) {
          setSubmitError('Unauthorized request. Please log in again and retry.')
        } else {
          setSubmitError('Error creating client. Status: ' + response.status)
        }
      } catch (error) {
        setSubmitError('Error submitting form: ' + error.message)
      }
    }
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      method="POST"
    >
      <CCol md={6}>
        <CFormLabel htmlFor="firstName">First Name</CFormLabel>
        <CFormInput
          type="text"
          id="firstName"
          name="firstName"
          value={clientFormData.firstName}
          onChange={handleFirstNameChange}
          required
        />
        <CFormFeedback invalid>Please provide a first name.</CFormFeedback>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
        <CFormInput
          type="text"
          id="lastName"
          name="lastName"
          value={clientFormData.lastName}
          onChange={handleLastNameChange}
          required
        />
        <CFormFeedback invalid>Please provide a last name.</CFormFeedback>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="phoneNumber">Phone Number</CFormLabel>
        <CFormInput
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={clientFormData.phoneNumber}
          onChange={handlePhoneChange}
        />
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="email">Email</CFormLabel>
        <CFormInput
          type="email"
          id="email"
          name="email"
          value={clientFormData.email}
          onChange={handleEmailChange}
        />
      </CCol>

      <CCol md={12}>
        <CFormLabel htmlFor="address">Address</CFormLabel>
        <CFormInput
          type="text"
          id="address"
          name="address"
          value={clientFormData.address}
          onChange={handleAddressChange}
        />
      </CCol>

      <CCol xs={12}>
        <CButton color="light" type="reset" className="me-1">
          Clear
        </CButton>
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>

      {submitError ? (
        <CCol xs={12}>
          <CFormFeedback invalid className="d-block">
            {submitError}
          </CFormFeedback>
        </CCol>
      ) : null}
    </CForm>
  )
}

const AddClient = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Client</strong> <small>Add</small>
          </CCardHeader>
          <CCardBody>
            <AddClientForm />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddClient
