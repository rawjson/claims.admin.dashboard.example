'use client'
import clsx from 'clsx'
import { ElementType } from 'react'
import { HyperLink } from '#/components/hyperLink'
import { HomeIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'

export type Navigation = {
  id: string
  label: string
  href: string
  icon: ElementType | null
}
const navigation: Navigation[] = [
  { id: '1', label: 'Home', href: '/', icon: HomeIcon },
  { id: '2', label: 'Coverage Details', href: '/coverage-details', icon: null },
  { id: '3', label: 'Pending Claims', href: '/pending-claims', icon: null },
  { id: '4', label: 'Approved Claims', href: '/approved-claims', icon: null },
  { id: '5', label: 'Members', href: '/members', icon: null },
]

export function Navigation() {
  const path = usePathname()

  return (
    <div className="flex items-center space-x-4 lg:space-x-8 pt-3 px-3 lg:px-8 w-full">
      {navigation.map(({ href, icon: Icon, label, id }) => {
        return (
          <HyperLink
            href={href}
            key={id}
            className={clsx(
              'flex items-center space-x-2 border-b-[3px] cursor-pointer transition ease-in-out duration-200 lg:pr-4',
              href === path
                ? 'border-orange-400'
                : 'border-transparent hover:opacity-50 hover:text-orange-600'
            )}
          >
            {Icon && <Icon className="w-4 h-4" />}
            <span className="text-sm lg:text-base">{label}</span>
          </HyperLink>
        )
      })}
    </div>
  )
}
