"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

const ArrowLeft = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
)

const Shield = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 13c0 5-3.5 7.5-7.5 7.5S5 18 5 13V6l7.5-3L20 6v7Z" />
  </svg>
)

const DollarSign = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const Zap = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
)

const Sparkles = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
)

const ArrowRight = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

export default function CreatePaymentPage() {
  const [recipientAddress, setRecipientAddress] = useState("")
  const [inputToken, setInputToken] = useState("ETH")
  const [inputAmount, setInputAmount] = useState("")
  const [outputToken, setOutputToken] = useState("DAI")
  const [escrowDays, setEscrowDays] = useState("30")
  const [customContract, setCustomContract] = useState(false)
  const [disputeResolution, setDisputeResolution] = useState(true)
  const [tokenModalOpen, setTokenModalOpen] = useState(false)
  const [selectingFor, setSelectingFor] = useState<"input" | "output">("input")
  const [contractModalOpen, setContractModalOpen] = useState(false)
  const [disputeModalOpen, setDisputeModalOpen] = useState(false)
  const [contractFile, setContractFile] = useState<File | null>(null)
  const [contractTerms, setContractTerms] = useState("")
  const [arbitratorAddress, setArbitratorAddress] = useState("")
  const [arbitrationFee, setArbitrationFee] = useState("0.01")

  const tokens = [
    // Ethereum Network
    { symbol: "ETH", name: "Ethereum", price: 2490, icon: "⟠", network: "Ethereum" },
    { symbol: "DAI", name: "Dai Stablecoin", price: 1, icon: "🏛️", network: "Ethereum" },
    { symbol: "USDC", name: "USD Coin", price: 1, icon: "💰", network: "Ethereum" },
    { symbol: "USDT", name: "Tether", price: 1, icon: "💵", network: "Ethereum" },

    // Polygon Network
    { symbol: "MATIC", name: "Polygon", price: 0.87, icon: "🔷", network: "Polygon" },
    { symbol: "WETH", name: "Wrapped Ethereum", price: 2490, icon: "⟠", network: "Polygon" },
    { symbol: "USDC.e", name: "USD Coin (Polygon)", price: 1, icon: "💰", network: "Polygon" },

    // Arbitrum Network
    { symbol: "ARB", name: "Arbitrum", price: 0.75, icon: "🔵", network: "Arbitrum" },
    { symbol: "ETH", name: "Ethereum (Arbitrum)", price: 2490, icon: "⟠", network: "Arbitrum" },
    { symbol: "USDC", name: "USD Coin (Arbitrum)", price: 1, icon: "💰", network: "Arbitrum" },

    // Avalanche Network
    { symbol: "AVAX", name: "Avalanche", price: 28.5, icon: "🔺", network: "Avalanche" },
    { symbol: "WAVAX", name: "Wrapped AVAX", price: 28.5, icon: "🔺", network: "Avalanche" },
    { symbol: "USDC", name: "USD Coin (Avalanche)", price: 1, icon: "💰", network: "Avalanche" },

    // Binance Smart Chain
    { symbol: "BNB", name: "BNB", price: 315, icon: "🟡", network: "BSC" },
    { symbol: "BUSD", name: "Binance USD", price: 1, icon: "💵", network: "BSC" },
    { symbol: "CAKE", name: "PancakeSwap", price: 2.15, icon: "🥞", network: "BSC" },

    // Fantom Network
    { symbol: "FTM", name: "Fantom", price: 0.42, icon: "👻", network: "Fantom" },
    { symbol: "WFTM", name: "Wrapped Fantom", price: 0.42, icon: "👻", network: "Fantom" },
    { symbol: "USDC", name: "USD Coin (Fantom)", price: 1, icon: "💰", network: "Fantom" },

    // Optimism Network
    { symbol: "OP", name: "Optimism", price: 1.85, icon: "🔴", network: "Optimism" },
    { symbol: "ETH", name: "Ethereum (Optimism)", price: 2490, icon: "⟠", network: "Optimism" },
    { symbol: "USDC", name: "USD Coin (Optimism)", price: 1, icon: "💰", network: "Optimism" },

    // TRON Network
    { symbol: "TRX", name: "TRON", price: 0.16, icon: "🔶", network: "TRON" },
    { symbol: "USDT", name: "Tether (TRON)", price: 1, icon: "💵", network: "TRON" },
    { symbol: "BTT", name: "BitTorrent", price: 0.0000008, icon: "🌊", network: "TRON" },

    // Harmony Network
    { symbol: "ONE", name: "Harmony", price: 0.012, icon: "🎵", network: "Harmony" },
    { symbol: "WONE", name: "Wrapped ONE", price: 0.012, icon: "🎵", network: "Harmony" },

    // ApeChain Network
    { symbol: "APE", name: "ApeCoin", price: 1.25, icon: "🐵", network: "ApeChain" },
    { symbol: "WAPE", name: "Wrapped APE", price: 1.25, icon: "🐵", network: "ApeChain" },

    // Cardano Network
    { symbol: "ADA", name: "Cardano", price: 0.35, icon: "🔷", network: "Cardano" },
    { symbol: "DJED", name: "Djed Stablecoin", price: 1, icon: "💎", network: "Cardano" },

    // TomoChain Network
    { symbol: "TOMO", name: "TomoChain", price: 0.85, icon: "⚡", network: "TomoChain" },
    { symbol: "WTOMO", name: "Wrapped TOMO", price: 0.85, icon: "⚡", network: "TomoChain" },
  ]

  const getTokenPrice = (symbol: string) => {
    const token = tokens.find((t) => t.symbol === symbol)
    return token?.price || 1
  }

  const calculateUsdValue = (amount: string, token: string) => {
    const numAmount = Number.parseFloat(amount) || 0
    const price = getTokenPrice(token)
    return (numAmount * price).toLocaleString()
  }

  const calculateOutputAmount = () => {
    const numAmount = Number.parseFloat(inputAmount) || 0
    const inputPrice = getTokenPrice(inputToken)
    const outputPrice = getTokenPrice(outputToken)
    const outputAmount = (numAmount * inputPrice) / outputPrice
    return outputAmount.toLocaleString()
  }

  const handleTokenSelect = (token: string) => {
    if (selectingFor === "input") {
      setInputToken(token)
    } else {
      setOutputToken(token)
    }
    setTokenModalOpen(false)
  }

  const openTokenModal = (type: "input" | "output") => {
    setSelectingFor(type)
    setTokenModalOpen(true)
  }

  const handleContractToggle = (checked: boolean) => {
    setCustomContract(checked)
    if (checked) {
      setContractModalOpen(true)
    }
  }

  const handleDisputeToggle = (checked: boolean) => {
    setDisputeResolution(checked)
    if (checked) {
      setDisputeModalOpen(true)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setContractFile(file)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="floating-particles">
        <div className="particle" style={{ left: "10%", animationDuration: "8s" }}></div>
        <div className="particle" style={{ left: "90%", animationDuration: "6s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-12 max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/">
            <Button variant="ghost" size="lg" className="smooth-transition hover-lift">
              <ArrowLeft />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Create Payment Link</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Unified Form */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield />
                Payment Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <Label htmlFor="recipient" className="text-lg font-medium text-primary">
                  Recipient Wallet Address
                </Label>
                <Input
                  id="recipient"
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  placeholder="0x... or ENS domain"
                  className="mt-2 h-14 text-lg border-primary/30 bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="amount" className="text-lg font-medium text-primary">
                    Amount to Send
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                    placeholder="0.00"
                    className="mt-2 h-14 text-lg border-primary/30 bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {inputAmount && (
                    <div className="mt-2 text-sm text-muted-foreground flex items-center gap-1">
                      <DollarSign />${calculateUsdValue(inputAmount, inputToken)} USD
                    </div>
                  )}
                </div>
                <div>
                  <Label className="text-lg font-medium text-primary">Input Token</Label>
                  <Button
                    variant="outline"
                    onClick={() => openTokenModal("input")}
                    className="mt-2 w-full h-14 text-lg border-primary/30 bg-background/50 backdrop-blur-sm hover:border-primary hover:ring-2 hover:ring-primary/20 justify-start"
                  >
                    <span className="text-2xl mr-2">{tokens.find((t) => t.symbol === inputToken)?.icon}</span>
                    {inputToken}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="text-lg font-medium text-accent">Output Token</Label>
                  <Button
                    variant="outline"
                    onClick={() => openTokenModal("output")}
                    className="mt-2 w-full h-14 text-lg border-accent/30 bg-background/50 backdrop-blur-sm hover:border-accent hover:ring-2 hover:ring-accent/20 justify-start"
                  >
                    <span className="text-2xl mr-2">{tokens.find((t) => t.symbol === outputToken)?.icon}</span>
                    {outputToken}
                  </Button>
                </div>
                <div>
                  <Label className="text-lg font-medium text-accent">Recipient Receives</Label>
                  <div className="mt-2 w-full h-14 px-4 text-lg border border-accent/30 rounded-lg bg-background/50 backdrop-blur-sm text-accent font-bold flex items-center">
                    {inputAmount ? calculateOutputAmount() : "0"} {outputToken}
                  </div>
                  {inputAmount && (
                    <div className="mt-2 text-sm text-muted-foreground flex items-center gap-1">
                      <DollarSign />${calculateUsdValue(calculateOutputAmount().replace(/,/g, ""), outputToken)} USD
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="escrow" className="text-lg font-medium text-primary">
                  Escrow Duration (Days)
                </Label>
                <Select value={escrowDays} onValueChange={setEscrowDays}>
                  <SelectTrigger className="mt-2 h-14 text-lg border-primary/30 bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="14">14 days</SelectItem>
                    <SelectItem value="30">30 days (Recommended)</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="contract"
                    checked={customContract}
                    onChange={(e) => handleContractToggle(e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-primary"
                  />
                  <Label htmlFor="contract" className="text-lg cursor-pointer">
                    Upload custom contract (for employers)
                  </Label>
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="dispute"
                    checked={disputeResolution}
                    onChange={(e) => handleDisputeToggle(e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-primary"
                  />
                  <Label htmlFor="dispute" className="text-lg cursor-pointer">
                    Enable dispute resolution mechanism
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Preview & Features */}
          <div className="space-y-6">
            <Card className="border-accent/20 bg-card/80 backdrop-blur-sm glow-accent">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Sparkles />
                  Cross-Chain Magic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">No DEX Required</div>
                  <div className="text-lg text-muted-foreground">Direct cross-token conversion</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-muted-foreground">Platform Fees:</span>
                    <span className="text-accent font-bold">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-muted-foreground">Network Fees:</span>
                    <span className="text-accent font-bold">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-muted-foreground">Conversion Rate:</span>
                    <span className="text-primary font-bold">Live Market</span>
                  </div>
                </div>
                <Badge className="w-full justify-center py-3 text-lg bg-accent/20 text-accent border-accent/30">
                  EVM Compatible Chains
                </Badge>
              </CardContent>
            </Card>

            {/* Payment Preview */}
            <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Payment Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/20 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {inputAmount || "0"} {inputToken}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ${inputAmount ? calculateUsdValue(inputAmount, inputToken) : "0.00"} USD
                      </div>
                    </div>
                    <ArrowRight />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">
                        {inputAmount ? calculateOutputAmount() : "0"} {outputToken}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        $
                        {inputAmount
                          ? calculateUsdValue(calculateOutputAmount().replace(/,/g, ""), outputToken)
                          : "0.00"}{" "}
                        USD
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Security:</span>
                    <span className="text-primary">Smart Contract Escrow</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timelock:</span>
                    <span>{escrowDays} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dispute Resolution:</span>
                    <span className="text-accent">{disputeResolution ? "Enabled" : "Disabled"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/create/review">
            <Button
              className="h-16 px-16 text-xl font-bold glow-primary smooth-transition hover-lift"
              disabled={!recipientAddress || !inputAmount || Number.parseFloat(inputAmount) <= 0}
            >
              <Zap />
              <span className="ml-3">Generate Payment Link</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Contract Upload Modal */}
      <Dialog open={contractModalOpen} onOpenChange={setContractModalOpen}>
        <DialogContent className="max-w-2xl bg-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">📄 Upload Custom Contract</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 mt-6">
            <div>
              <Label className="text-lg font-medium text-primary">Contract File</Label>
              <div className="mt-2 border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="contract-upload"
                />
                <Label htmlFor="contract-upload" className="cursor-pointer">
                  <div className="text-4xl mb-4">📁</div>
                  <div className="text-lg font-medium text-primary">
                    {contractFile ? contractFile.name : "Click to upload contract"}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Supports PDF, DOC, DOCX, TXT files</div>
                </Label>
              </div>
            </div>

            <div>
              <Label htmlFor="terms" className="text-lg font-medium text-primary">
                Contract Terms & Conditions
              </Label>
              <Textarea
                id="terms"
                value={contractTerms}
                onChange={(e) => setContractTerms(e.target.value)}
                placeholder="Enter specific terms, milestones, deliverables, and conditions for this payment..."
                className="mt-2 min-h-32 border-primary/30 bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  setContractModalOpen(false)
                  setCustomContract(false)
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setContractModalOpen(false)}
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!contractFile && !contractTerms}
              >
                Save Contract
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dispute Resolution Modal */}
      <Dialog open={disputeModalOpen} onOpenChange={setDisputeModalOpen}>
        <DialogContent className="max-w-2xl bg-card border-accent/20 leading-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3 text-white">
              ⚖️ Dispute Resolution Settings
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 mt-6">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="text-lg font-medium text-accent mb-2">How it works:</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• If a dispute arises, either party can initiate arbitration</li>
                <li>• A neutral arbitrator reviews the case and evidence</li>
                <li>• The arbitrator's decision is final and binding</li>
                <li>• Funds are released based on the arbitration outcome</li>
              </ul>
            </div>

            <div>
              <Label htmlFor="arbitrator" className="text-lg font-medium text-accent">
                Arbitrator Address (Optional)
              </Label>
              <Input
                id="arbitrator"
                value={arbitratorAddress}
                onChange={(e) => setArbitratorAddress(e.target.value)}
                placeholder="0x... (Leave empty for default arbitrator)"
                className="mt-2 h-12 border-accent/30 bg-background/50 backdrop-blur-sm focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
              <div className="text-sm text-muted-foreground mt-2">
                If empty, we'll assign a verified arbitrator from our network
              </div>
            </div>

            <div>
              <Label htmlFor="arbitration-fee" className="text-lg font-medium text-accent">
                Arbitration Fee (ETH)
              </Label>
              <Input
                id="arbitration-fee"
                type="number"
                step="0.001"
                value={arbitrationFee}
                onChange={(e) => setArbitrationFee(e.target.value)}
                placeholder="0.01"
                className="mt-2 h-12 border-accent/30 bg-background/50 backdrop-blur-sm focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
              <div className="text-sm text-muted-foreground mt-2">
                Fee paid by the losing party to cover arbitration costs
              </div>
            </div>

            <div className="bg-muted/20 border border-primary/20 rounded-lg p-4">
              <div className="text-sm font-medium text-primary mb-2">Dispute Timeline:</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Dispute Filing Period:</span>
                  <span className="text-accent">Up to {escrowDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Arbitration Duration:</span>
                  <span className="text-accent">3-7 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Appeal Period:</span>
                  <span className="text-accent">24 hours</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  setDisputeModalOpen(false)
                  setDisputeResolution(false)
                }}
                className="flex-1"
              >
                Disable
              </Button>
              <Button onClick={() => setDisputeModalOpen(false)} className="flex-1 bg-accent hover:bg-accent/90">
                Enable Dispute Resolution
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Token Modal */}
      <Dialog open={tokenModalOpen} onOpenChange={setTokenModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] bg-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl">Select {selectingFor === "input" ? "Input" : "Output"} Token</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[60vh] mt-6">
            <div className="space-y-6">
              {[
                "Ethereum",
                "Polygon",
                "Arbitrum",
                "Avalanche",
                "BSC",
                "Fantom",
                "Optimism",
                "TRON",
                "Harmony",
                "ApeChain",
                "Cardano",
                "TomoChain",
              ].map((network) => {
                const networkTokens = tokens.filter((token) => token.network === network)
                if (networkTokens.length === 0) return null

                return (
                  <div key={network}>
                    <h3 className="text-lg font-semibold text-primary mb-3 border-b border-primary/20 pb-2">
                      {network} Network
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {networkTokens.map((token, index) => (
                        <Button
                          key={`${token.symbol}-${token.network}-${index}`}
                          variant="outline"
                          onClick={() => handleTokenSelect(token.symbol)}
                          className="h-16 flex items-center gap-3 border-primary/30 hover:border-primary hover:bg-primary/10 text-left justify-start"
                        >
                          <span className="text-2xl">{token.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold truncate">{token.symbol}</div>
                            <div className="text-xs text-muted-foreground truncate">{token.name}</div>
                            <div className="text-xs text-accent">${token.price.toLocaleString()}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
