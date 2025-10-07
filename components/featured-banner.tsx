import { Button } from "@/components/ui/button"

export function FeaturedBanner() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-card to-secondary mb-8 h-[400px] flex items-center">
      <div className="absolute inset-0 opacity-20">
        <img src="/modern-tech-dashboard.png" alt="Featured" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 container mx-auto px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wide">LIVE</span>
          </div>
          <div className="inline-block bg-muted/50 rounded px-3 py-1 text-xs font-medium mb-3">Featured</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Master Your Workflow with StreamLine Pro</h1>
          <p className="text-muted-foreground mb-2 text-sm">JANUARY 15</p>
          <p className="text-muted-foreground mb-6">2PM ET</p>
          <Button size="lg" className="font-medium">
            GET STARTED NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
