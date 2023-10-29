'use client'

import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Button } from '@tremor/react'

export function PayNowButton() {
  return (
    <Button
      className="flex items-center"
      icon={CurrencyDollarIcon}
      color="orange"
    >
      <span>Pay</span>
    </Button>
  )
}
