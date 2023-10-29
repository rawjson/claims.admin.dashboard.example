import Image from 'next/image'

export function Cover() {
  return (
    <div className="h-full w-full absolute inset-0">
      <div className="z-0 absolute h-full w-full bg-black/50" />
      <Image
        className="object-cover"
        src="https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&q=80&w=2029&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="cover"
        fill
      />
    </div>
  )
}
