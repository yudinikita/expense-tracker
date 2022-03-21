import { Transaction } from 'modules/graphql'

export const transactionsListMock: Transaction[] = [
  {
    user: '1',
    id: '1',
    amount: 12,
    category: {
      id: '1',
      title: 'Home'
    },
    commentary: 'Test commentary',
    createdAt: '01.12.2022',
    updatedAt: '01.12.2022'
  },
  {
    user: '1',
    id: '2',
    amount: 1287,
    category: {
      id: '2',
      title: 'Job'
    },
    createdAt: '01.14.2022',
    updatedAt: '01.14.2022'
  },
  {
    user: '1',
    id: '3',
    amount: -546,
    category: {
      id: '1',
      title: 'Home'
    },
    createdAt: '01.14.2022',
    updatedAt: '01.14.2022'
  }
]
