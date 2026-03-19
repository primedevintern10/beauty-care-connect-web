import React, { useState, useEffect } from 'react'
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

const EditClientForm = () => {
  const [validated, setValidated] = useState(false)
  const [clientFormData, setClientFormData] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
  })

  const queryParameters = new URLSearchParams(window.location.search)
  const clientID = queryParameters.get('id')

  const fetchClient = async () => {
    try {
      const response = await fetch(APIURL + 'client/' + clientID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json()
      setClientFormData({
        _id: data._id || '',
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        phoneNumber: data.phoneNumber || '',
        email: data.email || '',
        address: data.address || '',
      })
    } catch (error) {
      console.error('Error fetching client:', error)
    }
  }

  useEffect(() => {
    if (clientID) {
      fetchClient()
    }
  }, [])

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
      return
    }

    setValidated(true)

    try {
      const response = await fetch(APIURL + 'client/' + clientID, {
        method: 'PUT',
        body: JSON.stringify(clientFormData),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (response.ok) {
        window.location.href = '/client'
      } else {
        console.error('Error updating client')
      }
    } catch (error) {
      console.error('Error submitting form:', error.message)
    }
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
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
    </CForm>
  )
}

const EditClient = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Client</strong> <small>Edit</small>
          </CCardHeader>
          <CCardBody>{EditClientForm()}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditClient
