import { HTMLAttributes } from 'react'
import { Card } from './card'

export type ClaimRequest = {
  name: string
  createdAt: string
  dueDate: string
  address: {
    line1: string
    postCode: string
    city: string
    country: string
  }
  image: string
}

const claimRequests: Array<ClaimRequest> = [
  {
    name: 'Amelia Kimani',
    createdAt: 'Thu, Oct 10, 2023 7:40 PM',
    dueDate: 'Wed, Nov 23, 2023 12:30 PM',
    address: {
      line1: 'Hillside Rd',
      city: 'NY',
      country: 'US',
      postCode: '12345',
    },
    image: `https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    name: 'Genevieve Juma',
    createdAt: 'Thu, Oct 10, 2023 7:40 PM',
    dueDate: 'Wed, Nov 23, 2023 12:30 PM',
    address: {
      line1: 'Hillside Rd',
      city: 'NY',
      country: 'US',
      postCode: '12345',
    },
    image: `https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    name: 'Theodore Wachira',
    createdAt: 'Thu, Oct 10, 2023 7:40 PM',
    dueDate: 'Wed, Nov 23, 2023 12:30 PM',
    address: {
      line1: 'Hillside Rd',
      city: 'NY',
      country: 'US',
      postCode: '12345',
    },
    image: `https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
]

export function ClaimRequests(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      {claimRequests.map((props, i) => {
        return <Card key={i} {...props} />
      })}
    </div>
  )
}
