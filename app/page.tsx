"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useWallet } from "@/hooks/use-wallet"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  const { isConnected, address, connectWallet, disconnectWallet } = useWallet()

  const handleWalletClick = async () => {
    if (isConnected) {
      disconnectWallet()
    } else {
      await connectWallet("metamask")
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden page-enter">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="floating-particles">
        <div className="particle" style={{ left: "10%", animationDuration: "8s" }}></div>
        <div className="particle" style={{ left: "20%", animationDuration: "6s" }}></div>
        <div className="particle" style={{ left: "60%", animationDuration: "10s" }}></div>
        <div className="particle" style={{ left: "80%", animationDuration: "7s" }}></div>
        <div className="particle" style={{ left: "90%", animationDuration: "9s" }}></div>
      </div>

      {/* Header */}
      <header className="border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50 cyber-border">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white font-heading">SproutPay</span>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                onClick={handleWalletClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent smooth-transition hover-lift btn-animate"
              >
                {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : "Connect Wallet"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left stagger-item">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
              <span className="text-sm font-medium text-primary">Built on ERC-7824 Protocol</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight font-heading">
              <span className="text-white">Crypto payments,</span>
              <br />
              <span className="text-primary">simplified.</span>
            </h1>

            <p className="text-xl text-white mb-10 text-balance max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
              Send or receive any EVM token, across chains, with military-grade escrow protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href="/create">
                <Button
                  size="lg"
                  className="h-16 px-10 text-lg font-semibold min-w-[180px] bg-primary hover:bg-primary/90 text-primary-foreground glow-primary smooth-transition hover-lift btn-animate"
                >
                  Send Payment
                </Button>
              </Link>
              <Link href="/receive">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-lg font-semibold min-w-[180px] border-2 border-accent/30 hover:border-accent/60 bg-accent/5 hover:bg-accent/10 text-accent hover:text-accent smooth-transition hover-lift btn-animate"
                >
                  Receive Payment
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center stagger-item">
            <div className="relative w-96 h-96 flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/ChatGPT%20Image%20Sep%2024%2C%202025%2C%2008_50_11%20PM-2tcftScPiQHQgiFDNq3HzbeSvx7V2q.png"
                alt="SproutPay Network - Cross-chain token connections"
                className="w-full h-full object-contain animate-spin-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          <div className="text-center mb-8">
            <p className="text-sm text-primary font-semibold tracking-wide uppercase">Trusted Across Networks</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: "Ethereum", color: "bg-[#627EEA]", letter: "E" },
              { name: "Polygon", color: "bg-[#8247E5]", letter: "P" },
              { name: "Avalanche", color: "bg-[#E84142]", letter: "A" },
              { name: "BNB Chain", color: "bg-[#F3BA2F]", letter: "B" },
              { name: "Arbitrum", color: "bg-[#28A0F0]", letter: "A" },
              { name: "Optimism", color: "bg-[#FF0420]", letter: "O" },
            ].map((chain, index) => (
              <div
                key={chain.name}
                className={`flex items-center gap-3 text-white hover:text-white smooth-transition stagger-item`}
              >
                <div
                  className={`w-8 h-8 ${chain.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg hover-lift`}
                >
                  {chain.letter}
                </div>
                <span className="text-sm font-medium text-white">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for Section */}
      <section className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="text-center mb-16 stagger-item">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Who is SproutPay for?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            The simplest way to move value onchain. No middlemen, no locked ecosystems, no guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Freelancers",
              desc: "Secure payment without chasing invoices",
              icon: "⭐",
              gradient: "from-primary/10 to-accent/10",
              border: "border-primary/40",
            },
            {
              title: "P2P Traders",
              desc: "Trustless escrow for peer-to-peer trades",
              icon: "🤝",
              gradient: "from-accent/10 to-primary/10",
              border: "border-accent/40",
            },
            {
              title: "Everyday Users",
              desc: "Simple crypto payments for everyone",
              icon: "👥",
              gradient: "from-primary/10 to-accent/10",
              border: "border-primary/40",
            },
            {
              title: "DAOs & Communities",
              desc: "Manage contributor payouts seamlessly",
              icon: "🏛️",
              gradient: "from-accent/10 to-primary/10",
              border: "border-accent/40",
            },
          ].map((item, index) => (
            <Card
              key={item.title}
              className={`p-8 bg-gradient-to-br ${item.gradient} border-2 ${item.border} hover:border-opacity-80 card-hover stagger-item`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-white leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 stagger-item">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How it works</h2>
            <p className="text-xl text-white">Three simple steps to secure crypto payments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Connect Wallet",
                desc: "Link your Web3 wallet to get started",
                gradient: "from-primary to-accent",
              },
              {
                step: "2",
                title: "Create/Send Link",
                desc: "Generate a secure payment link to share",
                gradient: "from-accent to-primary",
              },
              {
                step: "3",
                title: "Funds Unlock Securely",
                desc: "Escrow protection with optional token conversion",
                gradient: "from-primary to-accent",
              },
            ].map((item, index) => (
              <div key={item.step} className={`text-center stagger-item`}>
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl glow-primary hover-lift`}
                >
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-white text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SproutPay */}
      <section className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="text-center mb-16 stagger-item">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why SproutPay?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Cross-Token Settlement",
              desc: "Pay in one token, receive in another",
              icon: "🔄",
              gradient: "from-primary/10 to-accent/10",
              border: "border-primary/40",
            },
            {
              title: "Escrow Protection",
              desc: "Release only after timelock or approval",
              icon: "🛡️",
              gradient: "from-accent/10 to-primary/10",
              border: "border-accent/40",
            },
            {
              title: "Trustless Links",
              desc: "No custodians, no middlemen",
              icon: "⚡",
              gradient: "from-primary/10 to-accent/10",
              border: "border-primary/40",
            },
            {
              title: "Gas Auto-Pay",
              desc: "Optional gasless transactions",
              icon: "💎",
              gradient: "from-accent/10 to-primary/10",
              border: "border-accent/40",
            },
          ].map((item, index) => (
            <Card
              key={item.title}
              className={`p-8 bg-gradient-to-br ${item.gradient} border-2 ${item.border} hover:border-opacity-80 card-hover stagger-item`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-white leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials & Roadmap */}
      <section className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-white mb-12 font-heading">What users say</h2>
              <div className="space-y-8">
                {[
                  {
                    quote: "Freelancer safe-payments without chasing invoices",
                    name: "Sarah Chen",
                    role: "Web Designer",
                    gradient: "from-primary/10 to-accent/10",
                  },
                  {
                    quote: "Crypto-native escrow for global hires",
                    name: "Marcus Rodriguez",
                    role: "Startup Founder",
                    gradient: "from-accent/10 to-primary/10",
                  },
                ].map((testimonial, index) => (
                  <Card
                    key={testimonial.name}
                    className={`p-8 bg-gradient-to-br ${testimonial.gradient} border-2 border-primary/40 hover:border-primary/60 card-hover`}
                  >
                    <p className="text-white mb-6 text-lg leading-relaxed font-sans">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-semibold text-white font-heading">{testimonial.name}</div>
                        <div className="text-sm text-white font-sans">{testimonial.role}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-fade-in animation-delay-400">
              <h2 className="text-4xl font-bold text-white mb-12 font-heading">Roadmap</h2>
              <div className="space-y-8">
                {[
                  { phase: "✓", title: "V1 Payment Links", desc: "Secure escrow payments", status: "complete" },
                  { phase: "2", title: "V2 Multi-Sig", desc: "Team payment approvals", status: "upcoming" },
                  {
                    phase: "3",
                    title: "V3 Fiat On/Off Ramps",
                    desc: "Traditional payment integration",
                    status: "future",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex items-center gap-6">
                    <div
                      className={`w-12 h-12 ${item.status === "complete" ? "bg-gradient-to-r from-primary to-accent glow-primary" : "bg-muted"} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {item.phase}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg font-heading">{item.title}</div>
                      <div className="text-white font-sans">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 py-24 max-w-5xl text-center">
        <div className="stagger-item">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to simplify your crypto payments?</h2>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who trust SproutPay for secure, gasless payments across any EVM chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/create">
              <Button
                size="lg"
                className="h-16 px-10 text-lg font-semibold min-w-[180px] bg-primary hover:bg-primary/90 text-primary-foreground glow-primary smooth-transition hover-lift btn-animate"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-10 text-lg font-semibold min-w-[180px] border-2 border-accent/30 hover:border-accent/60 bg-accent/5 hover:bg-accent/10 text-accent hover:text-accent smooth-transition hover-lift btn-animate"
              >
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
