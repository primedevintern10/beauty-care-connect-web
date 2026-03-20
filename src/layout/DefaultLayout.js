import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import APIURL from 'src/components/ApiConfig'

const DefaultLayout = () => {
  const token = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userID')

  const fetchUserByID = async () => {
    try {
      const response = await fetch(APIURL + 'user/' + userId, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (!response.ok) {
        return null
      }

      const data = await response.json()
      localStorage.setItem('userFName', data.name || '')
      localStorage.setItem('userLName', '')
      localStorage.setItem('userEmail', data.username || '')
      localStorage.setItem('userGroupID', data.role || '')
      localStorage.setItem('userGroupName', data.role || '')

      return data
    } catch (error) {
      console.error('Error fetching data:', error)
      return null
    }
  }

  const fetchCompanyBranchData = async (email) => {
    if (!email) {
      return
    }

    try {
      const response = await fetch(APIURL + 'employee/by-email/' + email, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (!response.ok) {
        return
      }

      const data = await response.json()
      if (data?.branch?.length > 0) {
        localStorage.setItem('branchID', data.branch[0]?._id || '')
        localStorage.setItem('CompanyID', data.branch[0]?.company?._id || '')
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    const bootstrapUserContext = async () => {
      if (!token || !userId) {
        return
      }

      const user = await fetchUserByID()
      await fetchCompanyBranchData(user?.email)
    }

    bootstrapUserContext()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userId])

  if (token && userId) {
    return (
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    )
  } else {
    window.location.href = '/login'
  }
}

export default DefaultLayout
