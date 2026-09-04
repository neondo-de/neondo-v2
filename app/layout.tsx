import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NEONDO — The people behind the moment.",
  description: "The network for the people who make events happen.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
