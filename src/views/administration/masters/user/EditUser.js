import React, { useState } from 'react'
import {
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CButton,
  CFormSelect,
} from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const EditUserForm = (UserProps) => {
  const userData = UserProps.UserData || {}
  const [validated, setValidated] = useState(false)

  const [UserFormData, setUserFormData] = useState({
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    nicPassport: userData.nicPassport || '',
    email: userData.email || '',
    contactNo: userData.contactNo || '',
    userName: userData.userName || '',
    password: userData.password || '',
    empStatus: String(userData.empStatus || 'active').toLowerCase(),
    empID: userData.empID || userData._id || '',
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
      const targetUserId = UserFormData.empID || userData._id
      if (!targetUserId) {
        console.error('Missing User ID for edit submit')
        return
      }

      const payload = {
        ...UserFormData,
        empStatus: String(UserFormData.empStatus).toLowerCase(),
      }

      await fetch(APIURL + 'user/' + targetUserId, {
        method: 'PUT',
        body: JSON.stringify(payload),
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
        <CFormSelect
          id="empStatus"
          name="empStatus"
          value={UserFormData.empStatus}
          onChange={handleUserFormChange}
          required
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </CFormSelect>
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

export default EditUserForm
