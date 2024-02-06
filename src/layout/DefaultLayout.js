import React, { useState, useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import APIURL from 'src/components/ApiConfig'

const DefaultLayout = () => {
  const fetchUserByID = async () => {
    try {
      await fetch(APIURL + 'user/' + localStorage.getItem('userID'), {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          localStorage.setItem('userFName', data.firstName)
          localStorage.setItem('userLName', data.lastName)
          localStorage.setItem('userEmail', data.email)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('accessToken') !== '' && localStorage.getItem('userID') !== '') {
      fetchUserByID()
    }
  }, [])

  if (localStorage.getItem('accessToken') !== '' && localStorage.getItem('userID') !== '') {
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
    window.location.href = '/dashboard'
  }
}

export default DefaultLayout
