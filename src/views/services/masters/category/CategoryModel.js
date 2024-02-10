import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

import AddCategoryForm from './AddCategory'
import EditCategoryForm from './EditCategory'

const CategoryModel = (modelProps) => {
  return (
    <>
      <CModal visible={modelProps.showModal} onClose={modelProps.closeModel}>
        <CModalHeader>
          <CModalTitle>{modelProps.dataModel === 'add' ? 'Add' : 'Edit'} Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modelProps.dataModel === 'add' ? (
            <AddCategoryForm />
          ) : (
            <EditCategoryForm CategoryData={modelProps.categoryData} />
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={modelProps.closeModel}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default CategoryModel
