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
  CPopover,
} from '@coreui/react'
import { cilPlus, cilPen, cilDelete } from '@coreui/icons'

import ServiceModel from './ServiceModel'
import APIURL from 'src/components/ApiConfig'

const ServiceTable = () => {
  const [visible, setVisible] = useState(false)
  const [formType, setFormType] = useState('')
  const [serviceTableData, setServiceTableData] = useState([])
  const [serviceID, setServiceID] = useState('')
  const [serviceTableDataByID, setServiceTableDataByID] = useState([])

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

  const closeMode = async () => {
    setVisible(false)
    fetchService()
  }

  const handleServiceEdit = async (isvisible, type, serviceID = null) => {
    try {
      await fetch(APIURL + 'service/' + serviceID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setServiceTableDataByID(data)
          setVisible(isvisible)
          setFormType(type)
          setServiceID(serviceID)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleServiceAdd = (isvisible, type, serviceID = null) => {
    setVisible(isvisible)
    setFormType(type)
    setServiceID(serviceID)
  }

  const handleServiceDelete = async (event, serviceID) => {
    event.preventDefault()

    try {
      await fetch(APIURL + 'service/' + serviceID, {
        method: 'GET',
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

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Service</strong> <small></small>
              <CButton
                color="primary"
                variant="outline"
                size="sm"
                className="float-sm-end"
                onClick={() => handleServiceAdd(true, 'add')}
              >
                <CIcon icon={cilPlus} customClassName="" /> Add
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Category Name</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {serviceTableData.map((category, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell scope="row">{index + 1}</CTableDataCell>
                      <CTableDataCell>{category.name}</CTableDataCell>
                      {/* <CTableDataCell>{category.CreatedDate}</CTableDataCell>
                      <CTableDataCell>
                        <p>
                          <span
                            className={`badge rounded-pill text-bg-${
                              category.Status === 1 ? 'success' : 'danger'
                            }`}
                          >
                            {category.Status === 1 ? 'Active' : 'Inactive'}
                          </span>
                        </p>
                      </CTableDataCell> */}
                      <CTableDataCell>
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="warning"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            onClick={() => handleServiceEdit(true, 'edit', category._id)}
                          >
                            <CIcon icon={cilPen} customClassName="" />
                          </CButton>
                        </CPopover>
                        <CPopover content="Delete" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="danger"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            onClick={() => handleServiceDelete(category._id)}
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
      <ServiceModel
        showModal={visible}
        closeModel={() => closeMode()}
        dataModel={formType}
        serviceID={serviceID}
        serviceData={serviceTableDataByID}
      />
    </>
  )
}

export default ServiceTable
