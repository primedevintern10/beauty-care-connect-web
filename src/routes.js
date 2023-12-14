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

// Review
const Review = React.lazy(() => import('./views/reviews/transactions/index'))
const AddReview = React.lazy(() => import('./views/reviews/transactions/AddReview'))
const EditReview = React.lazy(() => import('./views/reviews/transactions/EditReview'))
const ViewReview = React.lazy(() => import('./views/reviews/transactions/ViewReview'))

// Service
const Service = React.lazy(() => import('./views/services/transactions/index'))
const AddService = React.lazy(() => import('./views/services/transactions/AddService'))
const EditService = React.lazy(() => import('./views/services/transactions/EditService'))
const ViewService = React.lazy(() => import('./views/services/transactions/ViewService'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/appointment', name: 'Appointment', element: Appointment },
  { path: '/appointment-add', name: 'Add Appointments', element: AddAppointments },
  { path: '/appointment-edit', name: 'Edit Appointments', element: EditAppointments },
  { path: '/appointment-view', name: 'View Appointments', element: ViewReview },

  { path: '/review', name: 'Review', element: Review },
  { path: '/review-add', name: 'Add Review', element: AddReview },
  { path: '/review-edit', name: 'Edit Review', element: EditReview },
  { path: '/review-view', name: 'View Review', element: ViewAppointments },

  { path: '/service', name: 'Service', element: Service },
  { path: '/service-add', name: 'Add Service', element: AddService },
  { path: '/service-edit', name: 'Edit Service', element: EditService },
  { path: '/service-view', name: 'View Service', element: ViewService },
]

export default routes
