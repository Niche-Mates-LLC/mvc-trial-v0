import { Button } from "@/components/ui/button"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small teams getting started",
      features: ["Up to 10 team members", "Basic automation", "5GB storage", "Email support", "Core integrations"],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "79",
      description: "For growing teams that need more power",
      features: [
        "Up to 50 team members",
        "Advanced automation",
        "100GB storage",
        "Priority support",
        "All integrations",
        "Custom workflows",
        "Advanced analytics",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs",
      features: [
        "Unlimited team members",
        "Enterprise automation",
        "Unlimited storage",
        "Dedicated support",
        "Custom integrations",
        "SSO & advanced security",
        "SLA guarantee",
        "Custom training",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="border-b border-border/40 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border p-8 ${
                plan.highlighted ? "border-primary bg-card shadow-lg shadow-primary/20" : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && <span className="text-4xl font-bold text-foreground">${plan.price}</span>}
                  {plan.price === "Custom" && <span className="text-4xl font-bold text-foreground">{plan.price}</span>}
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </div>
              <Button
                className={`w-full mb-6 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
