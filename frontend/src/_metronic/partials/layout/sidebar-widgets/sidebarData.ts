type SidebarStat = {
  category: 'tasks' | 'orders' | 'tickets' | 'notifcations' | 'mail'
  data: {
    title: string
    items: Array<{label: string; value: string}>
  }
}

export const statsData: Array<SidebarStat> = [
  {
    category: 'tasks',
    data: {
      title: 'Assigned Tasks',
      items: [
        {
          label: 'Pending',
          value: '100',
        },
        {
          label: 'Completed',
          value: '210',
        },

        {label: 'On Hold', value: '10'},
        {
          label: 'In Progress',
          value: '55',
        },
      ],
    },
  },
  {
    category: 'orders',
    data: {
      title: 'Customer Orders',
      items: [
        {
          label: 'In Process',
          value: '40',
        },
        {
          label: 'Delivered',
          value: '110',
        },
        {
          label: 'On Hold',
          value: '29',
        },
        {
          label: 'In Progress',
          value: '15',
        },
      ],
    },
  },
  {
    category: 'tickets',
    data: {
      title: 'Support Tickets',
      items: [
        {
          label: 'Pending',
          value: '28',
        },
        {
          label: 'Completed',
          value: '204',
        },
        {
          label: 'On Hold',
          value: '76',
        },
        {
          label: 'In Progress',
          value: '9',
        },
      ],
    },
  },

  {
    category: 'notifcations',
    data: {
      title: 'Notifcations',
      items: [
        {
          label: 'System Alert',
          value: '5',
        },
        {
          label: 'Server Failure',
          value: '10',
        },
        {
          label: 'User Feedback',
          value: '40',
        },
        {
          label: 'Backup',
          value: '3',
        },
      ],
    },
  },
  {
    category: 'mail',
    data: {
      title: 'Outgoing Emails',
      items: [
        {
          label: 'Sending',
          value: '160',
        },
        {
          label: 'Sent',
          value: '2600',
        },
        {
          label: 'Delivered',
          value: '2500',
        },
        {
          label: 'Failed',
          value: '11',
        },
      ],
    },
  },
]

export const bestSellers: Array<{image: string; title: string; desc: string}> = [
  {
    image: 'stock/600x400/img-1.jpg',
    title: 'Spotify App',
    desc: 'HTML, SASS, Bootstrap',
  },
  {
    image: 'stock/600x400/img-2.jpg',
    title: 'Fitnes Drive',
    desc: 'Angular, Typescript, Bootstrap',
  },
  {
    image: 'stock/600x400/img-3.jpg',
    title: 'Taskify App',
    desc: 'HTML, CSS. jQuery',
  },
  {
    image: 'stock/600x400/img-5.jpg',
    title: 'Calendr App',
    desc: 'React, MangoDb. Node',
  },
  {
    image: 'stock/600x400/img-6.jpg',
    title: 'Stocked SaaS',
    desc: 'PHP, Laravel, Oracle',
  },
]

export const orders: Array<{image: string; title: string; desc: string}> = [
  {
    image: 'stock/600x400/img-20.jpg',
    title: 'Premium Coffee',
    desc: 'Arabica Specialty Brand',
  },
  {
    image: 'stock/600x400/img-25.jpg',
    title: 'Light Sneakers',
    desc: 'The Best Lightweight Sneakers',
  },
  {
    image: 'stock/600x400/img-24.jpg',
    title: 'Red Boots',
    desc: 'All Season Boots',
  },
  {
    image: 'stock/600x400/img-19.jpg',
    title: 'Wall Decoration',
    desc: 'Creative & Easy To Install',
  },
  {
    image: 'stock/600x400/img-27.jpg',
    title: 'Home Confort',
    desc: 'Smart Air Purifier',
  },
]

export const tasks: Array<{icon: string; color: string; title: string; description: string}> = [
  {
    icon: 'abstract-26',
    color: 'success',
    title: 'Project Briefing',
    description: 'Project Manager',
  },
  {
    icon: 'pencil',
    color: 'warning',
    title: 'Concept Design',
    description: 'Art Director',
  },
  {
    icon: 'message-text-2',
    color: 'primary',
    title: 'Functional Logics',
    description: 'Lead Developer',
  },
  {
    icon: 'disconnect',
    color: 'danger',
    title: 'Development',
    description: 'DevOps',
  },
  {
    icon: 'security-user',
    color: 'info',
    title: 'Testing',
    description: 'QA Managers',
  },
]
