import { notFound } from 'next/navigation'
import {
  Home,
  ApprovedClaims,
  PendingClaims,
  CoverageDetails,
} from '#/claims/tabs'

import { Metadata } from 'next'
import { Members } from '#/claims/tabs/members'

export const metadata: Metadata = {
  title: 'Claims Demo',
}

export default function CatchAllSegmentsOptional({
  params,
}: {
  params: { slug: string[] }
}) {
  if (!params?.slug?.length) return <Home />

  const { slug } = params

  switch (slug[0]) {
    case 'coverage-details':
      return <CoverageDetails />

    case 'approved-claims':
      return <ApprovedClaims />

    case 'pending-claims':
      return <PendingClaims />

    case 'members':
      return <Members />

    default:
      return notFound()
  }
}
