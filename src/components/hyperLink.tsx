import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export function HyperLink({
  children,
  className,
  ...props
}: LinkProps & { children: ReactNode; className?: string }) {
  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  )
}
