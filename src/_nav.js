import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilMemory,
  cilCalendarCheck,
  cilSwapHorizontal,
  cilFindInPage,
  cilHandshake,
  cilSitemap,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

/*
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
            name: 'Appointment',
            to: '/appointment',
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
      // {
      //   component: CNavGroup,
      //   name: 'Masters',
      //   to: '#',
      //   icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
      //   items: [
      //     {
      //       component: CNavItem,
      //       name: 'Transactions',
      //       to: '#',
      //     },
      //   ],
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reviews',
    to: '#',
    icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
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
            name: 'Review',
            to: '/review',
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
      // {
      //   component: CNavGroup,
      //   name: 'Masters',
      //   to: '#',
      //   icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
      //   items: [
      //     {
      //       component: CNavItem,
      //       name: 'Transactions',
      //       to: '#',
      //     },
      //   ],
      // },
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
          {
            component: CNavItem,
            name: 'Company',
            to: '/company',
            // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
          },
          {
            component: CNavItem,
            name: 'User Group',
            to: '/usergroup',
            // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
          },
          {
            component: CNavItem,
            name: 'User',
            to: '/user',
            // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
          },
        ],
      },
    ],
  },
]
*/
var _nav = []

switch ('ADMIN_USER') {
  case 'ADMIN_USER':
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
        name: 'Reviews',
        to: '#',
        icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Review',
                to: '/review',
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
                name: 'Company',
                to: '/company',
              },
              {
                component: CNavItem,
                name: 'User Group',
                to: '/usergroup',
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
  case 'COMPANY_OWNER':
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
        name: 'Reviews',
        to: '#',
        icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Review',
                to: '/review',
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
                name: 'User Group',
                to: '/usergroup',
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
  case 'PUBLIC_USER':
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
        name: 'Reviews',
        to: '#',
        icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Review',
                to: '/review',
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
        name: 'Reviews',
        to: '#',
        icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Transactions',
            to: '#',
            icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Review',
                to: '/review',
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
                name: 'Company',
                to: '/company',
              },
              {
                component: CNavItem,
                name: 'User Group',
                to: '/usergroup',
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
}

export default _nav
