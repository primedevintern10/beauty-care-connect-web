import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilMemory,
  cilCalendarCheck,
  cilSwapHorizontal,
  cilHandshake,
  cilSitemap,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

var _nav = []

switch (sessionStorage.getItem('userGroupName')) {
  case 'ADMIN':
    _nav = [
      {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {
        component: CNavGroup,
        name: 'Administration',
        icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Master',
            to: '#',
            icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Company',
                to: '/company',
              },
            ],
          },
        ],
      },
    ]
    break
  case 'OWNER':
    _nav = [
      {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {
        component: CNavGroup,
        name: 'Appointment',
        to: '#',
        icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Appointment',
                to: '/appointment',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Services',
        icon: <CIcon icon={cilHandshake} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Service',
                to: '/service',
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'Masters',
            to: '#',
            icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Category',
                to: '/category',
              },
              {
                component: CNavItem,
                name: 'Client',
                to: '/client',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Administration',
        icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Master',
            to: '#',
            icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Employee',
                to: '/employee',
              },
              {
                component: CNavItem,
                name: 'User',
                to: '/user',
              },
            ],
          },
        ],
      },
    ]
    break
  case 'EMP':
    _nav = [
      {
        component: CNavGroup,
        name: 'Appointment',
        to: '#',
        icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Appointment',
                to: '/appointment',
              },
            ],
          },
        ],
      },
    ]
    break
  default:
    _nav = [
      {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {
        component: CNavGroup,
        name: 'Appointment',
        to: '#',
        icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Appointment',
                to: '/appointment',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Services',
        icon: <CIcon icon={cilHandshake} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Service',
                to: '/service',
              },
            ],
          },
          {
            component: CNavGroup,
            name: 'Masters',
            to: '#',
            icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Category',
                to: '/category',
              },
              {
                component: CNavItem,
                name: 'Client',
                to: '/client',
              },
            ],
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Administration',
        icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Master',
            to: '#',
            icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Company',
                to: '/company',
              },
            ],
          },
        ],
      },
    ]
}

export default _nav
