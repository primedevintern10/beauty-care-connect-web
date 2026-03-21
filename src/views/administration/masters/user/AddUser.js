import React, { useState } from 'react'
import { CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CButton } from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const AddUserForm = () => {
  const [validated, setValidated] = useState(false)

  const [UserFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    nicPassport: '',
    email: '',
    contactNo: '',
    userName: '',
    password: '',
    empStatus: '',
    empID: '',
  })

  const handleUserFormChange = (e) => {
    const { name, value } = e.target
    setUserFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleUserFormSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await fetch(APIURL + 'user', {
        method: 'POST',
        body: JSON.stringify(UserFormData),
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleUserFormSubmit}
    >
      <CCol md={12}>
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
        <CFormLabel htmlFor="empStatus">Status</CFormLabel>
        <CFormInput
          type="text"
          id="empStatus"
          name="empStatus"
          placeholder="Contact Number"
          value={UserFormData.empStatus}
          onChange={handleUserFormChange}
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
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
  )
}

export default AddUserForm
