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
  CFormTextarea,
  CRow,
} from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const AddAppointmentForm = () => {
  const [clients, setClients] = useState([])
  const [services, setServices] = useState([])
  const [statuses, setStatuses] = useState([])
  const [validated, setValidated] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [appointmentFormData, setAppointmentFormData] = useState({
    client: { _id: '' },
    services: [],
    date: '',
    startTime: '',
    endTime: '',
    status: { _id: '' },
    note: '',
  })

  const fetchClients = async () => {
    try {
      const response = await fetch(APIURL + 'client', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json()
      setClients(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching clients:', error)
    }
  }

  const fetchServices = async () => {
    try {
      const branchID = sessionStorage.getItem('branchID')
      const endpoint = branchID ? 'service/branch/' + branchID : 'service'
      const response = await fetch(APIURL + endpoint, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json()
      setServices(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching services:', error)
    }
  }

  const fetchStatuses = async () => {
    try {
      const response = await fetch(APIURL + 'appointmentStatus', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json()
      setStatuses(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching statuses:', error)
    }
  }

  useEffect(() => {
    fetchClients()
    fetchServices()
    fetchStatuses()
  }, [])

  const handleClientChange = (e) => {
    setAppointmentFormData((prevData) => ({
      ...prevData,
      client: { _id: e.target.value },
    }))
  }

  const handleServiceChange = (e) => {
    setAppointmentFormData((prevData) => ({
      ...prevData,
      services: [{ _id: e.target.value }],
    }))
  }

  const handleDateChange = (e) => {
    setAppointmentFormData((prevData) => ({
      ...prevData,
      date: e.target.value,
    }))
  }

  const handleStartTimeChange = (e) => {
    setAppointmentFormData((prevData) => ({
      ...prevData,
      startTime: e.target.value,
    }))
  }

  const handleEndTimeChange = (e) => {
    setAppointmentFormData((prevData) => ({
      ...prevData,
      endTime: e.target.value,
    }))
  }

  const handleStatusChange = (e) => {
    setAppointmentFormData((prevData) => ({
      ...prevData,
      status: { _id: e.target.value },
    }))
  }

  const handleNoteChange = (e) => {
    setAppointmentFormData((prevData) => ({
      ...prevData,
      note: e.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    setValidated(true)
    setSubmitError('')

    if (form.checkValidity() === false) {
      event.stopPropagation()
      setSubmitError('Please fill all required fields before submitting.')
      return
    }

    if (appointmentFormData.endTime <= appointmentFormData.startTime) {
      setSubmitError('End Time must be greater than Start Time.')
      return
    } else {
      try {
        const branchID = sessionStorage.getItem('branchID')
        const payload = {
          ...appointmentFormData,
          branch: branchID ? { _id: branchID } : undefined,
        }

        const response = await fetch(APIURL + 'appointment', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
            'Content-type': 'application/json; charset=UTF-8',
          },
        })

        if (response.ok) {
          window.location.href = '/appointment'
        } else {
          const errorText = await response.text()
          setSubmitError('Error creating appointment. ' + (errorText || `Status: ${response.status}`))
        }
      } catch (error) {
        setSubmitError('Error submitting form: ' + error.message)
      }
    }
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      method="POST"
    >
      <CCol md={6}>
        <CFormLabel htmlFor="client">Client</CFormLabel>
        <CFormSelect
          id="client"
          name="client"
          value={appointmentFormData.client._id}
          onChange={handleClientChange}
          required
        >
          <option value="">Choose...</option>
          {clients.map((client, index) => (
            <option key={index} value={client._id}>
              {[client.firstName, client.lastName].filter(Boolean).join(' ')}
            </option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please select a client.</CFormFeedback>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="service">Service</CFormLabel>
        <CFormSelect
          id="service"
          name="service"
          value={appointmentFormData.services[0]?._id || ''}
          onChange={handleServiceChange}
          required
        >
          <option value="">Choose...</option>
          {services.map((service, index) => (
            <option key={index} value={service._id}>
              {service.name}
            </option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please select a service.</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="date">Date</CFormLabel>
        <CFormInput
          type="date"
          id="date"
          name="date"
          value={appointmentFormData.date}
          onChange={handleDateChange}
          required
        />
        <CFormFeedback invalid>Please provide a date.</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="startTime">Start Time</CFormLabel>
        <CFormInput
          type="time"
          id="startTime"
          name="startTime"
          value={appointmentFormData.startTime}
          onChange={handleStartTimeChange}
          required
        />
        <CFormFeedback invalid>Please provide a start time.</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="endTime">End Time</CFormLabel>
        <CFormInput
          type="time"
          id="endTime"
          name="endTime"
          value={appointmentFormData.endTime}
          onChange={handleEndTimeChange}
          required
        />
        <CFormFeedback invalid>Please provide an end time.</CFormFeedback>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="status">Status</CFormLabel>
        <CFormSelect
          id="status"
          name="status"
          value={appointmentFormData.status._id}
          onChange={handleStatusChange}
          required
        >
          <option value="">Choose...</option>
          {statuses.map((stat, index) => (
            <option key={index} value={stat._id}>
              {stat.status}
            </option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please select a status.</CFormFeedback>
      </CCol>

      <CCol md={12}>
        <CFormLabel htmlFor="note">Note</CFormLabel>
        <CFormTextarea
          id="note"
          name="note"
          rows="3"
          placeholder="Additional notes..."
          value={appointmentFormData.note}
          onChange={handleNoteChange}
        />
      </CCol>

      <CCol xs={12}>
        <CButton color="light" type="reset" className="me-1">
          Clear
        </CButton>
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>

      {submitError ? (
        <CCol xs={12}>
          <CFormFeedback invalid className="d-block">
            {submitError}
          </CFormFeedback>
        </CCol>
      ) : null}
    </CForm>
  )
}

const AddAppointments = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Appointment</strong> <small>Add</small>
          </CCardHeader>
          <CCardBody>{AddAppointmentForm()}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddAppointments
