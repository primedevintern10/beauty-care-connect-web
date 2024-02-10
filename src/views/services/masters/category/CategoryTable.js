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

import CategoryModel from './CategoryModel'
import APIURL from 'src/components/ApiConfig'

const CategoryTable = () => {
  const [visible, setVisible] = useState(false)
  const [formType, setFormType] = useState('')
  const [categoryTableData, setCategoryTableData] = useState([])
  const [categoryID, setCategoryID] = useState('')
  const [categoryTableDataByID, setCategoryTableDataByID] = useState([])

  const fetchCategory = async () => {
    try {
      await fetch(APIURL + 'serviceCategory', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCategoryTableData(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  const closeMode = async () => {
    setVisible(false)
    fetchCategory()
  }

  const handleCategoryEdit = async (isvisible, type, categoryID = null) => {
    try {
      await fetch(APIURL + 'serviceCategory/' + categoryID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCategoryTableDataByID(data)
          setVisible(isvisible)
          setFormType(type)
          setCategoryID(categoryID)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleCategoryAdd = (isvisible, type, categoryID = null) => {
    setVisible(isvisible)
    setFormType(type)
    setCategoryID(categoryID)
  }

  const handleCategoryDelete = async (categoryID) => {
    try {
      await fetch(APIURL + 'serviceCategory/' + categoryID, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          fetchCategory()
        })
        .catch((err) => {
          console.log(err.message)
          fetchCategory()
        })
      // fetchCategory()
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
              <strong>Category</strong> <small></small>
              <CButton
                color="primary"
                variant="outline"
                size="sm"
                className="float-sm-end"
                onClick={() => handleCategoryAdd(true, 'add')}
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
                  {categoryTableData.map((category, index) => (
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
                            onClick={() => handleCategoryEdit(true, 'edit', category._id)}
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
                            onClick={() => handleCategoryDelete(category._id)}
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
      <CategoryModel
        showModal={visible}
        closeModel={() => closeMode()}
        dataModel={formType}
        categoryID={categoryID}
        categoryData={categoryTableDataByID}
      />
    </>
  )
}

export default CategoryTable
