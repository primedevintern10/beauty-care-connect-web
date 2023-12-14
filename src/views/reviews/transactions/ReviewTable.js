import React from 'react'
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

const AppointmentTable = () => {
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
                    <CTableHeaderCell scope="col">Appointment Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Time</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>APT/1002</CTableDataCell>
                    <CTableDataCell>Neranjan</CTableDataCell>
                    <CTableDataCell>2023-12-15</CTableDataCell>
                    <CTableDataCell>15:50</CTableDataCell>
                    <CTableDataCell>
                      <p>
                        <span className="badge rounded-pill text-bg-danger">Not Start</span>
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CLink href="/appointment-edit" size="sm" className="me-1">
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="warning" variant="outline" size="sm">
                            <CIcon icon={cilPen} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                      <CLink href="/appointment-view" size="sm" className="me-1">
                        <CPopover content="View" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="info" variant="outline" size="sm">
                            <CIcon icon={cilFile} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                      <CLink href="/appointment-add" size="sm" className="me-1">
                        <CPopover content="Delete" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="danger" variant="outline" size="sm">
                            <CIcon icon={cilDelete} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>APT/1002</CTableDataCell>
                    <CTableDataCell>Neranjan</CTableDataCell>
                    <CTableDataCell>2023-12-15</CTableDataCell>
                    <CTableDataCell>15:50</CTableDataCell>
                    <CTableDataCell>
                      <p>
                        <span className="badge rounded-pill text-bg-warning">On Going</span>
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CLink href="/appointment-edit" size="sm" className="me-1">
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="warning" variant="outline" size="sm">
                            <CIcon icon={cilPen} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                      <CLink href="/appointment-view" size="sm" className="me-1">
                        <CPopover content="View" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="info" variant="outline" size="sm">
                            <CIcon icon={cilFile} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                      <CLink href="/appointment-delete" size="sm" className="me-1">
                        <CPopover content="Delete" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="danger" variant="outline" size="sm">
                            <CIcon icon={cilDelete} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>APT/1002</CTableDataCell>
                    <CTableDataCell>Neranjan</CTableDataCell>
                    <CTableDataCell>2023-12-15</CTableDataCell>
                    <CTableDataCell>15:50</CTableDataCell>
                    <CTableDataCell>
                      <p>
                        <span className="badge rounded-pill text-bg-success">Colmpleted</span>
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CLink href="/appointment-edit" size="sm" className="me-1">
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="warning" variant="outline" size="sm">
                            <CIcon icon={cilPen} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                      <CLink href="/appointment-view" size="sm" className="me-1">
                        <CPopover content="View" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="info" variant="outline" size="sm">
                            <CIcon icon={cilFile} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                      <CLink href="/appointment-delete" size="sm" className="me-1">
                        <CPopover content="Delete" placement="top" trigger={['hover', 'focus']}>
                          <CButton color="danger" variant="outline" size="sm">
                            <CIcon icon={cilDelete} customClassName="" />
                          </CButton>
                        </CPopover>
                      </CLink>
                    </CTableDataCell>
                  </CTableRow>
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
