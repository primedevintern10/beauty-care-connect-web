import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'

const ResetPassword = () => {
  const query = useMemo(() => new URLSearchParams(window.location.search), [])
  const initialToken = query.get('token') || ''

  const [token, setToken] = useState(initialToken)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validated, setValidated] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    setValidated(true)
    setError('')
    setMessage('')

    if (!form.checkValidity()) {
      event.stopPropagation()
      setError('Please fill all fields.')
      return
    }

    if (password !== confirmPassword) {
      setError('Password and confirmation do not match.')
      return
    }

    try {
      const response = await fetch(APIURL + 'auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ token, password, confirmPassword }),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        setError(data.message || `Failed to reset password. Status: ${response.status}`)
        return
      }

      setMessage(data.message || 'Password reset successful. Redirecting to login...')
      setTimeout(() => {
        window.location.href = '/'
      }, 1200)
    } catch (err) {
      setError('Error resetting password: ' + err.message)
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8} lg={6} xl={5}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm noValidate validated={validated} onSubmit={handleSubmit}>
                  <h1>Reset Password</h1>
                  <p className="text-medium-emphasis">Enter your reset token and new password</p>

                  <CFormInput
                    className="mb-3"
                    placeholder="Reset token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    required
                  />

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="New password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={6}
                      required
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Confirm new password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      minLength={6}
                      required
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton color="success" type="submit">
                      Reset Password
                    </CButton>
                  </div>

                  {error ? (
                    <CFormFeedback invalid className="d-block mt-3">
                      {error}
                    </CFormFeedback>
                  ) : null}

                  {message ? <div className="text-success mt-3">{message}</div> : null}

                  <div className="mt-3">
                    <Link to="/">Back to login</Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ResetPassword
