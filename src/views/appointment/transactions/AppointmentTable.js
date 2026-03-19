import React, { useState, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CLink,
  CPopover,
} from '@coreui/react'
import { cilPen, cilFile, cilDelete, cilPlus } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'

const AppointmentTable = () => {
  const [AppointmentTableData, setAppointmentTableData] = useState([])

  const handleAppointmentDelete = async (appointmentId) => {
    try {
      const response = await fetch(APIURL + 'appointment/' + appointmentId, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (response.ok) {
        fetchAppointment()
      }
    } catch (error) {
      console.error('Error deleting appointment:', error)
    }
  }

  const fetchAppointment = async () => {
    try {
      const branchID = localStorage.getItem('branchID')
      const endpoint = branchID ? 'appointment/byBranch/' + branchID : 'appointment'

      await fetch(APIURL + endpoint, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setAppointmentTableData(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchAppointment()
  }, [])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Appointments</strong> <small></small>
              <CLink href="/appointment-add" size="sm">
                <CButton color="primary" variant="outline" size="sm" className="float-sm-end">
                  <CIcon icon={cilPlus} customClassName="" /> Add
                </CButton>
              </CLink>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Time</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {AppointmentTableData.map((service, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>
                        {[service.client?.firstName, service.client?.lastName]
                          .filter(Boolean)
                          .join(' ') || '-'}
                      </CTableDataCell>
                      <CTableDataCell>{service.date}</CTableDataCell>
                      <CTableDataCell>{service.startTime}</CTableDataCell>
                      <CTableDataCell>
                        <p>
                          <span className="badge rounded-pill text-bg-danger">
                            {service.status?.status || '-'}
                          </span>
                        </p>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CLink
                          href={'/appointment-edit?id=' + service._id}
                          size="sm"
                          className="me-1"
                        >
                          <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                            <CButton color="warning" variant="outline" size="sm">
                              <CIcon icon={cilPen} customClassName="" />
                            </CButton>
                          </CPopover>
                        </CLink>
                        <CPopover content="Delete" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="danger"
                            variant="outline"
                            size="sm"
                            onClick={() => handleAppointmentDelete(service._id)}
                          >
                            <CIcon icon={cilDelete} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AppointmentTable
