import React, { useState } from 'react'
import { CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CButton } from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const EditCompanyForm = (CompanyProps) => {
  const [validated, setValidated] = useState(false)

  const [CompanyFormData, setCompanyFormData] = useState({
    get_id: CompanyProps.CompanyData._id,
    name: CompanyProps.CompanyData.name,
  })

  const handleCompanyFormChange = (e) => {
    const { name, value } = e.target
    setCompanyFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCompanyFormSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      try {
        setValidated(true)

        await fetch(APIURL + 'serviceCompany/' + CompanyFormData.get_id, {
          method: 'PUT',
          body: JSON.stringify(CompanyFormData),
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
      } catch (error) {
        // Handle error
        console.error('Error submitting form:', error.message)
      }
    }
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleCompanyFormSubmit}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="name">Company Name</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          name="name"
          placeholder="Company Name"
          required
          value={CompanyFormData.name}
          onChange={handleCompanyFormChange}
        />
        <CFormInput
          type="hidden"
          id="get_id"
          name="get_id"
          required
          value={CompanyFormData.get_id}
          onChange={handleCompanyFormChange}
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

export default EditCompanyForm
