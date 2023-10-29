import clsx from 'clsx'
import Image from 'next/image'

export function ImageCard({
  image,
  size = '48px',
  className,
}: {
  image: string
  size?: string
  className?: string
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(
        'relative rounded-full overflow-clip shrink-0',
        className
      )}
    >
      <Image alt="Image of person" src={image} fill className="object-cover" />
    </div>
  )
}
