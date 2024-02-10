import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const CustomStyles = () => {
  const [categories, setCategories] = useState([])
  const [validated, setValidated] = useState(false)
  const [serviceFormData, setServiceFormData] = useState({
    isEnabled: true,
    name: '',
    requiredTime: '',
    serviceCategory: {
      _id: '',
    },
    branch: [
      {
        _id: localStorage.getItem('branchID'),
      },
    ],
  })

  console.log(serviceFormData)

  const handleServiceNameChange = (e) => {
    const { value } = e.target
    setServiceFormData((prevData) => ({
      ...prevData,
      name: value,
    }))
  }

  const handleServiceTimeChange = (e) => {
    const { value } = e.target
    setServiceFormData((prevData) => ({
      ...prevData,
      requiredTime: value,
    }))
  }

  const handleServiceCategoryChange = (e) => {
    const { id, value } = e.target
    setServiceFormData((prevData) => ({
      ...prevData,
      serviceCategory: {
        _id: value,
      },
    }))
  }

  const handleServiceActiveChange = (e) => {
    const { id, value } = e.target

    setServiceFormData((prevData) => ({
      ...prevData,
      isEnabled: value,
    }))
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      try {
        setValidated(true)
        await fetch(APIURL + 'service', {
          method: 'POST',
          body: JSON.stringify(serviceFormData),
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

  const fetchCategory = async () => {
    try {
      await fetch(APIURL + 'serviceCategory', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCategories(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      method="POST"
    >
      <CCol md={4}>
        <CFormLabel htmlFor="name">Service Name</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          name="name"
          placeholder="Service Name"
          onChange={handleServiceNameChange}
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="requiredTime">Required Time</CFormLabel>
        <CFormInput
          type="text"
          id="requiredTime"
          name="requiredTime"
          placeholder="Required Time"
          onChange={handleServiceTimeChange}
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="serviceCategory">Service Category</CFormLabel>
        <CFormSelect
          id="serviceCategory"
          name="serviceCategory"
          onChange={handleServiceCategoryChange}
        >
          <option disabled selected>
            Choose...
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category._id} data={category.name}>
              {category.name}
            </option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="requiredTime">Status</CFormLabel>
        <CFormSelect id="requiredTime" name="requiredTime" onChange={handleServiceActiveChange}>
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
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

const Validation = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Service</strong> <small>Add</small>
          </CCardHeader>
          <CCardBody>{CustomStyles()}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
