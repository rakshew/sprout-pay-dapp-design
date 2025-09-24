import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WalletProvider } from "@/hooks/use-wallet"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SproutPay - Crypto payments, simplified",
  description: "Send or receive any EVM token, across chains, with military-grade escrow protection.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <WalletProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </WalletProvider>
        <Analytics />
      </body>
    </html>
  )
}
