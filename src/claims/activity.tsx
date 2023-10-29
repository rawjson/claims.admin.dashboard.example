import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const activity: Array<{
  title: string
  description: string
  timestamp: string
  dot: 'blue' | 'green' | 'orange'
}> = [
  {
    title: 'Claimed $2000',
    description: '$2000 dollars were claimed by the memebers yesterday.',
    timestamp: '05:40am',
    dot: 'blue',
  },
  {
    title: '102 New Members',
    description:
      'You have been added by 102 new members, checkout out their profiles.',
    timestamp: 'yesterday',
    dot: 'orange',
  },
  {
    title: '3 Claims Are Pending',
    description: 'Please approve the pending claims in your list.',
    timestamp: 'yesterday',
    dot: 'green',
  },
  {
    title: 'Just Covered',
    description:
      'You have extended your coverage benfits to one more family memeber!',
    timestamp: 'a week ago',
    dot: 'blue',
  },
]

export function Activity(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <h3 className="text-gray-500 uppercase text-sm font-medium ">Activity</h3>

      <hr className="my-2" />

      <div className="space-y-4">
        {activity.map(({ title, description, timestamp, dot }, i) => {
          return (
            <div key={i} className="flex items-start space-x-4">
              <span
                className={clsx('w-2 h-2 block rounded-full mt-2 shrink-0', {
                  'bg-blue-500': dot === 'blue',
                  'bg-orange-500': dot === 'orange',
                  'bg-green-500': dot === 'green',
                })}
              />
              <div>
                <label className="text-gray-700 font-medium tracking-tight text-sm lg:text-base">
                  {title}
                </label>
                <p className="text-gray-500 text-xs lg:text-sm">
                  {description}
                </p>
                <small className="text-gray-400">{timestamp}</small>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
