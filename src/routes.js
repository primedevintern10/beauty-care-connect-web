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

// Category
const Category = React.lazy(() => import('./views/services/masters/category/index'))
const AddCategory = React.lazy(() => import('./views/services/masters/category/AddCategory'))
const EditCategory = React.lazy(() => import('./views/services/masters/category/EditCategory'))
const ViewCategory = React.lazy(() => import('./views/services/masters/category/ViewCategory'))

// Employee
const Employee = React.lazy(() => import('./views/administration/masters/employee/index'))
const AddEmployee = React.lazy(() => import('./views/administration/masters/employee/AddEmployee'))
const EditEmployee = React.lazy(() =>
  import('./views/administration/masters/employee/EditEmployee'),
)
const ViewEmployee = React.lazy(() =>
  import('./views/administration/masters/employee/ViewEmployee'),
)

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

  { path: '/category', name: 'Category', element: Category },
  { path: '/category-add', name: 'Add Category', element: AddCategory },
  { path: '/category-edit', name: 'Edit Category', element: EditCategory },
  { path: '/category-view', name: 'View Category', element: ViewCategory },

  { path: '/employee', name: 'Employee', element: Employee },
  { path: '/employee-add', name: 'Add Employee', element: AddEmployee },
  { path: '/employee-edit', name: 'Edit Employee', element: EditEmployee },
  { path: '/employee-view', name: 'View Employee', element: ViewEmployee },
]

export default routes
