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
          <CCardBody>{Branch(modelProps)}</CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>User</strong> <small>Setup</small>
          </CCardHeader>
          <CCardBody>{User(modelProps)}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditCompanyForm
