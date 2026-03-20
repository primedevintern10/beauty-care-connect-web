import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import APIURL from 'src/components/ApiConfig'

const ViewClient = () => {
  const [client, setClient] = useState(null)

  const queryParameters = new URLSearchParams(window.location.search)
  const clientID = queryParameters.get('id')

  useEffect(() => {
    if (!clientID) return
    const fetchClient = async () => {
      try {
        const response = await fetch(APIURL + 'client/' + clientID, {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const data = await response.json()
        setClient(data)
      } catch (error) {
        console.error('Error fetching client:', error)
      }
    }
    fetchClient()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientID])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Client</strong> <small>Details</small>
          </CCardHeader>
          <CCardBody>
            {client ? (
              <CTable bordered>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell>First Name</CTableHeaderCell>
                    <CTableDataCell>{client.firstName || '-'}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Last Name</CTableHeaderCell>
                    <CTableDataCell>{client.lastName || '-'}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Phone Number</CTableHeaderCell>
                    <CTableDataCell>{client.phoneNumber || '-'}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Email</CTableHeaderCell>
                    <CTableDataCell>{client.email || '-'}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Address</CTableHeaderCell>
                    <CTableDataCell>{client.address || '-'}</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            ) : (
              <p>Loading...</p>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ViewClient
