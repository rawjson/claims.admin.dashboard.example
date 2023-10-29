import { Skeleton } from '#/ui/skeleton'

export default function Skeletons() {
  return (
    <div className="space-y-5 h-full">
      {Array(3)
        .fill('')
        .map((_, i) => {
          return <Skeleton key={i} isLoading />
        })}
    </div>
  )
}
