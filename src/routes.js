import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Appointment
const Appointment = React.lazy(() => import('./views/appointment/transactions/index'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/appointment', name: 'Appointment', element: Appointment },
]

export default routes
