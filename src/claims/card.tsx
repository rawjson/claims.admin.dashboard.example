import { Flex } from '@tremor/react'
import { ClaimRequest } from './claim-requests'
import {
  CalendarDaysIcon,
  CalendarIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { PayNowButton } from './pay-now-button'
import Image from 'next/image'

export function Card({
  name,
  image,
  createdAt,
  dueDate,
  address,
}: ClaimRequest) {
  return (
    <div className="bg-white flex flex-col lg:flex-row justify-between lg:h-36 2xl:h-40 p-4 space-y-4 lg:space-y-0">
      <div className="flex space-x-4 items-center w-fit">
        <div className="w-20 h-28 lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 bg-gray-50 relative">
          <Image
            src={image}
            alt="profile picture"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold uppercase">{name}</label>

          <Flex
            alignItems="start"
            className="text-xs lg:text-sm space-x-2 w-fit"
          >
            <CalendarIcon className="w-5 h-5 text-gray-400" />
            <span className="hidden lg:inline-block">Filed</span>
            <span className="text-gray-400 truncate max-w-[150px] lg:max-w-none">
              - {createdAt}
            </span>
          </Flex>

          <Flex
            className="text-xs lg:text-sm space-x-2 w-fit"
            alignItems="start"
          >
            <CalendarDaysIcon className="w-5 h-5 text-gray-400" />
            <span className="hidden lg:inline-block">Due</span>
            <span className="text-gray-400 truncate max-w-[150px] lg:max-w-none">
              - {dueDate}
            </span>
          </Flex>

          <Flex
            className="text-xs lg:text-sm space-x-2 w-fit"
            alignItems="start"
          >
            <MapPinIcon className="w-5 h-5 text-gray-400" />
            <span className="hidden lg:inline-block">Address</span>
            <span className="text-gray-400 truncate max-w-[150px] lg:max-w-none">
              - {address.line1}, {address.city} {address.postCode}{' '}
              {address.country}
            </span>
          </Flex>
        </div>
      </div>

      <div className="h-full flex flex-col justify-end">
        <PayNowButton />
      </div>
    </div>
  )
}
