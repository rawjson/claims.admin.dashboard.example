import clsx from 'clsx'
import { shimmer } from './shimmer'
import { Flex } from '@tremor/react'
export const Skeleton = ({ isLoading }: { isLoading?: boolean }) => (
  <div className={clsx('', isLoading && shimmer)}>
    <div className="space-y-5">
      <Flex className="w-full space-x-4">
        <div className="w-32 h-32 bg-zinc-200" />
        <div className="w-full space-y-3">
          <div className="h-4 w-1/4 bg-zinc-200" />
          <div className="h-4 w-2/3 bg-zinc-200" />
          <div className="h-6 w-5/6 bg-zinc-200" />
          <div className="h-6 w-1/2 bg-zinc-200" />
        </div>
      </Flex>
    </div>
  </div>
)
