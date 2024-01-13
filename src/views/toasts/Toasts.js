import React, { useRef, useState, useEffect } from 'react'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'

const Toasts = (modelProps) => {
  const [toast, setToast] = useState(false)
  const toaster = useRef()

  useEffect(() => {
    setToast(modelProps.isVisible)
  }, [modelProps.isVisible])

  var color = ''
  switch (modelProps.type) {
    case 'p':
      color = '#2819af'
      break
    case 'se':
      color = '#42484a'
      break
    case 's':
      color = '#2eb85c'
      break
    case 'd':
      color = '#941616'
      break
    case 'w':
      color = '#8f6304'
      break
    case 'i':
      color = '#0057ad'
      break
    case 'l':
      color = '#222526'
      break
    case 'da':
      color = '#3f4a5c'
      break
    case 'li':
      color = '#452137'
      break
    default:
      break
  }

  return (
    <CToaster ref={toaster} push={toast} placement="top-end">
      <CToast title={modelProps.title} autohide={modelProps.isAutoHide} visible={toast}>
        <CToastHeader closeButton>
          <svg
            className="rounded me-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill={color}></rect>
          </svg>
          <strong className="me-auto">{modelProps.title}</strong>
        </CToastHeader>
        <CToastBody>{modelProps.message}</CToastBody>
      </CToast>
    </CToaster>
  )
}

export default Toasts
