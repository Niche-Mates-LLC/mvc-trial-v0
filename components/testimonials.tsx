export function Testimonials() {
  const testimonials = [
    {
      quote:
        "StreamLine transformed how our team collaborates. We've seen a 40% increase in productivity since switching.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechCorp",
    },
    {
      quote: "The automation features alone have saved us countless hours. It's like having an extra team member.",
      author: "Michael Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
    },
    {
      quote: "Best investment we've made this year. The ROI was clear within the first month of implementation.",
      author: "Emily Thompson",
      role: "CEO",
      company: "GrowthCo",
    },
  ]

  return (
    <section id="testimonials" className="border-b border-border/40 py-24 md:py-32 bg-card/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            See what our customers have to say about their experience with StreamLine.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-6 text-foreground leading-relaxed">"{testimonial.quote}"</blockquote>
              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
