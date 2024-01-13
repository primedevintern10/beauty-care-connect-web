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
  cilUser,
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
    to: '#',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Approval',
        to: '#',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '#',
          },
        ],
      },
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
      {
        component: CNavGroup,
        name: 'Report',
        to: '#',
        icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '#',
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
            name: 'Transactions',
            to: '#',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reviews',
    to: '#',
    icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Approval',
        to: '#',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '#',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Transactions',
        to: '#',
        icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '/review',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Report',
        to: '#',
        icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Transactions',
            to: '#',
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
            name: 'Transactions',
            to: '#',
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
      // {
      //   component: CNavGroup,
      //   name: 'Approval',
      //   to: '#',
      //   icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
      //   items: [
      //     {
      //       component: CNavItem,
      //       name: 'Transactions',
      //       to: '#',
      //     },
      //   ],
      // },
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
      // {
      //   component: CNavGroup,
      //   name: 'Report',
      //   to: '#',
      //   icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
      //   items: [
      //     {
      //       component: CNavItem,
      //       name: 'Transactions',
      //       to: '#',
      //     },
      //   ],
      // },
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
          // {
          //   component: CNavItem,
          //   name: 'Service',
          //   to: '/service',
          // },
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
            // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
          },
        ],
      },
    ],
  },
]

export default _nav
