import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Navninder Benipal`s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
