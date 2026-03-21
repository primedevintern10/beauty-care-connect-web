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

const EditEmployeeForm = (employeeProps) => {
  const employeeData = employeeProps.employeeData || {}
  const [validated, setValidated] = useState(false)

  const [employeeFormData, setEmployeeFormData] = useState({
    firstName: employeeData.name ? String(employeeData.name).split(' ')[0] : '',
    lastName: employeeData.name ? String(employeeData.name).split(' ').slice(1).join(' ') : '',
    nicPassport: employeeData.nic || '',
    email: employeeData.email || '',
    contactNo: employeeData.contactNo || '',
    userName: '',
    password: '',
    empStatus: employeeData.isEnabled === false ? 'inactive' : 'active',
    empID: employeeData._id || employeeData.empID || '',
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
      const targetEmployeeId = employeeFormData.empID || employeeData._id
      if (!targetEmployeeId) {
        console.error('Missing Employee ID for edit submit')
        return
      }

      const payload = {
        nic: employeeFormData.nicPassport,
        name: `${employeeFormData.firstName} ${employeeFormData.lastName}`.trim(),
        nickName: employeeFormData.firstName,
        email: employeeFormData.email,
        contactNo: employeeFormData.contactNo,
        isEnabled: String(employeeFormData.empStatus).toLowerCase() !== 'inactive',
        type: employeeData.type || 'EMP',
        branch: employeeData.branch || [],
      }

      await fetch(APIURL + 'employee/' + targetEmployeeId, {
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
        <CFormSelect
          id="empStatus"
          name="empStatus"
          value={employeeFormData.empStatus}
          onChange={handleEmployeeFormChange}
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

export default EditEmployeeForm
