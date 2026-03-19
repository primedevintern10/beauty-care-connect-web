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
        await fetch(APIURL + 'auth/login', {
          method: 'POST',
          body: JSON.stringify(userFormData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUserTost({
              title: 'User Login',
              message: 'Login Successful...!',
              isAutoHide: true,
              isVisible: true,
              type: 's',
            })
            localStorage.setItem('accessToken', data.jwtToken)
            localStorage.setItem('jwt-token', data.jwtToken)
            localStorage.setItem('username', data.username)
            localStorage.setItem('userID', data._id)

            window.location.href = '/dashboard'
          })
          .catch((err) => {
            setUserTost({
              title: 'User Login',
              message: 'Login Unsuccessful...! Error : ' + err.message,
              isAutoHide: true,
              isVisible: true,
              type: 'd',
            })
          })
      } catch (error) {
        // Handle error
        setUserTost({
          title: 'User Login',
          message: 'Login Unsuccessful...! Error : ' + error.message,
          isAutoHide: true,
          isVisible: true,
          type: 'd',
        })
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
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
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
