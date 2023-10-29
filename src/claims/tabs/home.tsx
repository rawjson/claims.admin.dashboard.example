import { Activity } from '../activity'
import { ClaimRequests } from '../claim-requests'
import { Statistics } from '../statistics'

export function Home() {
  return (
    <div className="grid grid-cols-11 lg:grid-cols-12 gap-x-3 lg:gap-x-5 h-full">
      <div className="col-span-6 lg:col-span-8 space-y-3 lg:space-y-5 h-full">
        <Statistics className="h-fit flex flex-wrap gap-3 lg:gap-5" />
        <ClaimRequests className="space-y-5" />
      </div>
      <Activity className="col-span-5 lg:col-span-4 bg-white p-5 h-full" />
    </div>
  )
}
