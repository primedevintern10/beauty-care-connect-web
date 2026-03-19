import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const CustomStyles = () => {
  const [categories, setCategories] = useState([])
  const [validated, setValidated] = useState(false)
  const [serviceFormData, setServiceFormData] = useState({
    _id: '',
    isEnabled: true,
    name: '',
    requiredTime: '',
    serviceCategory: {
      _id: '',
    },
    branch: [],
  })

  const queryParameters = new URLSearchParams(window.location.search)
  const serviceID = queryParameters.get('id')

  const handleServiceNameChange = (e) => {
    setServiceFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }))
  }

  const handleServiceTimeChange = (e) => {
    setServiceFormData((prevData) => ({
      ...prevData,
      requiredTime: e.target.value,
    }))
  }

  const handleServiceCategoryChange = (e) => {
    setServiceFormData((prevData) => ({
      ...prevData,
      serviceCategory: {
        _id: e.target.value,
      },
    }))
  }

  const handleServiceActiveChange = (e) => {
    setServiceFormData((prevData) => ({
      ...prevData,
      isEnabled: e.target.value === 'true',
    }))
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
      return
    }

    setValidated(true)

    try {
      const response = await fetch(APIURL + 'service/' + serviceID, {
        method: 'PUT',
        body: JSON.stringify(serviceFormData),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (response.ok) {
        window.location.href = '/service'
      }
    } catch (error) {
      console.error('Error updating service:', error.message)
    }
  }

  const fetchService = async () => {
    try {
      await fetch(APIURL + 'service/' + serviceID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setServiceFormData({
            _id: data._id,
            isEnabled: data.isEnabled === true,
            name: data.name || '',
            requiredTime: data.requiredTime || '',
            serviceCategory: {
              _id: data.serviceCategory?._id || '',
            },
            branch: Array.isArray(data.branch) ? data.branch : [],
          })
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchService()
    fetchCategory()
  }, [serviceID])

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="name">Service Name</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          name="name"
          placeholder="Service Name"
          value={serviceFormData.name}
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
          required
          placeholder="Required Time"
          value={serviceFormData.requiredTime}
          onChange={handleServiceTimeChange}
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="serviceCategory">Service Category</CFormLabel>
        <CFormSelect
          id="serviceCategory"
          name="serviceCategory"
          value={serviceFormData.serviceCategory._id}
          onChange={handleServiceCategoryChange}
          required
        >
          <option value="" disabled>
            Choose...
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category._id} data-value={category.name}>
              {category.name}
            </option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="requiredTime">Status</CFormLabel>
        <CFormSelect
          id="requiredTime"
          name="requiredTime"
          value={String(serviceFormData.isEnabled)}
          onChange={handleServiceActiveChange}
        >
          <option value="true">Active</option>
          <option value="false">Inactive</option>
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
            <strong>Service</strong> <small>Edit</small>
          </CCardHeader>
          <CCardBody>{CustomStyles()}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
