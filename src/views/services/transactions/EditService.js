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
  const [serviceDataByID, setServiceDataByID] = useState([])
  const [categories, setCategories] = useState([])
  const [validated, setValidated] = useState(false)
  // const [serviceFormData, setServiceFormData] = useState({
  //   isEnabled: serviceDataByID.isEnabled,
  //   name: serviceDataByID.name,
  //   requiredTime: serviceDataByID.requiredTime,
  //   serviceCategory: {
  //     name: serviceDataByID.serviceCategory.name,
  //     _id: serviceDataByID.serviceCategory._id,
  //   },
  //   _id: serviceDataByID._id,
  // })
  console.log(serviceDataByID)
  const queryParameters = new URLSearchParams(window.location.search)
  const serviceID = queryParameters.get('id')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
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
          console.log(data)
          setServiceDataByID(data)
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

  useEffect(() => {
    fetchService()
    fetchCategory()
  }, [])

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
          value={serviceDataByID.name}
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
          defaultValue="Otto"
          required
          placeholder="Required Time"
          value={serviceDataByID.requiredTime}
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      {/* <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol> */}
      {/* <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol> */}
      <CCol md={3}>
        <CFormLabel htmlFor="serviceCategory">Service Category</CFormLabel>
        <CFormSelect id="serviceCategory" name="serviceCategory">
          <option disabled>Choose...</option>
          {categories.map(
            (category, index) => (
              <option
                key={index}
                value={category._id}
                data-value={category.name}
                // selected={serviceDataByID.serviceCategory._id === category._id ? true : false}
              >
                {category.name}
              </option>
            ),
            // <option key={index} value={category._id} data-value={category.name}>
            //   {category.name}
            // </option>
          )}
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="requiredTime">Status</CFormLabel>
        <CFormSelect id="requiredTime" name="requiredTime">
          {serviceDataByID.isEnabled === true ? (
            <>
              <option value="true" selected>
                Active
              </option>
              <option value="false">Inactive</option>
            </>
          ) : (
            <>
              <option value="true">Active</option>
              <option value="false" selected>
                Inactive
              </option>
            </>
          )}

          {/* <option value="true" selected>Active</option>
          <option value="false" selected>Inactive</option> */}
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
