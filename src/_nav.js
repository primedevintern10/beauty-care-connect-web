import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilMemory,
  cilCalendarCheck,
  cilBarChart,
  cilSwapHorizontal,
  cilSpreadsheet,
  cilFindInPage,
  cilHandshake,
  cilSitemap,
  cilCircle,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavGroup,
    name: 'Appointment',
    to: '/base',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Approval',
        to: '/base/accordion',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Transactions',
        to: '/base/breadcrumbs',
        icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Appointment',
            to: '/appointment',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Report',
        to: '/base/cards',
        icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Masters',
        to: '/base/carousels',
        icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reviews',
    to: '/buttons',
    icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Approval',
        to: '/base/accordion',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Transactions',
        to: '/base/breadcrumbs',
        icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Report',
        to: '/base/cards',
        icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Masters',
        to: '/base/carousels',
        icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
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
        name: 'Approval',
        to: '/base/accordion',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Transactions',
        to: '/base/breadcrumbs',
        icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Report',
        to: '/base/cards',
        icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Masters',
        to: '/base/carousels',
        icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/base/breadcrumbs',
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
        component: CNavItem,
        name: 'Company Policy',
        to: '/base/accordion',
        icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
