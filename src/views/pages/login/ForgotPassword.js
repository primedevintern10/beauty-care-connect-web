import React, { useState } from 'react'
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
import { cilEnvelopeOpen } from '@coreui/icons'
import APIURL from 'src/components/ApiConfig'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [validated, setValidated] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [token, setToken] = useState('')

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    setValidated(true)
    setError('')
    setMessage('')
    setToken('')

    if (!form.checkValidity()) {
      event.stopPropagation()
      setError('Please enter a valid email.')
      return
    }

    try {
      const response = await fetch(APIURL + 'auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        setError(data.message || `Failed to request reset. Status: ${response.status}`)
        return
      }

      setMessage(data.message || 'Reset token generated.')
      if (data.token) {
        setToken(data.token)
      }
    } catch (err) {
      setError('Error requesting password reset: ' + err.message)
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
                  <h1>Forgot Password</h1>
                  <p className="text-medium-emphasis">Request a reset token</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilEnvelopeOpen} />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="primary" type="submit">
                      Send Reset Token
                    </CButton>
                  </div>

                  {error ? (
                    <CFormFeedback invalid className="d-block mt-3">
                      {error}
                    </CFormFeedback>
                  ) : null}

                  {message ? <div className="text-success mt-3">{message}</div> : null}

                  {token ? (
                    <div className="mt-3">
                      <div className="small text-medium-emphasis">Reset token (for testing):</div>
                      <div className="fw-semibold" style={{ wordBreak: 'break-all' }}>
                        {token}
                      </div>
                      <Link to={`/reset-password?token=${token}`}>Go to Reset Password</Link>
                    </div>
                  ) : null}

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

export default ForgotPassword
