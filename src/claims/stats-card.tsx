import { ImageCard } from './image-card'
import { Stat } from './statistics'

export function StatsCard({ count, group, label }: Stat) {
  return (
    <div className="flex items-center space-x-3 bg-white w-full lg:w-fit p-4 min-w-[200px]">
      <label className="text-4xl">{count}</label>

      <div className="border-l pl-5 flex flex-col items-start space-y-2">
        <label className="uppercase text-xs text-gray-400">{label}</label>
        <div className="flex ml-2">
          {group.map(({ image }, i) => {
            return (
              <ImageCard key={i} image={image} size="28px" className="-ml-3" />
            )
          })}
        </div>
      </div>
    </div>
  )
}
