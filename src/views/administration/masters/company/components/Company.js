import React, { useState } from 'react'
import {
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CRow,
  CButton,
  CFormSelect,
} from '@coreui/react'
import APIURL from 'src/components/ApiConfig'
import countries from 'src/components/data/countries'
import currencies from 'src/components/data/currencies'

const Company = (modelProps) => {
  console.log(modelProps)
  const [validated, setValidated] = useState(false)

  const [CompanayFormData, setCompanayFormData] = useState({
    _id: modelProps.CompanyData ? modelProps.CompanyData._id : '',
    name: modelProps.CompanyData ? modelProps.CompanyData.name : '',
    registrationNo: modelProps.CompanyData ? modelProps.CompanyData.registrationNo : '',
    owner: modelProps.CompanyData ? modelProps.CompanyData.owner : '',
    email: modelProps.CompanyData ? modelProps.CompanyData.email : '',
    webUrl: modelProps.CompanyData ? modelProps.CompanyData.webUrl : '',
    country: modelProps.CompanyData ? modelProps.CompanyData.country : '',
    currency: modelProps.CompanyData ? modelProps.CompanyData.currency : '',
  })

  const handleCompanyFormChange = (e) => {
    const { name, value } = e.target
    setCompanayFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setValidated(true)

      await fetch(APIURL + 'company', {
        method: 'POST',
        body: JSON.stringify(CompanayFormData),
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          sessionStorage.setItem('lastcompanyID', data._id)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  const handleCompanyEditFormSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      await fetch(APIURL + 'company/' + modelProps.CompanyData._id, {
        method: 'PUT',
        body: JSON.stringify(CompanayFormData),
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
      onSubmit={modelProps.dataModel === 'add' ? handleSubmit : handleCompanyEditFormSubmit}
    >
      <CRow className="mt-3">
        <CCol md={4}>
          <CFormLabel htmlFor="name">Company Name</CFormLabel>
          <CFormInput
            type="text"
            id="name"
            name="name"
            placeholder="Company Name"
            required
            value={CompanayFormData.name}
            onChange={handleCompanyFormChange}
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="registrationNo">Registration No</CFormLabel>
          <CFormInput
            type="text"
            id="registrationNo"
            name="registrationNo"
            placeholder="Registration No"
            required
            value={CompanayFormData.registrationNo}
            onChange={handleCompanyFormChange}
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="name">Owner Name</CFormLabel>
          <CFormInput
            type="text"
            id="owner"
            name="owner"
            placeholder="Registration No"
            required
            value={CompanayFormData.owner}
            onChange={handleCompanyFormChange}
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="email">Email</CFormLabel>
          <CFormInput
            type="text"
            id="email"
            name="email"
            placeholder="Registration No"
            required
            value={CompanayFormData.email}
            onChange={handleCompanyFormChange}
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>

        <CCol md={4}>
          <CFormLabel htmlFor="webUrl">Web Url</CFormLabel>
          <CFormInput
            type="text"
            id="webUrl"
            name="webUrl"
            placeholder="Registration No"
            required
            value={CompanayFormData.webUrl}
            onChange={handleCompanyFormChange}
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>

        <CCol md={4}>
          <CFormLabel htmlFor="country">Country</CFormLabel>
          <CFormSelect
            aria-label="Permission"
            id="country"
            name="country"
            placeholder="Country"
            required
            value={CompanayFormData.country}
            onChange={handleCompanyFormChange}
          >
            <option>select permission</option>
            {countries.map((country, index) => (
              <option key={'Company_' + index} value={country.name}>
                {country.name}
              </option>
            ))}
          </CFormSelect>
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>

        <CCol md={4}>
          <CFormLabel htmlFor="currency">Currency</CFormLabel>
          <CFormSelect
            aria-label="Permission"
            id="currency"
            name="currency"
            placeholder="Currency"
            value={CompanayFormData.currency}
            required
            onChange={handleCompanyFormChange}
          >
            <option>select permission</option>
            {currencies.map((currency, index) => (
              <option key={'Company_' + index} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </CFormSelect>
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol xs={12} className="mt-3">
          <CButton color="primary" type="submit">
            Submit
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default Company
