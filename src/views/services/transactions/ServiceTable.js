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
import { cilPlus, cilPen, cilFile, cilDelete } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'

const ServiceTable = () => {
  const [serviceTableData, setServiceTableData] = useState([])

  const fetchService = async () => {
    try {
      await fetch(APIURL + 'service', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setServiceTableData(data)
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
  }, [])

  return (
    <>
      {/* <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardBody>
              <CLink href="https://coreui.io">
                <CButton color="primary" variant="outline" size="sm" className="float-sm-end">
                  <CIcon icon={cilPlus} customClassName="" /> Add
                </CButton>
              </CLink>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Services</strong> <small></small>
              <CLink href="/service-add" size="sm">
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
                    <CTableHeaderCell scope="col">Service Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Req Time</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {serviceTableData.map((service, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{service._id}</CTableDataCell>
                      <CTableDataCell>{service.name}</CTableDataCell>
                      <CTableDataCell>{service.serviceCategory.name}</CTableDataCell>
                      <CTableDataCell>{service.requiredTime}</CTableDataCell>
                      <CTableDataCell>
                        <p>
                          <span
                            className={`badge rounded-pill text-bg-${
                              service.isEnabled === true ? 'success' : 'danger'
                            }`}
                          >
                            {service.isEnabled === true ? 'Active' : 'Inactive'}
                          </span>
                        </p>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CLink href={'/service-edit?id=' + service._id} size="sm" className="me-1">
                          <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                            <CButton color="warning" variant="outline" size="sm">
                              <CIcon icon={cilPen} customClassName="" />
                            </CButton>
                          </CPopover>
                        </CLink>
                        <CLink href={'/service-view' + service._id} size="sm" className="me-1">
                          <CPopover content="View" placement="top" trigger={['hover', 'focus']}>
                            <CButton color="info" variant="outline" size="sm">
                              <CIcon icon={cilFile} customClassName="" />
                            </CButton>
                          </CPopover>
                        </CLink>
                        <CLink href="/service-add" size="sm" className="me-1">
                          <CPopover content="Delete" placement="top" trigger={['hover', 'focus']}>
                            <CButton color="danger" variant="outline" size="sm">
                              <CIcon icon={cilDelete} customClassName="" />
                            </CButton>
                          </CPopover>
                        </CLink>
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

export default ServiceTable
