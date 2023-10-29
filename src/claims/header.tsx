import { BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Cover } from './cover'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { Flex } from '@tremor/react'
import { ProfileProgress } from './profile-progress'
import { HTMLAttributes } from 'react'

export function Header({
  active = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & { active?: boolean }) {
  return (
    <div {...props}>
      <Cover />

      <div className="my-auto flex items-start justify-between w-full h-full z-10">
        <div className="space-x-4 my-auto flex items-center h-full">
          <div className="w-32 h-32 2xl:w-40 2xl:h-40 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1621296825543-6ee0cd988907?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-white py-5">
            <Flex alignItems="center" className="text-2xl font-semibold">
              <span>Welcome back, Emma!</span>
            </Flex>

            <div className="flex items-center space-x-2 w-fit rounded-xl text-xs py-1 mt-1 bg-white/70 px-4">
              <span
                className={clsx('w-2 h-2 rounded-full block', {
                  'bg-green-500': active,
                  'bg-red-600': !active,
                })}
              />
              <span
                className={clsx(
                  {
                    'text-green-600': active,
                    'text-red-600': !active,
                  },
                  'font-semibold'
                )}
              >
                {active ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between h-full">
          <div className="space-x-2 flex items-center text-white">
            <QuestionMarkCircleIcon className="shrink-0 w-6 h-6 " />
            <BellIcon className="w-6 h-6 shrink-0" />
          </div>

          <ProfileProgress className="w-64 2xl:w-72 px-2 py-1 2xl:p-4 relative bg-white/50" />
        </div>
      </div>
    </div>
  )
}
