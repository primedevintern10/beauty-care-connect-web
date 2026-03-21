import React from 'react'

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Company
const Company = React.lazy(() => import('./views/administration/masters/company/index'))
const AddCompany = React.lazy(() => import('./views/administration/masters/company/AddCompany'))
const EditCompany = React.lazy(() => import('./views/administration/masters/company/EditCompany'))
const ViewCompany = React.lazy(() => import('./views/administration/masters/company/ViewCompany'))

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

// Client
const Client = React.lazy(() => import('./views/services/masters/client/index'))
const AddClient = React.lazy(() => import('./views/services/masters/client/AddClient'))
const EditClient = React.lazy(() => import('./views/services/masters/client/EditClient'))
const ViewClient = React.lazy(() => import('./views/services/masters/client/ViewClient'))

// Employee
const Employee = React.lazy(() => import('./views/administration/masters/employee/index'))
const AddEmployee = React.lazy(() => import('./views/administration/masters/employee/AddEmployee'))
const EditEmployee = React.lazy(() =>
  import('./views/administration/masters/employee/EditEmployee'),
)
const ViewEmployee = React.lazy(() =>
  import('./views/administration/masters/employee/ViewEmployee'),
)

// User Group
const UserGroup = React.lazy(() => import('./views/administration/masters/usergroup/index'))
const AddUserGroup = React.lazy(() =>
  import('./views/administration/masters/usergroup/AddUserGroup'),
)
const EditUserGroup = React.lazy(() =>
  import('./views/administration/masters/usergroup/EditUserGroup'),
)
const ViewUserGroup = React.lazy(() =>
  import('./views/administration/masters/usergroup/ViewUserGroup'),
)

// User
const User = React.lazy(() => import('./views/administration/masters/user/index'))
const AddUser = React.lazy(() => import('./views/administration/masters/user/AddUser'))
const EditUser = React.lazy(() => import('./views/administration/masters/user/EditUser'))
const ViewUser = React.lazy(() => import('./views/administration/masters/user/ViewUser'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/appointment', name: 'Appointment', element: Appointment },
  { path: '/appointment-add', name: 'Add Appointments', element: AddAppointments },
  { path: '/appointment-edit', name: 'Edit Appointments', element: EditAppointments },
  { path: '/appointment-view', name: 'View Appointments', element: ViewAppointments },

  { path: '/company', name: 'Employee', element: Company },
  { path: '/company-add', name: 'Add Employee', element: AddCompany },
  { path: '/company-edit', name: 'Edit Employee', element: EditCompany },
  { path: '/company-view', name: 'View Employee', element: ViewCompany },

  { path: '/review', name: 'Review', element: Review },
  { path: '/review-add', name: 'Add Review', element: AddReview },
  { path: '/review-edit', name: 'Edit Review', element: EditReview },
  { path: '/review-view', name: 'View Review', element: ViewReview },

  { path: '/service', name: 'Service', element: Service },
  { path: '/service-add', name: 'Add Service', element: AddService },
  { path: '/service-edit', name: 'Edit Service', element: EditService },
  { path: '/service-view', name: 'View Service', element: ViewService },

  { path: '/category', name: 'Category', element: Category },
  { path: '/category-add', name: 'Add Category', element: AddCategory },
  { path: '/category-edit', name: 'Edit Category', element: EditCategory },
  { path: '/category-view', name: 'View Category', element: ViewCategory },

  { path: '/client', name: 'Client', element: Client },
  { path: '/client-add', name: 'Add Client', element: AddClient },
  { path: '/client-edit', name: 'Edit Client', element: EditClient },
  { path: '/client-view', name: 'View Client', element: ViewClient },

  { path: '/employee', name: 'Employee', element: Employee },
  { path: '/employee-add', name: 'Add Employee', element: AddEmployee },
  { path: '/employee-edit', name: 'Edit Employee', element: EditEmployee },
  { path: '/employee-view', name: 'View Employee', element: ViewEmployee },

  { path: '/usergroup', name: 'User Group', element: UserGroup },
  { path: '/usergroup-add', name: 'Add User Group', element: AddUserGroup },
  { path: '/usergroup-edit', name: 'Edit User Group', element: EditUserGroup },
  { path: '/usergroup-view', name: 'View User Group', element: ViewUserGroup },

  { path: '/user', name: 'User', element: User },
  { path: '/user-add', name: 'Add User', element: AddUser },
  { path: '/user-edit', name: 'Edit User', element: EditUser },
  { path: '/user-view', name: 'View User', element: ViewUser },
]

export default routes
