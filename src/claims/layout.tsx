import { Work_Sans } from 'next/font/google'
import { Navigation } from './navigation'
import { Family } from './about-my-family'
import { NodeProps } from '#/types'
import { AboutMe } from './about-me'
import { Header } from './header'

const font = Work_Sans({ subsets: ['latin'] })

export default function ClaimsLayout({ children }: NodeProps) {
  return (
    <main
      style={font.style}
      className="w-full h-screen overflow-y-auto bg-slate-200/30"
    >
      <div className="w-full h-full grid grid-cols-12 items-start gap-0">
        <Header className="z-20 p-3 2xl:p-5 w-full flex relative overflow-hidden col-span-full h-[25vh] 2xl:h-[20vh]" />

        <div className="col-span-3 2xl:col-span-2 pt-5 px-5 space-y-5 bg-white border-r h-[75vh] 2xl:h-[80vh] overflow-y-auto">
          <Family className="w-full h-auto" />
          <hr />
          <AboutMe className="w-full h-auto" />
        </div>

        <div className="col-span-9 2xl:col-span-10 relative w-full h-full overflow-y-auto">
          <div className="border-b w-full bg-white sticky top-0 z-10 h-fit">
            <Navigation />
          </div>
          <div className="h-full px-3 pt-3 lg:px-5 lg:pt-5">{children}</div>
        </div>
      </div>
    </main>
  )
}
