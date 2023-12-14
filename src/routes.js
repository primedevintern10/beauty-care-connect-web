import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Appointment
const Appointment = React.lazy(() => import('./views/appointment/transactions/index'))
const AddAppointments = React.lazy(() => import('./views/appointment/transactions/AddAppointments'))
const EditAppointments = React.lazy(() =>
  import('./views/appointment/transactions/EditAppointments'),
)
const ViewAppointments = React.lazy(() =>
  import('./views/appointment/transactions/ViewAppointments'),
)

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/appointment', name: 'Appointment', element: Appointment },
  { path: '/appointment-add', name: 'Add Appointments', element: AddAppointments },
  { path: '/appointment-edit', name: 'Edit Appointments', element: EditAppointments },
  { path: '/appointment-view', name: 'View Appointments', element: ViewAppointments },
]

export default routes
