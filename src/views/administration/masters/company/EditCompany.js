import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CRow,
  CButton,
} from '@coreui/react'
import { Box, Stepper, Step, StepButton, Button, Typography, StepLabel } from '@mui/material'
import APIURL from 'src/components/ApiConfig'
import Company from './components/Company'
import Branch from './components/Branch'
import User from './components/User'

const EditCompanyForm = (modelProps) => {

  const [Branch, setBranch] = useState('')

  const fetchCompany = async () => {
    try {
      await fetch(APIURL + 'company', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCompanyTableData(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchCompany()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Company</strong> <small>Setup</small>
          </CCardHeader>
          <CCardBody>{Company(modelProps)}</CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Branch</strong> <small>Setup</small>
          </CCardHeader>
          <CCardBody>{Branch()}</CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>User</strong> <small>Setup</small>
          </CCardHeader>
          <CCardBody>{User()}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditCompanyForm
