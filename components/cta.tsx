import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="border-b border-border/40 py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-secondary p-12 md:p-16 lg:p-20">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Ready to streamline your workflow?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
              Join thousands of teams already using StreamLine to work smarter and achieve more. Start your free trial
              today—no credit card required.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent text-base px-8">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary text-base px-8 bg-transparent"
              >
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,107,78,0.15),transparent_70%)]"></div>
        </div>
      </div>
    </section>
  )
}
