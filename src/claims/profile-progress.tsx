'use client'

import { Button, Flex, ProgressCircle } from '@tremor/react'
import { HTMLAttributes } from 'react'

export function ProfileProgress(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Flex alignItems="center" className="space-x-4">
        <ProgressCircle value={75} size="md" color="orange">
          <span className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-sm text-orange-500 font-medium">
            75%
          </span>
        </ProgressCircle>

        <div className="w-full leading-4">
          <span className="text-sm lg:text-md font-semibold tracking-tight text-white">
            Profile Completed
          </span>
          <p className="text-xs mt-px text-white/70 font-medium">
            Please update your profile.
          </p>
          <Button className="mt-2" size="xs" color="orange" variant="primary">
            Complete
          </Button>
        </div>
      </Flex>
    </div>
  )
}
