import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
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
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent font-heading">
                SproutPay
              </span>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white glow-accent smooth-transition hover-lift">
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pulse-glow"></div>
              <span className="text-sm font-medium text-blue-400">Built on ERC-7824 Protocol</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight font-heading">
              <span className="text-foreground">Crypto payments,</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                simplified.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 text-balance max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
              Send or receive any EVM token, across chains, with military-grade escrow protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href="/create">
                <Button
                  size="lg"
                  className="h-16 px-10 text-lg font-semibold min-w-[180px] bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white glow-primary smooth-transition hover-lift"
                >
                  Send Payment
                </Button>
              </Link>
              <Link href="/receive">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-lg font-semibold min-w-[180px] border-2 border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 smooth-transition hover-lift"
                >
                  Receive Payment
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-fade-in animation-delay-400">
            <div className="relative w-96 h-96 flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2024%2C%202025%2C%2008_50_11%20PM-V2pZP1fVj6FeYlMFUGKSrEOUYfzXjO.png"
                alt="SproutPay Network - Cross-chain token connections"
                className="w-full h-full object-contain animate-spin-slow"
              />
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-blue-500/20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          <div className="text-center mb-8">
            <p className="text-sm text-blue-400 font-semibold tracking-wide uppercase">Trusted Across Networks</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: "Ethereum", color: "bg-blue-500", letter: "E" },
              { name: "Polygon", color: "bg-purple-500", letter: "P" },
              { name: "Avalanche", color: "bg-red-500", letter: "A" },
              { name: "BNB Chain", color: "bg-yellow-500", letter: "B" },
              { name: "Arbitrum", color: "bg-blue-600", letter: "A" },
              { name: "Optimism", color: "bg-red-500", letter: "O" },
            ].map((chain, index) => (
              <div
                key={chain.name}
                className={`flex items-center gap-3 text-muted-foreground hover:text-foreground smooth-transition animate-fade-in animation-delay-${200 + index * 100}`}
              >
                <div
                  className={`w-8 h-8 ${chain.color} rounded-full flex items-center justify-center text-white text-sm font-bold glow-primary`}
                >
                  {chain.letter}
                </div>
                <span className="text-sm font-medium">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for Section */}
      <section className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Who is SproutPay for?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The simplest way to move value onchain. No middlemen, no locked ecosystems, no guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Freelancers",
              desc: "Secure payment without chasing invoices",
              icon: "⭐",
              gradient: "from-blue-500/10 to-purple-500/10",
              border: "border-blue-500/40",
            },
            {
              title: "P2P Traders",
              desc: "Trustless escrow for peer-to-peer trades",
              icon: "🤝",
              gradient: "from-cyan-500/10 to-blue-500/10",
              border: "border-cyan-500/40",
            },
            {
              title: "Everyday Users",
              desc: "Simple crypto payments for everyone",
              icon: "👥",
              gradient: "from-pink-500/10 to-red-500/10",
              border: "border-pink-500/40",
            },
            {
              title: "DAOs & Communities",
              desc: "Manage contributor payouts seamlessly",
              icon: "🏛️",
              gradient: "from-green-500/10 to-cyan-500/10",
              border: "border-green-500/40",
            },
          ].map((item, index) => (
            <Card
              key={item.title}
              className={`p-8 bg-gradient-to-br ${item.gradient} border-2 ${item.border} hover:border-opacity-80 card-hover animate-fade-in animation-delay-${200 + index * 100}`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">How it works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to secure crypto payments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Connect Wallet",
                desc: "Link your Web3 wallet to get started",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                step: "2",
                title: "Create/Send Link",
                desc: "Generate a secure payment link to share",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                step: "3",
                title: "Funds Unlock Securely",
                desc: "Escrow protection with optional token conversion",
                gradient: "from-cyan-500 to-blue-500",
              },
            ].map((item, index) => (
              <div key={item.step} className={`text-center animate-fade-in animation-delay-${400 + index * 200}`}>
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl glow-primary`}
                >
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SproutPay */}
      <section className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why SproutPay?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Cross-Token Settlement",
              desc: "Pay in one token, receive in another",
              icon: "🔄",
              gradient: "from-blue-500/10 to-cyan-500/10",
              border: "border-blue-500/40",
            },
            {
              title: "Escrow Protection",
              desc: "Release only after timelock or approval",
              icon: "🛡️",
              gradient: "from-purple-500/10 to-pink-500/10",
              border: "border-purple-500/40",
            },
            {
              title: "Trustless Links",
              desc: "No custodians, no middlemen",
              icon: "⚡",
              gradient: "from-cyan-500/10 to-green-500/10",
              border: "border-cyan-500/40",
            },
            {
              title: "Gas Auto-Pay",
              desc: "Optional gasless transactions",
              icon: "💎",
              gradient: "from-pink-500/10 to-red-500/10",
              border: "border-pink-500/40",
            },
          ].map((item, index) => (
            <Card
              key={item.title}
              className={`p-8 bg-gradient-to-br ${item.gradient} border-2 ${item.border} hover:border-opacity-80 card-hover animate-fade-in animation-delay-${200 + index * 100}`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials & Roadmap */}
      <section className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-12 font-heading">What users say</h2>
              <div className="space-y-8">
                {[
                  {
                    quote: "Freelancer safe-payments without chasing invoices",
                    name: "Sarah Chen",
                    role: "Web Designer",
                    gradient: "from-blue-500/10 to-purple-500/10",
                  },
                  {
                    quote: "Crypto-native escrow for global hires",
                    name: "Marcus Rodriguez",
                    role: "Startup Founder",
                    gradient: "from-purple-500/10 to-pink-500/10",
                  },
                ].map((testimonial, index) => (
                  <Card
                    key={testimonial.name}
                    className={`p-8 bg-gradient-to-br ${testimonial.gradient} border-2 border-blue-500/40 hover:border-blue-500/60 card-hover`}
                  >
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed font-sans">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-semibold text-foreground font-heading">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground font-sans">{testimonial.role}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-fade-in animation-delay-400">
              <h2 className="text-4xl font-bold text-foreground mb-12 font-heading">Roadmap</h2>
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
                      className={`w-12 h-12 ${item.status === "complete" ? "bg-gradient-to-r from-green-500 to-cyan-500 glow-primary" : "bg-muted"} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {item.phase}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg font-heading">{item.title}</div>
                      <div className="text-muted-foreground font-sans">{item.desc}</div>
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
        <div className="animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Ready to simplify your crypto payments?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who trust SproutPay for secure, gasless payments across any EVM chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/create">
              <Button
                size="lg"
                className="h-16 px-10 text-lg font-semibold min-w-[180px] bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white glow-primary smooth-transition hover-lift"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-10 text-lg font-semibold min-w-[180px] border-2 border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 smooth-transition hover-lift"
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
