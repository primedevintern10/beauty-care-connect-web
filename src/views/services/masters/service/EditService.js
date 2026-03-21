import React, { useState } from 'react'
import { CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CButton } from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const EditServiceForm = (categoryProps) => {
  const [validated, setValidated] = useState(false)

  const [serviceFormData, setServiceFormData] = useState({
    get_id: categoryProps.CategoryData._id,
    name: categoryProps.CategoryData.name,
  })

  const handleServiceFormChange = (e) => {
    const { name, value } = e.target
    setServiceFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleServiceFormSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      try {
        setValidated(true)

        await fetch(APIURL + 'serviceCategory/' + serviceFormData.get_id, {
          method: 'PUT',
          body: JSON.stringify(serviceFormData),
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
      onSubmit={handleServiceFormSubmit}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="name">Category Name</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          name="name"
          placeholder="Category Name"
          required
          value={serviceFormData.name}
          onChange={handleServiceFormChange}
        />
        <CFormInput
          type="hidden"
          id="get_id"
          name="get_id"
          required
          value={serviceFormData.get_id}
          onChange={handleServiceFormChange}
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

export default EditServiceForm
