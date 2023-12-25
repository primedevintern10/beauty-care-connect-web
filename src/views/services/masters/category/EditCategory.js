import React, { useState } from 'react'
import { CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CButton } from '@coreui/react'

const EditCategoryForm = () => {
  const [validated, setValidated] = useState(false)

  const [categoryFormData, setCategoryFormData] = useState({
    txtEditCategoryName: '',
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
        const response = await fetch('https://example.com/api/submit', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(categoryFormData),
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        // Handle success - you can process the response here
        console.log('Form submitted successfully')
      } catch (error) {
        // Handle error
        console.error('Error submitting form:', error.message)
      }
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleCategoryFormSubmit}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="txtEditCategoryName">Category Name</CFormLabel>
        <CFormInput
          type="text"
          id="txtEditCategoryName"
          name="txtEditCategoryName"
          placeholder="Category Name"
          required
          value={categoryFormData.categoryName}
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

export default EditCategoryForm
