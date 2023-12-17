// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    id: 'timeline',
    title: 'Circles Activities',
    icon: <Circle size={12} />,
    navLink: '/components/timeline'
  },
  {
    id: 'profile',
    title: 'My Page',
    icon: <Circle size={12} />,
    navLink: '/pages/profile'
  },
  {
    id: 'todo',
    title: 'Todo',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo'
  },
  {
    id: 'kanban',
    title: 'Kanban',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/kanban'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'email',
    title: 'Email',
    icon: <Mail size={20} />,
    navLink: '/apps/email'
  },
  {
        id: 'invoiceList',
        title: 'Top Users',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
  },
  {
    id: 'blogList',
    title: 'Blog',
    icon: <Circle size={12} />,
    permissions: ['admin', 'editor'],
    navLink: '/pages/blog/list'
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: <Circle size={12} />,
    permissions: ['admin', 'editor'],
    navLink: '/pages/faq'
  }
]
