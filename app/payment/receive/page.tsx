"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Wallet,
  Shield,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  QrCode,
  Copy,
  ExternalLink,
} from "lucide-react"
import { useWallet } from "@/hooks/use-wallet"
import { useState } from "react"

export default function ReceivePaymentPage() {
  const { isConnected, address, connectWallet } = useWallet()
  const [copied, setCopied] = useState(false)

  const paymentStatusUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/payment/status`

  const handleConnectWallet = async () => {
    await connectWallet("metamask")
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(paymentStatusUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="floating-particles">
        <div className="particle" style={{ left: "20%", animationDuration: "8s" }}></div>
        <div className="particle" style={{ left: "80%", animationDuration: "6s" }}></div>
        <div className="particle" style={{ left: "50%", animationDuration: "10s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-12 max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/paymentlink">
            <Button variant="ghost" size="lg" className="smooth-transition hover-lift">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Receive Payment</h1>
        </div>

        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 glow-primary">
            <Sparkles className="w-16 h-16 text-primary pulse-glow" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Payment Ready to Claim</h2>
          <p className="text-xl text-muted-foreground">Connect your wallet to receive 8,100 DAI</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm glow-primary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="w-7 h-7 text-primary" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/20 rounded-xl p-6 border border-primary/20">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-accent">8,100 DAI</div>
                  <div className="text-lg text-muted-foreground">≈ $8,100 value</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">From:</span>
                    <span className="font-mono text-sm">0x1234...5678</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Original Amount:</span>
                    <span>2.5 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversion:</span>
                    <span className="text-primary">ETH → DAI</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Smart contract verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Escrow period: 30 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Zero gas fees</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-card/80 backdrop-blur-sm glow-accent">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <QrCode className="w-7 h-7 text-accent" />
                Payment Status Link
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="w-48 h-48 bg-white rounded-xl p-4 mx-auto border border-accent/20">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(paymentStatusUrl)}`}
                    alt="Payment Status QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Scan to view payment status and remaining days</p>
              </div>

              <div className="space-y-3">
                <div className="bg-muted/20 rounded-xl p-3 border border-accent/20">
                  <p className="font-mono text-xs break-all text-muted-foreground">{paymentStatusUrl}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="border-accent/30 bg-transparent"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                  <Link href="/payment/status">
                    <Button variant="outline" size="sm" className="w-full border-accent/30 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Status
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                <h4 className="font-bold text-accent mb-2">For Recipients:</h4>
                <p className="text-sm text-muted-foreground">
                  Share this QR code or link to track payment status, view remaining escrow days, and access claim
                  options.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Wallet className="w-7 h-7 text-accent" />
                Wallet Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isConnected ? (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Wallet className="w-10 h-10 text-accent" />
                  </div>
                  <p className="text-lg text-muted-foreground">Connect your wallet to claim payment</p>
                  <Button onClick={handleConnectWallet} className="w-full h-14 text-lg glow-accent smooth-transition">
                    Connect Wallet
                  </Button>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant="outline"
                      className="h-12 border-accent/30 bg-transparent"
                      onClick={handleConnectWallet}
                    >
                      MetaMask
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 border-accent/30 bg-transparent"
                      onClick={() => connectWallet("walletconnect")}
                    >
                      WalletConnect
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 border-accent/30 bg-transparent"
                      onClick={() => connectWallet("coinbase")}
                    >
                      Coinbase
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-primary">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-lg text-primary font-bold">Wallet Connected</p>
                  <div className="bg-muted/20 rounded-xl p-4">
                    <p className="font-mono text-sm">{address}</p>
                  </div>
                  <Link href="/payment/confirm">
                    <Button className="w-full h-14 text-lg glow-primary smooth-transition">Claim Payment</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="border-orange-500/20 bg-orange-500/5 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-orange-500 mb-2">Important Security Notice</h3>
                <p className="text-muted-foreground">
                  This payment is secured by a smart contract with a 30-day escrow period. The funds will be
                  automatically released after the timelock expires, or can be released early by the sender. Dispute
                  resolution is available if needed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
