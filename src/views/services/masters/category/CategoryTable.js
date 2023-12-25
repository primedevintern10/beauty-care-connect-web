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

const CategoryTable = () => {
  const [visible, setVisible] = useState(false)
  const [formType, setFormType] = useState('')
  const [categoryTableData, setCategoryTableData] = useState([])
  const [categoryID, setCategoryID] = useState('')
  const [categoryTableDataByID, setCategoryTableDataByID] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch('http://localhost:80/nera/')
        const result = await response.json()
        setCategoryTableData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchCategory()
  }, [])

  const handleCategoryEdit = async (isvisible, type, categoryID = null) => {
    try {
      const response = await fetch('http://localhost:80/nera/' + categoryID)
      const result = await response.json()
      setCategoryTableDataByID(result)
      setVisible(isvisible)
      setFormType(type)
      setCategoryID(categoryID)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleCategoryAdd = (isvisible, type, categoryID = null) => {
    setVisible(isvisible)
    setFormType(type)
    setCategoryID(categoryID)
  }

  const handleCategoryDelete = async (event, categoryID) => {
    event.preventDefault()

    try {
      const response = await fetch('https://example.com/api/submit', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryID),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      // Handle success - you can process the response here
      console.log('Form submitted successfully')
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
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {categoryTableData.map((category) => (
                    <CTableRow key={category.id}>
                      <CTableDataCell scope="row">{category.id}</CTableDataCell>
                      <CTableDataCell>{category.CategoryName}</CTableDataCell>
                      <CTableDataCell>{category.CreatedDate}</CTableDataCell>
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
                      </CTableDataCell>
                      <CTableDataCell>
                        <CPopover content="Edit" placement="top" trigger={['hover', 'focus']}>
                          <CButton
                            color="warning"
                            variant="outline"
                            size="sm"
                            className="me-1"
                            onClick={() => handleCategoryEdit(true, 'edit', category.id)}
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
                            onClick={() => handleCategoryDelete(category.id)}
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
        closeMOdel={() => setVisible(false)}
        dataModel={formType}
        categoryID={categoryID}
        categoryData={categoryTableDataByID}
      />
    </>
  )
}

export default CategoryTable
