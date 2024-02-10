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

const EditUserGroupForm = (UserGroupProps) => {
  const [validated, setValidated] = useState(false)

  const [userGroupFormData, setUserGroupFormData] = useState({
    name: UserGroupProps.UserGroupData.name,
    permission: UserGroupProps.UserGroupData.permission,
    get_id: UserGroupProps.UserGroupData._id,
  })

  const handleUserGroupNameChange = (e) => {
    const { value } = e.target
    setUserGroupFormData((prevData) => ({
      ...prevData,
      name: value,
    }))
  }

  const handleUserGroupPermissionChange = (e) => {
    const { value } = e.target
    setUserGroupFormData((prevData) => ({
      ...prevData,
      permission: [value],
    }))
  }

  const handleUserGroupFormSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setValidated(true)
      await fetch(APIURL + 'userGroup/' + userGroupFormData.get_id, {
        method: 'PUT',
        body: JSON.stringify(userGroupFormData),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
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
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleUserGroupFormSubmit}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="name">User Group Name</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          name="name"
          placeholder="User Group Name"
          required
          value={userGroupFormData.name}
          onChange={handleUserGroupNameChange}
        />
        <CFormFeedback invalid>Please provide a user group name.</CFormFeedback>

        <CFormLabel htmlFor="permission">Permission</CFormLabel>
        <CFormSelect
          aria-label="Permission"
          id="permission"
          name="permission"
          placeholder="Permission"
          required
          onChange={handleUserGroupPermissionChange}
          value={userGroupFormData.permission}
        >
          <option value="All">All</option>
          <option value="Owner">Owner</option>
          <option value="Employee">Employee</option>
          <option value="Client">Client</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a permission.</CFormFeedback>
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

export default EditUserGroupForm
