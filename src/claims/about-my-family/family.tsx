import { family } from './constants'
import { Flex } from '@tremor/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { ImageCard } from '../image-card'
import { HTMLAttributes } from 'react'

export function Family(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full" {...props}>
      <Flex>
        <h2 className="uppercase font-semibold">About my family</h2>
        <EllipsisHorizontalIcon className="w-5 h-5" />
      </Flex>

      <hr className="my-4" />

      <div className="space-y-4">
        {family.map(({ title, persons }, i) => {
          return (
            <div key={i}>
              <span className="uppercase text-xs text-gray-400 font-semibold">
                {title}
              </span>
              <div className="flex items-center space-x-4 mt-4">
                {persons.map(({ imageSrc }, i) => {
                  return <ImageCard key={i} image={imageSrc} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
