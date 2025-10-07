import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Now in public beta</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Streamline your workflow, amplify your results
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed">
            The all-in-one platform that helps teams collaborate, automate, and scale faster. Built for modern
            businesses that refuse to compromise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent text-base px-8">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary text-base px-8 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_50%,rgba(228,107,78,0.1),transparent)]"></div>
    </section>
  )
}
