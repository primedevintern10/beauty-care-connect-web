import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardText,
  CCol,
  CRow,
  CCardHeader,
  CFormSelect,
  CButton,
  CForm,
} from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const ViewAppointments = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const appointmentID = queryParameters.get('id')
  const [AppointmentData, setAppointmentData] = useState(null)
  const [AppointmentStatusData, setAppointmentStatusData] = useState([])

  const [updateStatus, setUpdateStatus] = useState({
    update_status: '',
  })

  const fetchAppointment = async () => {
    try {
      const response = await fetch(APIURL + 'appointment/' + appointmentID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json()
      console.log(data)
      setAppointmentData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const fetchAppointmentStatus = async () => {
    try {
      const response = await fetch(APIURL + 'appointmentStatus', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json()
      console.log(data)
      setAppointmentStatusData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchAppointment()
    fetchAppointmentStatus()
  }, [])

  const updateAppointment = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    try {
      const response = await fetch(APIURL + 'appointment/' + appointmentID, {
        method: 'PUT',
        body: JSON.stringify({
          client: {
            _id: AppointmentData.client._id,
          },
          company: {
            _id: AppointmentData.company._id,
          },
          branch: {
            _id: AppointmentData.branch._id,
          },
          services: [
            {
              _id: AppointmentData.services[0]._id,
            },
          ],
          date: AppointmentData.date,
          startTime: AppointmentData.startTime,
          endTime: '',
          assignee: {
            _id: '',
          },
          status: {
            _id: updateStatus.update_status,
          },
          reviews: [
            {
              rating: AppointmentData.reviews[0].rating,
              comment: AppointmentData.reviews[0].comment,
              isEnabled: true,
              type: '',
            },
          ],
          note: AppointmentData.note,
        }),
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleStatusChange = (e) => {
    const { value } = e.target
    setUpdateStatus((prevData) => ({
      ...prevData,
      update_status: value,
    }))
  }

  return (
    <>
      <CRow>
        <CCol lg={12}>
          <CCard textColor="primary" className={`mb-3 border-top-primary border-top-3`}>
            <CCardHeader>Appointment Details</CCardHeader>
            <CCardBody>
              {AppointmentData ? ( // Check if AppointmentData is not null
                <>
                  {/* <CCardTitle>Card title</CCardTitle> */}
                  <CCardText>
                    Customer Name :{' '}
                    {AppointmentData.client.firstName + ' ' + AppointmentData.client.lastName}
                  </CCardText>
                  <CCardText>Customer Email : {AppointmentData.client.email}</CCardText>
                  <CCardText>Customer Phone : {AppointmentData.client.contactNo}</CCardText>
                  <CCardText>Date : {AppointmentData.date}</CCardText>
                  <CCardText>Time : {AppointmentData.startTime}</CCardText>
                  <CCardText>Service : {AppointmentData.services[0].name}</CCardText>
                  <CCardText>Required Time : {AppointmentData.services[0].requiredTime}</CCardText>
                  <CCardText>Note : {AppointmentData.note}</CCardText>
                  <CCardText>Status : {AppointmentData.status.status}</CCardText>
                  <CCardText>Customer Name : {AppointmentData.services[0].requiredTime}</CCardText>
                </>
              ) : (
                <div>Loading...</div> // Render a loading indicator while data is being fetched
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CForm onSubmit={updateAppointment}>
          <CCol lg={3}>
            <CFormSelect id="aptStatus" name="aptStatus" onChange={handleStatusChange}>
              {AppointmentStatusData.map((appointmentStatus, index) => (
                <option key={index} value={appointmentStatus._id}>
                  {appointmentStatus.status}
                </option>
              ))}
            </CFormSelect>
            <CButton color="primary" type="submit">
              Submit
            </CButton>
          </CCol>
        </CForm>
      </CRow>
    </>
  )
}

export default ViewAppointments
