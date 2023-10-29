import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { Flex } from '@tremor/react'
import { HTMLAttributes } from 'react'

const user = [
  { label: 'Email', value: 'emma123@gmail.com' },
  { label: 'Phone', value: '+1-889958247' },
  { label: 'Address', value: '2103 Linden, NJ 07036 (USA)' },
]

export function AboutMe(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full" {...props}>
      <Flex>
        <h2 className="uppercase font-semibold">About me</h2>
        <EllipsisHorizontalIcon className="w-5 h-5" />
      </Flex>

      <hr className="my-4" />

      <Flex flexDirection="col" alignItems="start" className="space-y-5 mt-2">
        {user.map(({ label, value }, i) => {
          return (
            <Flex
              flexDirection="col"
              alignItems="start"
              key={i}
              className="space-y-1"
            >
              <label className="uppercase text-gray-500 text-xs">{label}</label>
              <span className="text-sm">{value}</span>
            </Flex>
          )
        })}
      </Flex>
    </div>
  )
}
