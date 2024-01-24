import React, { useState, useEffect } from 'react'
import {
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'

const AddCompanyForm = () => {
  const [validated, setValidated] = useState(false)

  const [CompanyFormData, setCompanyFormData] = useState({
    get_id: '',
    name: '',
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
        await fetch(APIURL + 'serviceCompany', {
          method: 'POST',
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

  const Company = () => {
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

  const Branch = () => {
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

  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink href="#" active>
            <CIcon icon={cilMediaPlay} className="me-2" />
            Preview
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" target="_blank">
            <CIcon icon={cilCode} className="me-2" />
            Code
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          test
        </CTabPane>
        <CTabPane className="p-3 preview" visible>
          test
        </CTabPane>
      </CTabContent>
    </div>
  )
}

export default AddCompanyForm
