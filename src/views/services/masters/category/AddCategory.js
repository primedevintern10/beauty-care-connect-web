import React, { useState } from 'react'
import { CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CButton } from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const AddCategoryForm = () => {
  const [validated, setValidated] = useState(false)

  const [categoryFormData, setCategoryFormData] = useState({
    get_id: '',
    name: '',
  })

  const handleCategoryFormChange = (e) => {
    const { name, value } = e.target
    setCategoryFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCategoryFormSubmit = async (event) => {
    const form = event.currentTarget

    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      try {
        setValidated(true)
        await fetch(APIURL + 'serviceCategory', {
          method: 'POST',
          body: JSON.stringify(categoryFormData),
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
      onSubmit={handleCategoryFormSubmit}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="name">Category Name</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          name="name"
          placeholder="Category Name"
          required
          value={categoryFormData.name}
          onChange={handleCategoryFormChange}
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

export default AddCategoryForm
