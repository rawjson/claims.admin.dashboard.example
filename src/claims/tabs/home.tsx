import { Activity } from '../activity'
import { ClaimRequests } from '../claim-requests'
import { Statistics } from '../statistics'

export function Home() {
  return (
    <div className="sm:grid grid-cols-11 lg:grid-cols-12 sm:gap-x-3 lg:gap-x-5 h-full space-y-5 sm:space-y-0">
      <div className="sm:col-span-6 lg:col-span-8 space-y-3 lg:space-y-5 sm:h-full">
        <Statistics className="h-fit flex flex-wrap gap-3 lg:gap-5" />
        <ClaimRequests className="space-y-5" />
      </div>
      <Activity className="sm:col-span-5 lg:col-span-4 bg-white p-5 sm:h-full" />
    </div>
  )
}
