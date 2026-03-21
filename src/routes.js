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

// Account
const Profile = React.lazy(() => import('./views/pages/profile/Profile'))
const Settings = React.lazy(() => import('./views/pages/settings/Settings'))

const ADMIN = 'ADMIN'
const OWNER = 'OWNER'
const EMP = 'EMP'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard, roles: [ADMIN, OWNER, EMP] },

  { path: '/appointment', name: 'Appointment', element: Appointment, roles: [ADMIN, OWNER, EMP] },
  { path: '/appointment-add', name: 'Add Appointments', element: AddAppointments, roles: [ADMIN, OWNER, EMP] },
  { path: '/appointment-edit', name: 'Edit Appointments', element: EditAppointments, roles: [ADMIN, OWNER, EMP] },
  { path: '/appointment-view', name: 'View Appointments', element: ViewAppointments, roles: [ADMIN, OWNER, EMP] },

  { path: '/company', name: 'Company', element: Company, roles: [ADMIN] },
  { path: '/company-add', name: 'Add Company', element: AddCompany, roles: [ADMIN] },
  { path: '/company-edit', name: 'Edit Company', element: EditCompany, roles: [ADMIN] },
  { path: '/company-view', name: 'View Company', element: ViewCompany, roles: [ADMIN] },

  { path: '/review', name: 'Review', element: Review, roles: [ADMIN, OWNER, EMP] },
  { path: '/review-add', name: 'Add Review', element: AddReview, roles: [ADMIN, OWNER, EMP] },
  { path: '/review-edit', name: 'Edit Review', element: EditReview, roles: [ADMIN, OWNER, EMP] },
  { path: '/review-view', name: 'View Review', element: ViewReview, roles: [ADMIN, OWNER, EMP] },

  { path: '/service', name: 'Service', element: Service, roles: [ADMIN, OWNER] },
  { path: '/service-add', name: 'Add Service', element: AddService, roles: [ADMIN, OWNER] },
  { path: '/service-edit', name: 'Edit Service', element: EditService, roles: [ADMIN, OWNER] },
  { path: '/service-view', name: 'View Service', element: ViewService, roles: [ADMIN, OWNER] },

  { path: '/category', name: 'Category', element: Category, roles: [ADMIN, OWNER] },
  { path: '/category-add', name: 'Add Category', element: AddCategory, roles: [ADMIN, OWNER] },
  { path: '/category-edit', name: 'Edit Category', element: EditCategory, roles: [ADMIN, OWNER] },
  { path: '/category-view', name: 'View Category', element: ViewCategory, roles: [ADMIN, OWNER] },

  { path: '/client', name: 'Client', element: Client, roles: [ADMIN, OWNER] },
  { path: '/client-add', name: 'Add Client', element: AddClient, roles: [ADMIN, OWNER] },
  { path: '/client-edit', name: 'Edit Client', element: EditClient, roles: [ADMIN, OWNER] },
  { path: '/client-view', name: 'View Client', element: ViewClient, roles: [ADMIN, OWNER] },

  { path: '/employee', name: 'Employee', element: Employee, roles: [ADMIN, OWNER] },
  { path: '/employee-add', name: 'Add Employee', element: AddEmployee, roles: [ADMIN, OWNER] },
  { path: '/employee-edit', name: 'Edit Employee', element: EditEmployee, roles: [ADMIN, OWNER] },
  { path: '/employee-view', name: 'View Employee', element: ViewEmployee, roles: [ADMIN, OWNER] },

  { path: '/usergroup', name: 'User Group', element: UserGroup, roles: [ADMIN] },
  { path: '/usergroup-add', name: 'Add User Group', element: AddUserGroup, roles: [ADMIN] },
  { path: '/usergroup-edit', name: 'Edit User Group', element: EditUserGroup, roles: [ADMIN] },
  { path: '/usergroup-view', name: 'View User Group', element: ViewUserGroup, roles: [ADMIN] },

  { path: '/user', name: 'User', element: User, roles: [ADMIN] },
  { path: '/user-add', name: 'Add User', element: AddUser, roles: [ADMIN] },
  { path: '/user-edit', name: 'Edit User', element: EditUser, roles: [ADMIN] },
  { path: '/user-view', name: 'View User', element: ViewUser, roles: [ADMIN] },

  { path: '/profile', name: 'Profile', element: Profile, roles: [ADMIN, OWNER, EMP] },
  { path: '/settings', name: 'Settings', element: Settings, roles: [ADMIN, OWNER, EMP] },
]

export default routes
