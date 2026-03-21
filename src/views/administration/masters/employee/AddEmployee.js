import React, { useState } from 'react'
import { CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CButton } from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const AddEmployeeForm = () => {
  const [validated, setValidated] = useState(false)

  const [employeeFormData, setEmployeeFormData] = useState({
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

  const handleEmployeeFormChange = (e) => {
    const { name, value } = e.target
    setEmployeeFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleEmployeeFormSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await fetch(APIURL + 'user', {
        method: 'POST',
        body: JSON.stringify(employeeFormData),
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
      onSubmit={handleEmployeeFormSubmit}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="firstName">First Name</CFormLabel>
        <CFormInput
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          required
          value={employeeFormData.firstName}
          onChange={handleEmployeeFormChange}
        />
        <CFormFeedback invalid>Please provide a first name.</CFormFeedback>

        <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
        <CFormInput
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          required
          value={employeeFormData.lastName}
          onChange={handleEmployeeFormChange}
        />
        <CFormFeedback invalid>Please provide a last name.</CFormFeedback>

        <CFormLabel htmlFor="nicPassport">NIC</CFormLabel>
        <CFormInput
          type="text"
          id="nicPassport"
          name="nicPassport"
          placeholder="NIC"
          required
          value={employeeFormData.nicPassport}
          onChange={handleEmployeeFormChange}
        />
        <CFormFeedback invalid>Please provide a nic.</CFormFeedback>

        <CFormLabel htmlFor="email">E-mail</CFormLabel>
        <CFormInput
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          required
          value={employeeFormData.email}
          onChange={handleEmployeeFormChange}
        />
        <CFormFeedback invalid>Please provide a vaild email.</CFormFeedback>

        <CFormLabel htmlFor="contactNo">Contact Number</CFormLabel>
        <CFormInput
          type="text"
          id="contactNo"
          name="contactNo"
          placeholder="Contact Number"
          value={employeeFormData.contactNo}
          onChange={handleEmployeeFormChange}
        />
        {/* <CFormFeedback valid>Looks good!</CFormFeedback> */}
        <CFormLabel htmlFor="empStatus">Status</CFormLabel>
        <CFormInput
          type="text"
          id="empStatus"
          name="empStatus"
          placeholder="Contact Number"
          value={employeeFormData.empStatus}
          onChange={handleEmployeeFormChange}
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

export default AddEmployeeForm
