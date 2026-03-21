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
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CLink,
  CPopover,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilPen, cilDelete } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'

const ClientTable = () => {
  const [clientData, setClientData] = useState([])

  const handleClientDelete = async (clientId) => {
    try {
      const response = await fetch(APIURL + 'client/' + clientId, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (response.ok) {
        fetchClients()
      }
    } catch (error) {
      console.error('Error deleting client:', error)
    }
  }

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
      setClientData(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching clients:', error)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Clients</strong>
            <CLink href="/client-add" size="sm">
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
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {clientData.map((client, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>
                      {[client.firstName, client.lastName].filter(Boolean).join(' ') || '-'}
                    </CTableDataCell>
                    <CTableDataCell>{client.phoneNumber || '-'}</CTableDataCell>
                    <CTableDataCell>{client.email || '-'}</CTableDataCell>
                    <CTableDataCell>
                      <CLink href={'/client-edit?id=' + client._id} size="sm" className="me-1">
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
                          onClick={() => handleClientDelete(client._id)}
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
  )
}

export default ClientTable
