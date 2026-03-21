import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormFeedback,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'
import Toasts from 'src/views/toasts/Toasts'

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    username: '',
    password: '',
  })

  const [userTost, setUserTost] = useState({
    title: '',
    message: '',
    isAutoHide: false,
    isVisible: false,
    type: '',
  })

  const [validated, setValidated] = useState(false)

  const HandleUserFormChange = (e) => {
    const { name, value } = e.target
    setUserFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const HandleUserFormSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setValidated(true)
      try {
        const response = await fetch(APIURL + 'auth/login', {
          method: 'POST',
          body: JSON.stringify(userFormData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })

        if (!response.ok) {
          // Handle HTTP error responses (401, 404, 500, etc.)
          const errorData = await response.json().catch(() => ({}))
          const errorMessage = errorData.message || `HTTP Error ${response.status}: ${response.statusText}`
          throw new Error(errorMessage)
        }

        const data = await response.json()

        // Fetch profile immediately so role-based navigation has userGroupName on first load.
        let profile = null
        try {
          const profileResponse = await fetch(APIURL + 'user/' + data._id, {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + data.jwtToken,
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          if (profileResponse.ok) {
            profile = await profileResponse.json()
          }
        } catch (profileError) {
          console.error('Profile fetch after login failed:', profileError)
        }

        setUserTost({
          title: 'User Login',
          message: 'Login Successful...!',
          isAutoHide: true,
          isVisible: true,
          type: 's',
        })
        sessionStorage.setItem('accessToken', data.jwtToken)
        sessionStorage.setItem('jwt-token', data.jwtToken)
        sessionStorage.setItem('username', data.username)
        sessionStorage.setItem('userID', data._id)
        sessionStorage.setItem('userGroupID', profile?.role || '')
        sessionStorage.setItem('userGroupName', profile?.role || '')
        sessionStorage.setItem('userFName', profile?.firstName || profile?.name || '')
        sessionStorage.setItem('userLName', profile?.lastName || '')
        sessionStorage.setItem('userEmail', profile?.email || '')

        window.location.href = '/dashboard'
      } catch (error) {
        // Handle all errors (network errors, HTTP errors, parse errors)
        let errorMessage = 'Login failed. Please try again.'
        
        if (error.message.includes('401')) {
          errorMessage = 'Invalid username or password!'
        } else if (error.message.includes('Network')) {
          errorMessage = 'Network error. Please check your connection.'
        } else {
          errorMessage = error.message || errorMessage
        }

        setUserTost({
          title: 'User Login',
          message: 'Login Unsuccessful...! Error : ' + errorMessage,
          isAutoHide: true,
          isVisible: true,
          type: 'd',
        })
        console.error('Login error:', error)
      }
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm
                    action="#"
                    method="POST"
                    noValidate
                    validated={validated}
                    onSubmit={HandleUserFormSubmit}
                  >
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        name="username"
                        required
                        onChange={HandleUserFormChange}
                        value={userFormData.username}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        required
                        onChange={HandleUserFormChange}
                        value={userFormData.password}
                      />
                    </CInputGroup>
                    <CFormFeedback valid>Looks good!</CFormFeedback>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/forgot-password">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Beauty Care</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      <Toasts dataToasts={userTost} />
    </div>
  )
}

export default Login
