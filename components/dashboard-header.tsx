import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SL</span>
            </div>
            <span className="font-bold text-lg">StreamLine</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              MODULES
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              PRICING
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm">
            LOG IN
          </Button>
          <Button size="sm" className="text-sm">
            SIGN UP
          </Button>
        </div>
      </div>
    </header>
  )
}
